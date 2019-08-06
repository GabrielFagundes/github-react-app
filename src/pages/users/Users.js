import React from 'react'
import { pathOr } from 'ramda'
import { connect } from 'react-redux'
import UserCard from '../../components/styleguide/userCard/UserCard.js'
import { Container } from './styles'

function Users({ users }) {
  return (
    <Container>
      {
        users.map(user => (
          <UserCard
            key={user.login}
            avatar={user.avatar_url}
            username={user.login}
          />
        ))
      }
    </Container>
  )
}

const normalizeUser = pathOr([], ['users', 'data', 'items'])

const mapStateToProps = ({ userApp }) => (
  {
    users: normalizeUser(userApp)
  }
)

export default connect(
  mapStateToProps
)(Users);