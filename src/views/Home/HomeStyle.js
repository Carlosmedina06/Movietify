import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  align-items: center;
`
export const Content = styled.ScrollView`
  width: 100%;
  padding-left: 40px;
`

export const Header = styled.View`
  width: 80%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const HeaderTitle = styled.Text`
  fontsize: 20px;
  font-weight: bold;
  color: #050c31;
  margin-left: 35px;
  margin-bottom: 20px;
`
export const HeaderButton = styled.TouchableOpacity`
  flex-direction: row;
  flex: 0.5;
  border-radius: 25px;
`
