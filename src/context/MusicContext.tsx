import { createContext, useContext, useEffect, useRef, useState } from 'react'

type MusicContextType = {
  isPlaying: boolean
  toggleMusic: () => void
  volume: number
  setVolume: (v: number) => void
}

const MusicContext = createContext<MusicContextType | undefined>(undefined)

export const MusicProvider = ({ children }: { children: React.ReactNode }) => {
  const audioRef = useRef(new Audio('/lagoon-lull.mp3'))
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.5)

  useEffect(() => {
    const audio = audioRef.current
    audio.loop = true
    audio.volume = volume

    if (isPlaying) {
      audio.play().catch(err => console.warn('Autoplay blocked:', err))
    } else {
      audio.pause()
    }
  }, [isPlaying, volume])

  const toggleMusic = () => setIsPlaying(prev => !prev)

  return (
    <MusicContext.Provider value={{ isPlaying, toggleMusic, volume, setVolume }}>
      {children}
    </MusicContext.Provider>
  )
}

export const useMusic = () => {
  const context = useContext(MusicContext)
  if (!context) throw new Error('useMusic must be used within a MusicProvider')
  return context
}
