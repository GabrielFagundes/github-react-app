import React from 'react'
import { pathOr } from 'ramda'
import { connect } from 'react-redux'
import { Container } from './styles'
import RepoCard from '../../components/styleguide/repoCard/RepoCard'

function UserRepo({ repos }) {
  console.log(repos)
  return (
  <Container>
  {
    repos && repos.map(repo =>
      <RepoCard 
        name={repo.name}
        description={repo.description}
        stars={repo.stargazers_count}
        forks={repo.forks}
      /> 
    )
  }
  </Container>
)}

const normalizeUserRepos = pathOr([], ['userRepositories', 'data'])

const mapStateToProps = ({ repositoryApp }) => ({
   repos: normalizeUserRepos(repositoryApp)
})

export default connect(
  mapStateToProps
)(UserRepo);