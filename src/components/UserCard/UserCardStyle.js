import styled from 'styled-components/native'

export const UserCard = styled.View`
  width: 90%;
  height: 190px;
  align-self: center;
  margin: 20px 0;
  background-color: #050c31;
  border-radius: 20px;
  padding: 10px 20px 0px 20px;
  drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`
export const UserCardHeader = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`
export const UserCardTitle = styled.Text`
  font-size: 20px;
  color: #fff;
  margin-left: 20px;
  word-wrap: break-word;
`
export const UserCardAvatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`

export const UserCardBody = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
export const UserCardInput = styled.TextInput`
  width: 100%;
  height: 40px;
  background: rgba(89, 91, 98, 0.48);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 0 10px;
  color: #fff;
  position: relative;
`
export const UserCardInputIcon = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  position: absolute;
  align-items: center;
  justify-content: center;
  right: 10px;
  top: 45px;
  background-color: rgba(89, 88, 98, 0.48);
  border-radius: 4px;
  drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`
export const UserCardInputArrow = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`
