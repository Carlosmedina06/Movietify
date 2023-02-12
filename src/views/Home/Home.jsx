import { StatusBar } from 'expo-status-bar'

import CardUser from '../../components/CardUser/CardUser'
import CardTask from '../../components/CardTask/CardTask'

import { Container, Content, Header, HeaderTitle } from './HomeStyle'

const Home = () => {
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
          </Header>
          <CardTask />
        </Content>
      </Container>
    </>
  )
}

export default Home
