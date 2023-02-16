import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'

import CardUser from '../../components/CardUser/CardUser'
import CardTask from '../../components/CardTask/CardTask'

import { Container, Content, Header, HeaderButton, HeaderTitle } from './HomeStyle'

const Home = () => {
  const navigation = useNavigation()

  return (
    <>
      <StatusBar />
      <Container>
        <Content>
          <CardUser />
          <Header>
            <HeaderTitle>Current Task</HeaderTitle>
          </Header>
          <CardTask />
          <Header>
            <HeaderTitle>Upcoming Task</HeaderTitle>
            <HeaderButton
              onPress={() => {
                navigation.navigate('Tasks')
              }}
            >
              <HeaderTitle>See all →</HeaderTitle>
            </HeaderButton>
          </Header>
          <CardTask />
        </Content>
      </Container>
    </>
  )
}

export default Home
