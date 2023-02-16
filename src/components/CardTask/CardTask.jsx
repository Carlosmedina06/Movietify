import { useSelector } from 'react-redux'
import { Text } from 'react-native'

import TaskButton from '../Button/TaskButton'

import {
  TaskCard,
  TaskCardBody,
  TaskCardHeader,
  TaskCardDescription,
  TaskCardTitle,
  TaskCardButtonContainer,
} from './CardTaskStyle'

export default function CardTask() {
  const tasks = useSelector((state) => state.tasks.tasks)

  console.log(tasks, 'cardtask')

  return (
    <TaskCard>
      <TaskCardHeader>
        <TaskCardTitle>Task title</TaskCardTitle>
      </TaskCardHeader>
      <TaskCardBody>
        <TaskCardDescription>
          <Text>Task description</Text>
        </TaskCardDescription>
        <TaskCardButtonContainer>
          <TaskButton backgroundColor="#E4E9F6" textColor="#050c31" title="Done" width="30%" />
          <TaskButton
            backgroundColor="#050c31"
            textColor="#E4E9F6"
            title="See details →"
            width="60%"
          />
        </TaskCardButtonContainer>
      </TaskCardBody>
    </TaskCard>
  )
}
