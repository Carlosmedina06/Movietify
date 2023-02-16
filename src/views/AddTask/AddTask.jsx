import React, { useState } from 'react'
import uuid from 'react-native-uuid'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'
import * as Notifications from 'expo-notifications'
import {
  Keyboard,
  TouchableWithoutFeedback,
  View,
  Text,
  TextInput,
  Switch,
  TouchableOpacity,
} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'

import { addTask } from '../../features/Task/TaskSlice'

import { Container } from './AddTaskStyle'

const AddTask = () => {
  const dispatch = useDispatch()
  const [task, setTask] = useState({
    title: '',
    description: '',
    isToday: false,
    time: new Date(),
    date: new Date(),
    withAlert: false,
  })

  const handleAddTask = async () => {
    const newTask = {
      id: uuid.v4(),
      title: task.title,
      description: task.description,
      isToday: task.isToday,
      time: task.time.toISOString(),
      date: task.date.toISOString(),
    }

    try {
      const currentTasks = await AsyncStorage.getItem('tasks')
      const parsedTasks = currentTasks ? JSON.parse(currentTasks) : []

      await AsyncStorage.setItem('tasks', JSON.stringify([...parsedTasks, newTask]))
      dispatch(addTask(newTask))
      if (task.withAlert) {
        scheduleTodoNotification(newTask)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  }

  const scheduleTodoNotification = async (task) => {
    const trigger = new Date(task.date + 'T' + task.time)

    try {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: 'Alert! You have a task to do!',
          body: task.description,
        },
        trigger,
      })
      // eslint-disable-next-line no-console
      console.log('Notification scheduled')
    } catch (e) {
      alert('The notification failed to schedule, make sure the hour is valid')
    }
  }

  return (
    <Container>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View>
          <Text>Title</Text>
          <TextInput
            placeholder="title"
            placeholderTextColor="#00000030"
            value={task.title}
            onChangeText={(text) => {
              setTask({ ...task, title: text })
            }}
          />
          <View>
            <Text>description</Text>
            <TextInput
              placeholder="description"
              placeholderTextColor="#00000030"
              value={task.description}
              onChangeText={(text) => {
                setTask({ ...task, description: text })
              }}
            />
          </View>
          <View>
            <Text>Date</Text>
            <DateTimePicker
              mode={'date'}
              style={{ width: '80%' }}
              value={new Date(task.date)}
              onChange={(event, selectedDate) => {
                const currentDate = selectedDate || task.date

                setTask({ ...task, date: currentDate })
              }}
            />
          </View>
          <View>
            <Text>Hour</Text>
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
          </View>
          <View>
            <View>
              <Text>Today</Text>
              <Text>If you disable today, the task will be considered as tomorrow</Text>
            </View>
            <Switch
              value={task.isToday}
              onValueChange={(value) => {
                setTask({ ...task, isToday: value })
              }}
            />
          </View>
          <View>
            <View>
              <Text>Alert</Text>
              <Text>You will receive an alert at the time you set for this reminder</Text>
            </View>
            <Switch
              value={task.withAlert}
              onValueChange={(value) => {
                setTask({ ...task, withAlert: value })
              }}
            />
          </View>

          <TouchableOpacity onPress={handleAddTask}>
            <Text>Done</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </Container>
  )
}

export default AddTask
