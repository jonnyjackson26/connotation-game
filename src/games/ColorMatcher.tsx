import { useState } from 'react'
import { colorEmotions } from '../data/content'
import confetti from 'canvas-confetti'
import { Link } from 'react-router-dom'
import './ColorMatcher.css'

type EmotionOption = {
  emotion: string
  options: string[]
  correctColor: string
}

const ColorMatcher = () => {
  const [started, setStarted] = useState(false)
  const [selected, setSelected] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const handleSelect = (emotion: string, color: string) => {
    setSelected({ ...selected, [emotion]: color })
  }

  const handleSubmit = () => {
    setSubmitted(true)

    const allCorrect = colorEmotions.every(
      ({ emotion, correctColor }) => selected[emotion] === correctColor
    )

    if (allCorrect) {
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
      })
    }
  }

  if (!started) {
    return (
      <div className="color-game-container">
        <Link to="/" style={{ marginBottom: '1rem', display: 'inline-block', color: '#2563eb' }}>
          ← Back to Home
        </Link>
        <div className="start-screen">
          <h2 className="text-3xl font-bold mb-4">🎨 Color & Emotion Matcher</h2>
          <p className="study-blurb">
  <em>Sutton, T. M., & Altarriba, J. (2016). Color associations to emotion and emotion-laden words: 
  A collection of norms for stimulus construction and selection. 
  <span style={{ fontStyle: 'normal' }}>Behavior Research Methods, 48(2), 686–728.</span> https://doi.org/10.3758/s13428-015-0598-8</em>
</p>

          <p className="mb-6">
            Did you know that people associate certain colors with specific feelings? 
            In this challenge, you’ll try to match emotions with the color that most people feel matches that emotion best.
          </p>
          <button onClick={() => setStarted(true)} className="submit-btn">
            Let's Play!
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="color-game-container">
      <Link to="/" style={{ marginBottom: '1rem', display: 'inline-block', color: '#2563eb' }}>
        ← Back to Home
      </Link>
      <div className="color-card">
        <h2 className="text-2xl mb-4">🎨 Color & Emotion Matcher</h2>
        <p className="mb-6">Pick the color that you think matches each emotion best.</p>

        {colorEmotions.map(({ emotion, options, correctColor }: EmotionOption) => (
          <div key={emotion} className="mb-6">
            <div className="emotion-label">{emotion}</div>
            <div>
              {options.map(color => (
                <button
                  key={color}
                  onClick={() => handleSelect(emotion, color)}
                  className={`color-btn ${
                    selected[emotion] === color ? 'selected' : ''
                  }`}
                >
                  <span className="swatch" style={{ backgroundColor: color }}></span>
                  {color}
                </button>
              ))}
            </div>
            {submitted && (
              <div className="feedback">
                {selected[emotion] === correctColor
                  ? '✅ Nice job! Most people agree with that option.'
                  : `❌ Hmm, actually, most people picked "${correctColor}".`}
              </div>
            )}
          </div>
        ))}

        {!submitted && (
          <button onClick={handleSubmit} className="submit-btn">
            Submit Answers
          </button>
        )}
      </div>
    </div>
  )
}

export default ColorMatcher
