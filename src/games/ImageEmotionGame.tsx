import { useState } from 'react'
import { imagePairs } from '../data/content'
import { Link } from 'react-router-dom'
import './ImageEmotionGame.css'

type ImageData = {
  url: string
  label: string
  intensity: number
}

type ImagePair = {
  img1: ImageData
  img2: ImageData
  explanation: string
}

const ImageEmotionGame = () => {
  const [selected, setSelected] = useState<Record<number, 'img1' | 'img2'>>({})
  const [submitted, setSubmitted] = useState(false)

  const handleSelect = (index: number, choice: 'img1' | 'img2') => {
    setSelected({ ...selected, [index]: choice })
  }

  const handleSubmit = () => {
    setSubmitted(true)
  }

  return (
    <div className="image-game-container">
      <div className="image-card">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h2 className="text-2xl font-bold mb-4">🖼️ Image Emotion Challenge</h2>
        <p className="blurb">
          This challenge explores how we emotionally respond to different images based on <strong>color</strong>, 
          <strong>lighting</strong>, and <strong>symbolism</strong>. 
          Your choices reflect research showing that visual elements like dark tones, facial expressions, and image content 
          shape our emotional interpretation (Ananthram et al., 2023; Kim et al., 2018).
        
        <br/><br/><strong>Select the most emotionally intense images:</strong>
        </p>

        {imagePairs.map((pair, idx) => {
          const choice = selected[idx]
          const correct = pair.img1.intensity > pair.img2.intensity ? 'img1' : 'img2'
          const isCorrect = submitted && choice === correct

          return (
            <div key={idx} className="image-pair">
              <div className="image-set">
                {(['img1', 'img2'] as const).map(key => (
                  <button
                    key={key}
                    className={`image-option ${choice === key ? 'selected' : ''}`}
                    onClick={() => handleSelect(idx, key)}
                    disabled={submitted}
                  >
                    <img src={pair[key].url} alt={pair[key].label} />
                    <div className="image-label">{pair[key].label}</div>
                  </button>
                ))}
              </div>

              {submitted && (
                <div className="feedback">
                  {isCorrect ? '✅ Great pick!' : 'ℹ️ Not the most intense one this time.'}
                  <p className="explanation">{pair.explanation}</p>
                </div>
              )}
            </div>
          )
        })}

        {!submitted && (
          <button onClick={handleSubmit} className="submit-btn">
            Submit
          </button>
        )}
      </div>
    </div>
  )
}

export default ImageEmotionGame
