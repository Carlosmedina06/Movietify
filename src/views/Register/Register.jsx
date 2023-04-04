import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { registerLocal } from '../../redux/loginSlice'

import {
  Label,
  RegisterButton,
  RegisterButtonText,
  RegisterCardBody,
  RegisterCardContainer,
  RegisterCardHeader,
  RegisterCardInput,
  RegisterCardTitle,
} from './RegisterStyle'

const Register = () => {
  const dispatch = useDispatch()
  const [errors, setErrors] = useState({})
  const [register, setRegister] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })
  const handleRegister = () => {
    if (!register.email || !register.password || !register.confirmPassword) {
      setErrors({ password: 'Please fill out all fields' })

      return
    }
    if (register.password !== register.confirmPassword) {
      setErrors({ password: 'Passwords do not match' })

      return
    }
    const newUser = {
      email: register.email,
      password: register.password,
    }

    dispatch(registerLocal(newUser))
    console.log(newUser)

    setRegister({
      email: '',
      password: '',
      confirmPassword: '',
    })
  }

  return (
    <RegisterCardContainer>
      <RegisterCardHeader>
        <RegisterCardTitle>Register</RegisterCardTitle>
      </RegisterCardHeader>
      <RegisterCardBody>
        <Label>Email</Label>
        <RegisterCardInput
          placeholder="Email"
          placeholderTextColor="#ffff"
          value={register.email}
          onChangeText={(text) => {
            setRegister({ ...register, email: text })
          }}
        />
        <Label>Password</Label>
        <RegisterCardInput
          placeholder="Password"
          placeholderTextColor="#ffff"
          secureTextEntry={true}
          value={register.password}
          onChangeText={(text) => {
            setRegister({ ...register, password: text })
          }}
        />
        <Label>Confirm Password</Label>
        <RegisterCardInput
          name="confirmPassword"
          placeholder="Confirm Password"
          placeholderTextColor="#ffff"
          secureTextEntry={true}
          value={register.confirmPassword}
          onChangeText={(text) => {
            setRegister({ ...register, confirmPassword: text })
          }}
        />
        {errors.password && <Label>{errors.password}</Label>}
        <RegisterButton>
          <RegisterButtonText onPress={handleRegister}>Register</RegisterButtonText>
        </RegisterButton>
      </RegisterCardBody>
    </RegisterCardContainer>
  )
}

export default Register
