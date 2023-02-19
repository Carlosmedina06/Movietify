import { FlatList } from 'react-native'
import React from 'react'

import TaskCard from '../TaskCard/TaskCard'

const TaskList = ({ Tasks }) => {
  return (
    <FlatList
      data={Tasks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TaskCard
          completed={item.completed}
          date={item.date}
          hour={item.hour}
          id={item.id}
          isToday={item.isToday}
          title={item.title}
        />
      )}
    />
  )
}

export default TaskList
