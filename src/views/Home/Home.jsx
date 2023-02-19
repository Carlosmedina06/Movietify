import { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'

import CardUser from '../../components/UserCard/UserCard'
import TaskList from '../../components/TaskList/TaskList'
import { getTasks, hideCompletedTask } from '../../redux/taskSlice'

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
  const dispatch = useDispatch()
  const tasks = useSelector((state) => state.tasks.tasks)
  const [hideCompleted, setHideCompleted] = useState(false)

  useEffect(() => {
    const getTask = async () => {
      try {
        const tasks = await AsyncStorage.getItem('@tasks')

        if (tasks) {
          dispatch(getTasks(JSON.parse(tasks)))
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      }
    }

    getTask()
  }, [dispatch])

  const handleHideCompleted = async () => {
    if (hideCompleted) {
      setHideCompleted(false)
      const tasks = await AsyncStorage.getItem('@tasks')

      dispatch(getTasks(JSON.parse(tasks)))

      return
    }

    setHideCompleted(true)
    dispatch(hideCompletedTask())
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
          <TaskList Tasks={tasks.filter((task) => task.isToday)} />
          <HomeHeader>
            <HomeTitle>Upcoming Task</HomeTitle>
            <HideComplete>
              <HideCompleteText>See More →</HideCompleteText>
            </HideComplete>
          </HomeHeader>
          <TaskList
            Tasks={tasks.filter((task) => {
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
