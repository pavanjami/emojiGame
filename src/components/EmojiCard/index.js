import './index.css'

const EmojiCard = props => {
  const {eachEmojiDetails, clickEmoji} = props
  const {id, emojiName, emojiUrl} = eachEmojiDetails

  const onClickEmoji = () => {
    clickEmoji(id)
  }

  return (
    <li className="emoji-card emoji-button" onClick={onClickEmoji}>
      <img alt={emojiName} className="emoji-image" src={emojiUrl} />
    </li>
  )
}

export default EmojiCard
