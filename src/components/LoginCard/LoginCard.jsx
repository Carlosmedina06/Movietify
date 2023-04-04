import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'

import { loginLocal } from '../../redux/loginSlice'

import {
  Label,
  LoginButton,
  LoginButtonText,
  LoginCardBody,
  LoginCardContainer,
  LoginCardHeader,
  LoginCardInput,
  LoginCardTitle,
} from './LoginCardStyle'

const LoginCard = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const handleLogin = async () => {
    try {
      await dispatch(loginLocal(user))
      setUser({ email: '', password: '' })
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }

  return (
    <LoginCardContainer>
      <LoginCardHeader>
        <LoginCardTitle>Login</LoginCardTitle>
      </LoginCardHeader>
      <LoginCardBody>
        <Label>Email</Label>
        <LoginCardInput
          placeholder="Email"
          placeholderTextColor="#ffff"
          value={user.email}
          onChangeText={(text) => {
            setUser({ ...user, email: text })
          }}
        />
        <Label>Password</Label>
        <LoginCardInput
          placeholder="Password"
          placeholderTextColor="#ffff"
          secureTextEntry={true}
          value={user.password}
          onChangeText={(text) => {
            setUser({ ...user, password: text })
          }}
        />
        <LoginButton onPress={handleLogin}>
          <LoginButtonText>Login</LoginButtonText>
        </LoginButton>
        <LoginButton onPress={() => navigation.navigate('Register')}>
          <LoginButtonText>Register</LoginButtonText>
        </LoginButton>
      </LoginCardBody>
    </LoginCardContainer>
  )
}

export default LoginCard
