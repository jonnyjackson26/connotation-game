import { useState } from 'react'
import { tweetComparisons } from '../data/content'
import { Link } from 'react-router-dom'
import './TweetEmotionGame.css'

type TweetSet = {
  tweetPlain: string
  tweetHashtag: string
  strongerEmotion: 'plain' | 'hashtag'
  explanation: string
}

const TweetEmotionGame = () => {
  const [selected, setSelected] = useState<Record<number, 'plain' | 'hashtag'>>({})
  const [submitted, setSubmitted] = useState(false)

  const handleSelect = (index: number, choice: 'plain' | 'hashtag') => {
    setSelected({ ...selected, [index]: choice })
  }

  const handleSubmit = () => {
    setSubmitted(true)
  }

  return (
    <div className="tweet-game-container">
      <div className="tweet-card">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h2 className="text-2xl font-bold mb-4">🐦 Twitter Feels</h2>
        <p className="study-blurb">
  Research has shown that <strong>hashtags can intensify the emotional tone</strong> of messages. 
  In a study by Mohammad and Bravo-Marquez (2017), tweets with emotion-related hashtags were 
  rated as more emotionally intense than those without. This activity explores how that works in practice.
  <br /><br />
  <em>Mohammad, S., & Bravo-Marquez, F. (2017). Emotion intensities in tweets. 
  In N. Ide, A. Herbelot, & L. Márquez (Eds.), Proceedings of the 6th Joint Conference on Lexical and 
  Computational Semantics (pp. 65–77). Association for Computational Linguistics. 
  https://doi.org/10.18653/v1/S17-1007</em>
</p>

        <p className="mb-6">
          For each pair of tweets, choose the one that feels more emotionally intense.
        </p>

        {tweetComparisons.map((tweetSet: TweetSet, index) => {
          const choice = selected[index]
          const isCorrect = submitted && choice === tweetSet.strongerEmotion

          return (
            <div key={index} className="tweet-set">
              <div className="tweet-options">
                <button
                  className={`tweet-btn ${choice === 'plain' ? 'selected' : ''}`}
                  onClick={() => handleSelect(index, 'plain')}
                  disabled={submitted}
                >
                  {tweetSet.tweetPlain}
                </button>
                <button
                  className={`tweet-btn ${choice === 'hashtag' ? 'selected' : ''}`}
                  onClick={() => handleSelect(index, 'hashtag')}
                  disabled={submitted}
                >
                  {tweetSet.tweetHashtag}
                </button>
              </div>

              {submitted && (
                <div className="feedback">
                  {isCorrect ? '✅ Nice call! ' : 'ℹ️'}
                  {tweetSet.explanation}
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

export default TweetEmotionGame
