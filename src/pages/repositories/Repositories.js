import React from 'react'
import { pathOr } from 'ramda'
import { connect } from 'react-redux'
import { Container } from './styles'
import RepoCard from '../../components/styleguide/repoCard/RepoCard'

function Repos({ repos }) {
  console.log(repos)
  return (
    <Container>
      {
        repos && repos.map(repo =>
          <RepoCard
            key={repo.name}
            name={repo.name}
            description={repo.description}
            stars={repo.stargazers_count}
            forks={repo.forks}
          />
        )
      }
    </Container>
  )
}

const normalizeRepos = pathOr([], ['repositories', 'data', 'items'])

const mapStateToProps = ({ repositoryApp }) => ({
  repos: normalizeRepos(repositoryApp)
})

export default connect(
  mapStateToProps
)(Repos);