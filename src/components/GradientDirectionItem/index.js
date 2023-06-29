import {DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, activeValue, updateDirection} = props
  const {displayText, value} = directionDetails
  return (
    <DirectionButton
      active={activeValue === value}
      onClick={() => updateDirection(value)}
    >
      {displayText}
    </DirectionButton>
  )
}

export default GradientDirectionItem
