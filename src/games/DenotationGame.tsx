import { useState } from 'react'
import { denotationPairs } from '../data/content'
import './DenotationGame.css'
import { Link } from 'react-router-dom'

type WordPair = {
  word1: string
  word2: string
  connotation1: string // "positive", "neutral", "negative"
  connotation2: string
  explanation: string
}

const DenotationGame = () => {
  const [selected, setSelected] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const handleSelect = (pairKey: string, word: string) => {
    setSelected({ ...selected, [pairKey]: word })
  }

  const handleSubmit = () => {
    setSubmitted(true)
  }

  return (
    <div className="denotation-game-container">
      <div className="denotation-card">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h2 className="text-2xl font-bold mb-4">💬 Denotation vs. Connotation</h2>
        <p className="study-blurb">
  Many words may share a denotation (literal meaning) but differ significantly in connotation — the emotional or cultural "vibe" they carry. 
  For example, “childlike” often feels innocent and pure, while “childish” can sound immature or negative. 
  This activity is based on the idea that emotional tone is just as important as meaning when choosing words.
  <br /><br />
  <em>Rao, V. C. S. (2017). A brief study of words used in denotation and connotation. 
  <span style={{ fontStyle: 'normal' }}>Journal for Research Scholars and Professionals of English Language Teaching</span>.</em>
</p>

        <p className="mb-6">Choose the word that you think sounds more emotionally positive, neutral, or negative.</p>

        {denotationPairs.map((pair: WordPair, index: number) => {
          const pairKey = `${pair.word1}-${pair.word2}`
          const selectedWord = selected[pairKey]
          const isSubmitted = submitted && selectedWord
          const isCorrect = isSubmitted &&
            ((selectedWord === pair.word1 && pair.connotation1 === 'positive') ||
            (selectedWord === pair.word2 && pair.connotation2 === 'positive'))

          return (
            <div key={pairKey} className="word-pair-block">
              <div className="pair-label">Which sounds more positive?</div>
              <div className="word-buttons">
                {[pair.word1, pair.word2].map(word => (
                  <button
                    key={word}
                    className={`word-btn ${
                      selectedWord === word ? 'selected' : ''
                    }`}
                    onClick={() => handleSelect(pairKey, word)}
                    disabled={submitted}
                  >
                    {word}
                  </button>
                ))}
              </div>

              {isSubmitted && (
                <div className="feedback">
                  {isCorrect ? '✅ Correct! ' : 'ℹ️'}
                  {pair.explanation}
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

export default DenotationGame
