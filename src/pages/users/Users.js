import React from 'react'
import { pathOr } from 'ramda'
import { connect } from 'react-redux'
import UserCard from '../../components/styleguide/userCard/UserCard.js'
import { Container, ImgLoad } from './styles'
import Loader from '../../assets/loader.gif'

function Users({ users, loading }) {
  return (
    <Container>
      {
        loading ?
          <ImgLoad>
            <img src={Loader} alt='Loading...' />
          </ImgLoad>
          :
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
    users: normalizeUser(userApp),
    loading: userApp.loading
  }
)

export default connect(
  mapStateToProps
)(Users);