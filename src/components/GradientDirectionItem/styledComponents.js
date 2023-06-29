// Style your elements here
import styled from 'styled-components'

export const DirectionButton = styled.button`
  padding: 15px;
  width: 150px;
  border: 0;
  border-radius: 5px;
  background-color: #ffffff;
  opacity: ${props => (props.active ? 1 : 0.5)};
`
