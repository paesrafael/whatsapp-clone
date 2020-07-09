import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

import {
  Container,
  Text, IconView,
} from './styles'

export default function Header() {
  return (
    <Container>
      <Text>WhatsApp</Text>

      <IconView>
        <Icon
          name="search"
          size={20}
          color="#128C7E"
          style={{ marginLeft: 20 }}
        />

        <Icon
          name="ellipsis-v"
          size={20}
          color="#128C7E"
          style={{ marginLeft: 20 }}
        />
      </IconView>
    </Container>
  )
}
