import React, { useState } from 'react'
import { FontAwesome5 } from '@expo/vector-icons'

import {
  UserCard,
  UserCardAvatar,
  UserCardBody,
  UserCardHeader,
  UserCardInput,
  UserCardInputIcon,
  UserCardTitle,
} from './CardUserStyle'

const CardUser = () => {
  const [search, setSearch] = useState('')
  const handleChange = (text) => {
    setSearch(text)
  }

  const handlePress = () => {
    setSearch('')
  }

  return (
    <UserCard>
      <UserCardHeader>
        <UserCardAvatar source={{ uri: 'https://avatars.githubusercontent.com/u/2254731?v=4' }} />
        <UserCardTitle>Hi there, User 👋🏻</UserCardTitle>
      </UserCardHeader>
      <UserCardBody>
        <UserCardInput
          placeholder="Search Task..."
          placeholderTextColor="rgba(255, 255, 255, 0.7)"
          value={search}
          onChangeText={handleChange}
          onSubmitEditing={handlePress}
        />
        <UserCardInputIcon onPress={handlePress}>
          <FontAwesome5 color="#fff" name="arrow-right" />
        </UserCardInputIcon>
      </UserCardBody>
    </UserCard>
  )
}

export default CardUser
