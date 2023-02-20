import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux'

import Home from './src/views/Home/Home'
import AddTask from './src/views/AddTask/AddTask'
import { store } from './src/redux/store'
import Login from './src/views/Login/Login'
import Register from './src/views/Register/Register'

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
          <Stack.Screen component={Login} name="Login" />
          <Stack.Screen component={Register} name="Register" />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
