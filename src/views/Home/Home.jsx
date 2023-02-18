import { useState } from 'react'
import { ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import CardUser from '../../components/UserCard/UserCard'
import TaskList from '../../components/TaskList/TaskList'
import { data } from '../../../data'

import {
  FloatingButton,
  FloatingButtonText,
  HideComplete,
  HideCompleteText,
  HomeContainer,
  HomeHeader,
  HomeTitle,
} from './HomeStyle'

export default function Home() {
  const navigation = useNavigation()
  const [hideCompleted, setHideCompleted] = useState(false)
  const [localData, setLocalData] = useState(
    data.sort((a, b) => {
      return a.completed - b.completed
    }),
  )

  const handleHideCompleted = () => {
    if (hideCompleted) {
      setHideCompleted(false)
      setLocalData(
        data.sort((a, b) => {
          a.completed - b.completed
        }),
      )

      return
    }
    setHideCompleted(!hideCompleted)
    setLocalData(
      localData.filter((task) => {
        return !task.completed
      }),
    )
  }

  return (
    <>
      <HomeContainer>
        <ScrollView>
          <CardUser />
          <HomeHeader>
            <HomeTitle>Today Task</HomeTitle>
            <HideComplete onPress={handleHideCompleted}>
              <HideCompleteText>
                {hideCompleted ? 'Show completed' : 'Hide completed'}
              </HideCompleteText>
            </HideComplete>
          </HomeHeader>
          <TaskList Tasks={localData.filter((task) => task.isToday)} />
          <HomeHeader>
            <HomeTitle>Upcoming Task</HomeTitle>
            <HideComplete>
              <HideCompleteText>See More →</HideCompleteText>
            </HideComplete>
          </HomeHeader>
          <TaskList
            Tasks={localData.filter((task) => {
              return !task.isToday
            })}
          />
        </ScrollView>
      </HomeContainer>
      <FloatingButton onPress={() => navigation.navigate('AddTask')}>
        <FloatingButtonText>+</FloatingButtonText>
      </FloatingButton>
    </>
  )
}
