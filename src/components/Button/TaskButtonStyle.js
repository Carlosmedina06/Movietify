import styled from 'styled-components/native'

export const Button = styled.TouchableOpacity`
  width: ${(props) => props.width};
  height: 50px;
  background-color: ${(props) => props.backgroundColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`
export const ButtonText = styled.Text`
  color: ${(props) => props.textColor};
  font-size: 16px;
  font-weight: bold;
`
