import './index.css'

import {Component} from 'react'

class NavBar extends Component {
  renderScore = () => {
    const {scoreDetails, blockView} = this.props
    const {score, topScore} = scoreDetails

    if (blockView) {
      return null
    }
    return (
      <div className="score-container">
        <p className="score">Score: {score}</p>
        <p className="score">Top Score: {topScore}</p>
      </div>
    )
  }

  render() {
    return (
      <nav className="nav-bar-container">
        <div className="logo-logoName-container">
          <img
            alt="game logo"
            className="game-logo"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          />
          <h1 className="logo-name">Emoji Game</h1>
        </div>
        {this.renderScore()}
      </nav>
    )
  }
}

export default NavBar
