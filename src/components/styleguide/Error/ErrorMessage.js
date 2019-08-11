import React from 'react';
import { Container, Message } from './styles'

function UserCard({ children }) {


  return (
    <Container>
      <Message>{children}</Message>
    </Container>
  )
}

export default UserCard