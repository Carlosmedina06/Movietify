import { FontAwesome } from '@expo/vector-icons'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { signinGoogle, loginLocal, registerLocal } from '../../redux/loginSlice'

import {
  Label,
  LoginButton,
  LoginButtonText,
  LoginCardBody,
  LoginCardContainer,
  LoginCardHeader,
  LoginCardInput,
  LoginCardTitle,
  LoginGoogle,
} from './LoginCardStyle'

const LoginCard = () => {
  const dispatch = useDispatch()
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const handleLogin = () => {
    dispatch(loginLocal(user))

    setUser({
      email: '',
      password: '',
    })
  }

  const HandleGoogle = () => {
    dispatch(signinGoogle())
  }

  const register = () => {
    dispatch(registerLocal(user))

    setUser({
      email: '',
      password: '',
    })
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
          value={user.password}
          onChangeText={(text) => {
            setUser({ ...user, password: text })
          }}
        />
        <LoginButton onPress={handleLogin}>
          <LoginButtonText>Login</LoginButtonText>
        </LoginButton>
        <LoginGoogle onPress={HandleGoogle}>
          <LoginButtonText>
            <FontAwesome color="#050c31" name="google" size={18} /> Login with Google
          </LoginButtonText>
        </LoginGoogle>
        <LoginButton onPress={register}>
          <LoginButtonText>Register</LoginButtonText>
        </LoginButton>
      </LoginCardBody>
    </LoginCardContainer>
  )
}

export default LoginCard
