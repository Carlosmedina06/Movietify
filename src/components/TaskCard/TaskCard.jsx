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

const TaskCard = ({ _id, title, completed, hour, isToday, date }) => {
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
        <TaskCardButton>
          <TaskCardButtonText primary>{completed ? 'Undone ❌' : 'Done ✅'}</TaskCardButtonText>
        </TaskCardButton>
        <TaskCardButton primary>
          <TaskCardButtonText>Delete 🗑️</TaskCardButtonText>
        </TaskCardButton>
      </TaskCardFooter>
    </TaskContainer>
  )
}

export default TaskCard
