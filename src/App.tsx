import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import ColorMatcher from './games/ColorMatcher'
import DenotationGame from './games/DenotationGame'
import TweetEmotionGame from './games/TweetEmotionGame'
import ImageEmotionGame from './games/ImageEmotionGame'
import SameWordsGame from './games/SameWordsGame'
import MusicController from './components/MusicController'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/color" element={<ColorMatcher />} />
        <Route path="/words" element={<DenotationGame />} />
        <Route path="/tweets" element={<TweetEmotionGame />} />
        <Route path="/images" element={<ImageEmotionGame />} />
        <Route path="/same-words" element={<SameWordsGame />} />
      </Routes>
      <MusicController />
    </>
  )
}
