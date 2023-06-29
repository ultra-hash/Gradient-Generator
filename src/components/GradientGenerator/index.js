// Write your code here
import {Component} from 'react'
import {
  OuterContainer,
  MainContainer,
  Heading,
  Paragraph,
  ColorsContainer,
  ColorInput,
  GenerateButton,
  UnorderedList,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    direction: 'top',
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    gradientDetails: {
      direction: 'top',
      firstColor: '#8ae323',
      secondColor: '#014f7b',
    },
  }

  onColorChange = event => {
    if (event.target.id === 'firstColor') {
      this.setState({firstColor: event.target.value})
    } else {
      this.setState({secondColor: event.target.value})
    }
  }

  onClickGenerate = () => {
    this.setState(prevState => {
      const {direction, firstColor, secondColor} = prevState
      return {gradientDetails: {direction, firstColor, secondColor}}
    })
  }

  onUpdateDirection = directionValue => {
    this.setState({direction: directionValue})
  }

  render() {
    const {direction, firstColor, secondColor, gradientDetails} = this.state
    return (
      <OuterContainer
        gradientDetails={gradientDetails}
        data-testid="gradientGenerator"
      >
        <MainContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <Paragraph>Choose Direction</Paragraph>
          <UnorderedList>
            {gradientDirectionsList.map(item => (
              <li key={item.directionId}>
                <GradientDirectionItem
                  directionDetails={item}
                  activeValue={direction}
                  updateDirection={this.onUpdateDirection}
                />
              </li>
            ))}
          </UnorderedList>
          <Paragraph>Pick the Colors</Paragraph>
          <ColorsContainer>
            <div>
              <Paragraph>{firstColor}</Paragraph>
              <ColorInput
                type="color"
                value={firstColor}
                onChange={this.onColorChange}
                id="firstColor"
              />
            </div>
            <div>
              <Paragraph>{secondColor}</Paragraph>
              <ColorInput
                type="color"
                value={secondColor}
                onChange={this.onColorChange}
                id="secondColor"
              />
            </div>
          </ColorsContainer>
          <GenerateButton type="button" onClick={this.onClickGenerate}>
            Generate
          </GenerateButton>
        </MainContainer>
      </OuterContainer>
    )
  }
}

export default GradientGenerator
