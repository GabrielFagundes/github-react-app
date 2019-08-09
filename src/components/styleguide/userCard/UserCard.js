import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUserRepositoryListSearch } from '../../../redux/actions'
import { Container, Image, Footer, Name, Icon } from './styles'

function UserCard({ avatar, username = 'notfound', getUserRepositoryListSearch }) {

  return (
    <Container>
      <Link to={`/users/${username}/repos`} onClick={() => getUserRepositoryListSearch(username)}>
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

export default connect(
  null,
  {
    getUserRepositoryListSearch
  }
)(UserCard)