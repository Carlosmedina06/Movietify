import { useState } from 'react'
import uuid from 'react-native-uuid'
import moment from 'moment'
import DateTimePicker from '@react-native-community/datetimepicker'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { TouchableWithoutFeedback, Keyboard, Switch } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import { addTask } from '../../redux/taskSlice'

import { Button, ButtonText, Container, Content, Input, Label, Message } from './AddTaskStyle'

const AddTask = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const listTasks = useSelector((state) => state.tasks.tasks)

  const [task, setTask] = useState({
    id: uuid.v4(),
    title: '',
    completed: false,
    hour: new Date(),
    date: new Date(),
    isToday: false,
    withAlert: false,
  })

  const handleAddTask = async () => {
    const newTask = {
      ...task,
      hour: moment(task.hour).format('HH:mm'),
      date: moment(task.date).format('DD/MM/YYYY'),
      isToday: moment(task.date).isSame(moment(), 'day') ? true : false,
    }

    try {
      await AsyncStorage.setItem(`@tasks`, JSON.stringify([...listTasks, newTask]))
      dispatch(addTask(newTask))
      alert('Task added successfully')
      navigation.navigate('Home')
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
      }}
    >
      <Container>
        <Content>
          <Label>Task title</Label>
          <Input
            placeholder="Task title"
            placeholderTextColor="#050c31;"
            value={task.title}
            onChangeText={(text) => {
              setTask({ ...task, title: text })
            }}
          />
        </Content>
        <Content>
          <Label>Hour</Label>
          <DateTimePicker
            is24Hour={true}
            mode={'time'}
            style={{ width: '80%' }}
            value={task.hour}
            onChange={(event, selectedDate) => {
              setTask({ ...task, hour: selectedDate })
            }}
          />
        </Content>
        <Content>
          <Label>Date</Label>
          <DateTimePicker
            mode={'date'}
            style={{ width: '80%' }}
            value={task.date}
            onChange={(event, selectedDate) => {
              setTask({ ...task, date: selectedDate })
            }}
          />
        </Content>
        <Content>
          <Label>Alert</Label>
          <Switch
            value={task.withAlert}
            onValueChange={(value) => {
              setTask({ ...task, withAlert: value })
            }}
          />
        </Content>
        <Message>You will receive an alert at the time you set for this reminder</Message>
        <Button onPress={handleAddTask}>
          <ButtonText>Done</ButtonText>
        </Button>
      </Container>
    </TouchableWithoutFeedback>
  )
}

export default AddTask
