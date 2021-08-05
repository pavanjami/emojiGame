/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    selectedEmojiIds: [],
    isWinner: '',
  }

  resetGame = () => {
    const {score} = this.state
    this.setState({topScore: score})
    this.setState({score: 0, selectedEmojiIds: [], isWinner: ''})
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  clickEmoji = id => {
    const {score, selectedEmojiIds} = this.state
    const isPresent = selectedEmojiIds.includes(id)
    if (isPresent) {
      this.setState({isWinner: true})
    } else {
      this.setState({
        selectedEmojiIds: [...selectedEmojiIds, id],
        score: score + 1,
      })
      if (score === 11) {
        this.setState({isWinner: true})
      }
    }
  }

  getScoreDetails = () => {
    const {score, topScore} = this.state
    return {
      score,
      topScore,
    }
  }

  getResultContainer = () => {
    const {score, selectedEmojiIds} = this.state
    const {emojisList} = this.props
    const isWon = selectedEmojiIds.length === emojisList.length
    return (
      <WinOrLoseCard score={score} isWon={isWon} resetGame={this.resetGame} />
    )
  }

  getCardsContainer = () => {
    const shuffledEmojisList = this.getShuffledEmojisList()

    return (
      <ul className="cards-container">
        {shuffledEmojisList.map(eachEmojiDetails => (
          <EmojiCard
            key={eachEmojiDetails.id}
            eachEmojiDetails={eachEmojiDetails}
            clickEmoji={this.clickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const scoreDetails = this.getScoreDetails()
    const {isWinner} = this.state
    const blockView = isWinner === '' ? '' : true

    return (
      <div className="app-container">
        <NavBar blockView={blockView} scoreDetails={scoreDetails} />
        <div>
          {isWinner ? this.getResultContainer() : this.getCardsContainer()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
