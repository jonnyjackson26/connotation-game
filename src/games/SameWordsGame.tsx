import { useState } from 'react'
import { sameWordsGroups } from '../data/content'
import { Link } from 'react-router-dom'
import './SameWordsGame.css'

type Option = {
  context: string
  intensity: number
  explanation: string
}

type Group = {
  phrase: string
  options: Option[]
}

const SameWordsGame = () => {
  const [selectedOptions, setSelectedOptions] = useState<Record<number, number>>({})
  const [submitted, setSubmitted] = useState(false)

  const handleSelect = (groupIdx: number, optionIdx: number) => {
    setSelectedOptions(prev => ({ ...prev, [groupIdx]: optionIdx }))
  }

  const handleSubmit = () => {
    if (Object.keys(selectedOptions).length === sameWordsGroups.length) {
      setSubmitted(true)
    }
  }

  return (
    <div className="same-words-container">
      <div className="same-words-card">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h2 className="text-2xl font-bold mb-4">🧠 Same Words, Different Feels</h2>
        <p className="blurb">
          This challenge shows how context can completely change the emotional impact of identical phrases.
          Research suggests that emotional meaning doesn’t just depend on the words themselves, but on tone, framing, and background.
          This activity is based on findings from emotional language processing and connotation in communication.
          <br /><br />
          <strong>Pick the most emotionally intense usage for each word or phrase</strong>
          <br /><br />
          <em>Rao, V. C. S. (2017). A brief study of words used in denotation and connotation. 
          Journal for Research Scholars and Professionals of English Language Teaching.</em>
        </p>

        {sameWordsGroups.map((group, groupIdx) => {
          const selected = selectedOptions[groupIdx]
          const correctIdx = group.options.reduce(
            (maxIdx, option, idx, arr) => option.intensity > arr[maxIdx].intensity ? idx : maxIdx,
            0
          )
          const submittedSelection = group.options[selected ?? -1]

          return (
            <div key={groupIdx} className="group-block">
              <h3 className="phrase-label">{group.phrase}</h3>
              {group.options.map((option, optionIdx) => (
                <button
                  key={optionIdx}
                  className={`scenario-btn ${selected === optionIdx ? 'selected' : ''}`}
                  onClick={() => handleSelect(groupIdx, optionIdx)}
                  disabled={submitted}
                >
                  {option.context}
                </button>
              ))}
              {submitted && selected !== undefined && (
                <div className="feedback">
                  {selected === correctIdx
                    ? '✅ You picked the most emotionally intense use!'
                    : 'ℹ️ That use has a different emotional feel.'}
                  <p className="explanation">{submittedSelection?.explanation}</p>
                </div>
              )}
            </div>
          )
        })}

        {!submitted && (
          <button
            className="submit-btn"
            onClick={handleSubmit}
            disabled={Object.keys(selectedOptions).length !== sameWordsGroups.length}
          >
            Submit Answers
          </button>
        )}
      </div>
    </div>
  )
}

export default SameWordsGame
