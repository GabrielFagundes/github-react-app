import React from 'react';
import { Container, ImgNoRepo } from './styles'
import NoRepoImg from '../../../assets/norepo.png'

function UserCard({ children }) {


  return (
    <Container>
      <ImgNoRepo src={NoRepoImg} alt='No repositories' />
      <h3>No repositories to show</h3>
    </Container>
  )
}

export default UserCard