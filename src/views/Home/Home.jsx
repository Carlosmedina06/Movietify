import { StatusBar } from 'expo-status-bar'

import CardUser from '../../components/CardUser/CardUser'

import { Container } from './HomeStyle'

const Home = () => {
  return (
    <>
      <StatusBar />
      <Container>
        <CardUser />
      </Container>
    </>
  )
}

export default Home
