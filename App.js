import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux'

import Home from './src/views/Home/Home'
import AddTask from './src/views/AddTask/AddTask'
import { store } from './src/redux/store'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen component={Home} name="Home" />
          <Stack.Screen
            component={AddTask}
            name="AddTask"
            options={{
              presentation: 'modal',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
