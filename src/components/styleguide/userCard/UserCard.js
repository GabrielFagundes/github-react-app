import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Image, Footer, Name, Icon } from './styles'

function UserCard({ avatar, username = 'notfound' }) {
  return (
    <Container>
      <Link to={`/user/${username}/repos`}>
        <Image userImage={avatar} />
        <Footer>
          <Icon />
          <Name>
            {`/${username}`}
          </Name>
        </Footer>
      </Link>
    </Container>
  )
}

export default UserCard