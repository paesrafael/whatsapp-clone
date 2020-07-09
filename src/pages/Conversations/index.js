import React, { useState, useEffect } from 'react'

import data from './data'

import {
  Container, ConversationView,
  ConversationContent,
  Image, Title, Message,
  From, Hours, Border,
} from './styles'

export default function Conversations() {
  const [conversation, setConversation] = useState([])

  useEffect(() => {
    setConversation(data)
  }, [conversation])

  return (
    <Container>
      {!!conversation && (
        conversation.map((item) => (
          <ConversationView key={item.id}>
            <Image source={{ uri: item.photo }} />

            <ConversationContent>
              <Border>
                <From>
                  <Title>{item.name}</Title>
                  <Hours>{item.time}</Hours>
                </From>

                <Message>{item.message}</Message>
              </Border>
            </ConversationContent>
          </ConversationView>
        ))
      )}
    </Container>
  )
}
