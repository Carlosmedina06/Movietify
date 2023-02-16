import React, { useState } from 'react'
import uuid from 'react-native-uuid'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import { useNavigation } from '@react-navigation/native'

import { addTask } from '../../features/Task/TaskSlice'

import {
  Button,
  ButtonText,
  Container,
  DataView,
  Input,
  InputContainer,
  InputLabel,
} from './AddTaskStyle'

const AddTask = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const [task, setTask] = useState({
    title: '',
    description: '',
    time: new Date(),
    date: new Date(),
  })

  const handleAddTask = async () => {
    const newTask = {
      id: uuid.v4(),
      title: task.title,
      description: task.description,
      time: task.time.toISOString(),
      date: task.date.toISOString(),
    }

    try {
      const currentTasks = await AsyncStorage.getItem('tasks')
      const parsedTasks = currentTasks ? JSON.parse(currentTasks) : []

      await AsyncStorage.setItem('tasks', JSON.stringify([...parsedTasks, newTask]))
      dispatch(addTask(newTask))
      await setTask({
        title: '',
        description: '',
        time: new Date(),
        date: new Date(),
      })
      await alert('Task added successfully')
      navigation.navigate('Home')
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  }

  return (
    <Container>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <InputContainer>
          <InputLabel>Title</InputLabel>
          <Input
            placeholder="title"
            placeholderTextColor="#00000030"
            value={task.title}
            onChangeText={(text) => {
              setTask({ ...task, title: text })
            }}
          />

          <InputLabel>description</InputLabel>
          <Input
            placeholder="description"
            placeholderTextColor="#00000030"
            value={task.description}
            onChangeText={(text) => {
              setTask({ ...task, description: text })
            }}
          />
          <DataView>
            <InputLabel>Date</InputLabel>
            <DateTimePicker
              mode={'date'}
              style={{ width: '80%' }}
              value={new Date(task.date)}
              onChange={(event, selectedDate) => {
                const currentDate = selectedDate || task.date

                setTask({ ...task, date: currentDate })
              }}
            />
          </DataView>
          <DataView>
            <InputLabel>Hour</InputLabel>
            <DateTimePicker
              is24Hour={true}
              mode={'time'}
              style={{ width: '80%' }}
              value={new Date(task.time)}
              onChange={(event, selectedTime) => {
                const currentTime = selectedTime || task.time

                setTask({ ...task, time: currentTime })
              }}
            />
          </DataView>

          <Button onPress={handleAddTask}>
            <ButtonText>Add Task</ButtonText>
          </Button>
        </InputContainer>
      </TouchableWithoutFeedback>
    </Container>
  )
}

export default AddTask
