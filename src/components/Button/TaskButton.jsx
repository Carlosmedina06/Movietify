import { Button, ButtonText } from './TaskButtonStyle'

const TaskButton = ({ title, backgroundColor, textColor, width }) => {
  return (
    <Button backgroundColor={backgroundColor} width={width}>
      <ButtonText textColor={textColor}>{title}</ButtonText>
    </Button>
  )
}

export default TaskButton
