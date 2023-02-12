import React, { useState } from 'react'

import {
  UserCard,
  UserCardAvatar,
  UserCardBody,
  UserCardHeader,
  UserCardInput,
  UserCardInputArrow,
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
          <UserCardInputArrow>→</UserCardInputArrow>
        </UserCardInputIcon>
      </UserCardBody>
    </UserCard>
  )
}

export default CardUser
