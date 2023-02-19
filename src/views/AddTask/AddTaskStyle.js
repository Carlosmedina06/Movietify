import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  padding: 10px;
`
export const Content = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 10px;
`

export const Label = styled.Text`
  font-size: 20px;
  color: #050c31;
  font-weight: bold;
`
export const Input = styled.TextInput`
  width: 70%;
  height: 50px;
  background-color: #f2f2f2;
  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
`
export const Message = styled.Text`
  font-size: 14px;
  color: grey;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
`
export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: #050c31;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
`
export const ButtonText = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`
