import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-card">
        <h1 className="home-title">🎯 The Connotation Game</h1>
        <p className="home-desc">
          Welcome! This interactive website is part of Jonny Jackson's final project for 
          COMM 2110: Interpersonal Communication with Professor Jared Haskell.
        </p>
        <p className="home-desc">
          The goal of this site is to explore how connotations, context, colors, and word choices shape emotional communication.
        </p>

        <div className="game-links">
          <Link to="/color" className="game-link">🎨 Color Matcher</Link>
          <Link to="/words" className="game-link">💬 Denotation Game</Link>
          <Link to="/tweets" className="game-link">🐦 Twitter Feels</Link>
          <Link to="/images" className="game-link">🖼️ Image Emotion Challenge</Link>
          <Link to="/same-words" className="game-link">🍕 Same Words, Different Feels Game</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
