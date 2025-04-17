import { useMusic } from '../context/MusicContext'

const MusicController = () => {
  const { isPlaying, toggleMusic, volume, setVolume } = useMusic()

  return (
    <div style={{
      position: 'fixed',
      bottom: '1rem',
      right: '1rem',
      background: 'white',
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '0.75rem',
      zIndex: 1000,
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      <button onClick={toggleMusic} style={{ marginRight: '0.5rem' }}>
        {isPlaying ? '🔇 Mute' : '🔊 Play Music'}
      </button>
      <input
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={volume}
        onChange={e => setVolume(Number(e.target.value))}
      />
    </div>
  )
}

export default MusicController
