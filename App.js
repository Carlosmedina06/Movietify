import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome5 } from '@expo/vector-icons'
import { Provider } from 'react-redux'

import Home from './src/views/Home/Home'
import Perfil from './src/views/Perfil/Perfil'
import Search from './src/views/Search/Search'
import Tasks from './src/views/Tasks/Tasks'
import AddTask from './src/views/AddTask/AddTask'
import { store } from './src/app/store'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home'
                size = focused ? 25 : 25
                color = focused ? '#060B31' : '#e0d9db'
              }
              if (route.name === 'Perfil') {
                iconName = focused ? 'user' : 'user'
                size = focused ? 25 : 25
                color = focused ? '#060B31' : '#e0d9db'
              }
              if (route.name === 'addTask') {
                iconName = focused ? 'plus' : 'plus'
                size = focused ? 30 : 30
                color = focused ? '#e0d9db' : '#fff'
              }
              if (route.name === 'Search') {
                iconName = focused ? 'search' : 'search'
                size = focused ? 25 : 25
                color = focused ? '#060B31' : '#e0d9db'
              }
              if (route.name === 'Tasks') {
                iconName = focused ? 'tasks' : 'tasks'
                size = focused ? 25 : 25
                color = focused ? '#060B31' : '#e0d9db'
              }

              return <FontAwesome5 key={iconName} color={color} name={iconName} size={size} />
            },
            headerShown: false,
            tabBarStyle: {
              paddingVertical: 10,
            },
            tabBarActiveTintColor: '#060B31',
            tabBarInactiveTintColor: '#e0d9db',
          })}
        >
          <Tab.Screen component={Search} name="Search" />
          <Tab.Screen component={Home} name="Home" />
          <Tab.Screen
            component={AddTask}
            name="addTask"
            options={{
              tabBarLabel: '',
              tabBarIconStyle: {
                borderRadius: 50,
                height: 70,
                width: 70,
                padding: 0,
                position: 'absolute',
                bottom: 20,
                backgroundColor: '#060B31',
              },
            }}
          />
          <Tab.Screen component={Tasks} name="Tasks" />
          <Tab.Screen component={Perfil} name="Perfil" />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
