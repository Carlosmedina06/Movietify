import styled from 'styled-components/native'

export const HomeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`

export const HomeHeader = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const HomeTitle = styled.Text`
  font-size: 24px;
  color: #050c31;
  font-weight: bold;
`
export const HideComplete = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`
export const HideCompleteText = styled.Text`
  font-size: 14px;
  color: #050c31;
  font-weight: bold;
`
export const FloatingButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: #050c31;
  align-items: center;
  justify-content: center;
  padding-bottom: 5px;
  position: absolute;
  bottom: 50px;
  right: 20px;
  shadow-color: #050c31;
  shadow-offset: 0px 0px;
  shadow-opacity: 0.5;
  shadow-radius: 5px;
  elevation: 5;
`
export const FloatingButtonText = styled.Text`
  font-size: 40px;
  color: #fff;
  font-weight: bold;
`
