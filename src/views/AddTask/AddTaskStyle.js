import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f5f5f5;
`
export const InputContainer = styled.View`
  flex-direction: column;
  padding: 150px 50px;
`

export const InputLabel = styled.Text`
  font-size: 16px;
  text-transform: capitalize;
  font-weight: bold;
  margin-bottom: 10px;
  color: #050c31;
`

export const Input = styled.TextInput`
  border: 1px solid #050c31;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 20px;
`
export const DataView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`

export const Button = styled.TouchableOpacity`
  background-color: #050c31;
  padding: 10px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`
export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  text-transform: capitalize;
  font-weight: bold;
`
