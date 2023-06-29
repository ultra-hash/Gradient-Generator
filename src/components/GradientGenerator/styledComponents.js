// Style your elements here
import styled from 'styled-components'

export const OuterContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
    to
      ${props => {
        const {direction, firstColor, secondColor} = props.gradientDetails
        return `${direction},${firstColor},${secondColor}`
      }}
  );
  color: #ffffff;
`
export const MainContainer = styled.div`
  flex-grow: 1;
  width: 100%;
  max-width: 800px;
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const Heading = styled.h1`
  font-size: 24px;
`
export const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 500;
`
export const ColorsContainer = styled.div`
  padding: 10px;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

export const ColorInput = styled.input`
  width: 100px;
  height: 50px;
  outline: none;
  background-color: transparent;
  border: 0;
`
export const GenerateButton = styled.button`
  padding: 15px 25px;
  background-color: #00c9b7;
  border: 0;
  border-radius: 5px;
  align-self: center;
`

export const UnorderedList = styled.ul`
  padding: 0;
  list-style-type: none;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
`
