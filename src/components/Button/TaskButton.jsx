import { useNavigation } from '@react-navigation/native'

import { Button, ButtonText } from './TaskButtonStyle'

const TaskButton = ({ title, backgroundColor, textColor, width }) => {
  const navigation = useNavigation()

  const handleNavigation = () => {
    navigation.navigate('Tasks')
  }

  return (
    <Button
      backgroundColor={backgroundColor}
      width={width}
      onPress={title !== 'See details →' ? null : handleNavigation}
    >
      <ButtonText textColor={textColor}>{title}</ButtonText>
    </Button>
  )
}

export default TaskButton
