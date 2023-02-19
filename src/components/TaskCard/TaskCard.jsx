import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { updateTask, deleteTask } from '../../redux/taskSlice.js'

import {
  TaskCardBody,
  TaskCardButton,
  TaskCardButtonText,
  TaskCardFooter,
  TaskCardHeader,
  TaskCardItem,
  TaskCardItemText,
  TaskCardTitle,
  TaskContainer,
} from './TaskCardStyle.js'

const TaskCard = ({ id, title, completed, hour, isToday, date }) => {
  const dispatch = useDispatch()
  const tasks = useSelector((state) => state.tasks.tasks)

  const handleCompleteTask = async () => {
    try {
      dispatch(updateTask({ id, completed }))
      await AsyncStorage.setItem(
        '@tasks',
        JSON.stringify(
          tasks.map((task) => {
            if (task.id === id) {
              return {
                ...task,
                completed: !completed,
              }
            }

            return task
          }),
        ),
      )
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  }

  const handleDeleteTask = async () => {
    try {
      dispatch(deleteTask(id))
      await AsyncStorage.setItem(
        '@tasks',
        JSON.stringify(
          tasks.filter((task) => {
            return task.id !== id
          }),
        ),
      )
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  }

  return (
    <TaskContainer>
      <TaskCardHeader>
        <TaskCardTitle {...(completed ? { completed: true } : {})}>{title}</TaskCardTitle>
      </TaskCardHeader>
      <TaskCardBody>
        <TaskCardItem>
          <TaskCardItemText bold {...(completed ? { completed: true } : {})}>
            {hour}
          </TaskCardItemText>
          <TaskCardItemText {...(completed ? { completed: true } : {})}>
            🕐 Task Hour
          </TaskCardItemText>
        </TaskCardItem>
        <TaskCardItem>
          <TaskCardItemText bold {...(completed ? { completed: true } : {})}>
            {isToday ? 'Today' : date}
          </TaskCardItemText>
          <TaskCardItemText {...(completed ? { completed: true } : {})}>
            📅 Task Date
          </TaskCardItemText>
        </TaskCardItem>
      </TaskCardBody>
      <TaskCardFooter>
        <TaskCardButton onPress={handleCompleteTask}>
          <TaskCardButtonText primary>{completed ? 'Undone ❌' : 'Done ✅'}</TaskCardButtonText>
        </TaskCardButton>
        <TaskCardButton primary onPress={handleDeleteTask}>
          <TaskCardButtonText>Delete 🗑️</TaskCardButtonText>
        </TaskCardButton>
      </TaskCardFooter>
    </TaskContainer>
  )
}

export default TaskCard
