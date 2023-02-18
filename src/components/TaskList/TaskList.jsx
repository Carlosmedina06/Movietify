import { View, FlatList } from 'react-native'
import React from 'react'

import TaskCard from '../TaskCard/TaskCard'

const TaskList = ({ Tasks }) => {
  return (
    <View>
      <FlatList
        data={Tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskCard
            completed={item.completed}
            date={item.date}
            hour={item.hour}
            isToday={item.isToday}
            title={item.title}
          />
        )}
      />
    </View>
  )
}

export default TaskList
