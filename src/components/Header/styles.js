import styled from 'styled-components'

const Container = styled.View`
  padding: 25px 20px 0 20px;
  padding-left: 10px;
  background-color: #EDEDED;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Text = styled.Text`
  color: #767676;
  font-size: 20px;
  font-weight: bold;
`

const IconView = styled.View`
  flex-direction: row;
`

export {
  Container, Text, IconView,
}
