import CardUser from '../../components/UserCard/UserCard'
import TaskList from '../../components/TaskList/TaskList'
import { data } from '../../../data'

import { HomeContainer, HomeTitle } from './HomeStyle'

export default function Home() {
  return (
    <HomeContainer>
      <CardUser />
      <HomeTitle>Today Task</HomeTitle>
      <TaskList Tasks={data.filter((task) => task.isToday)} />
      <HomeTitle>Upcomming Tasks</HomeTitle>
      <TaskList
        Tasks={data.filter((task) => {
          return !task.isToday
        })}
      />
    </HomeContainer>
  )
}
