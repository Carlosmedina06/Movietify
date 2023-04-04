import styled from 'styled-components/native'

export const RegisterCardContainer = styled.View`
  width: 90%;
  background: #050c31;
  border: 1px solid #050c31;
  box-shadow: 0px 4px 4px rgba(5, 12, 49, 0.9);
  backdrop-filter: blur(2px);
  border-radius: 20px;
  padding-bottom: 20px;
  margin: 20px;
`
export const RegisterCardHeader = styled.View`
  align-items: center;
  padding: 20px;
`

export const RegisterCardTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
  margin-left: 20px;
`

export const RegisterCardBody = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`

export const Label = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  margin-left: 20px;
`
export const RegisterCardInput = styled.TextInput`
  width: 70%;
  height: 40px;
  background: rgba(89, 91, 98, 0.48);
  box-shadow: 0px 4px 4px rgba(89, 91, 98, 1);
  border-radius: 10px;
  padding: 0 10px;
  color: #fff;
  margin: 15px 0;
`
export const RegisterButton = styled.TouchableOpacity`
  width: 70%;
  height: 40px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  padding: 0 10px;
  color: #fff;
  margin: 20px 0 10px 0;
  align-items: center;
  justify-content: center;
`
export const RegisterButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #050c31;
`
