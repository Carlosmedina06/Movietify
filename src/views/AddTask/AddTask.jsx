import { useState } from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Switch,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment'
import uuid from 'react-native-uuid'

const AddTask = () => {
  const [task, setTask] = useState({
    id: uuid.v4(),
    title: '',
    completed: false,
    hour: new Date(),
    date: new Date(),
    isToday: false,
    withAlert: false,
  })

  const handleAddTask = () => {
    const newTask = {
      ...task,
      hour: moment(task.hour).format('HH:mm'),
      date: moment(task.date).format('DD/MM/YYYY'),
      isToday: moment(task.date).isSame(moment(), 'day') ? true : false,
    }

    console.log(newTask)
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
      }}
    >
      <View>
        <Text>Add a Task</Text>
        <View>
          <Text>Name</Text>
          <TextInput
            placeholder="Task"
            placeholderTextColor="#00000030"
            value={task.title}
            onChangeText={(text) => {
              setTask({ ...task, title: text })
            }}
          />
        </View>
        <View>
          <Text>Hour</Text>
          <DateTimePicker
            is24Hour={true}
            mode={'time'}
            style={{ width: '80%' }}
            value={task.hour}
            onChange={(event, selectedDate) => {
              setTask({ ...task, hour: selectedDate })
            }}
          />
        </View>
        <View>
          <Text>Hour</Text>
          <DateTimePicker
            mode={'date'}
            style={{ width: '80%' }}
            value={task.date}
            onChange={(event, selectedDate) => {
              setTask({ ...task, date: selectedDate })
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
  )
}

export default AddTask
