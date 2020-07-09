import { StyleSheet } from 'react-native'
import styled from 'styled-components'

const Container = styled.ScrollView`
  flex: 1;
`

const ConversationView = styled.View`
  padding: 20px;
  flex-direction: row;
  align-items: center;
`

const ConversationContent = styled.View`
  flex: 1;
`

const From = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

const Image = styled.Image`
  margin-right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50px;
`

const Title = styled.Text`
  font-size: 19px;
  font-weight: bold;
`

const Message = styled.Text`
  padding-right: 40px;
  font-size: 16px;
`

const Hours = styled.Text``

const Border = styled.View`
  padding-bottom: 15px;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: #767676;
  flex: 1;
`

export {
  Container, ConversationView,
  ConversationContent, From, Hours,
  Title, Message, Image, Border,
}
