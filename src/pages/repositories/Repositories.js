import React from 'react'
import { pathOr } from 'ramda'
import { connect } from 'react-redux'
import { Container, ImgLoad } from './styles'
import RepoCard from '../../components/styleguide/repoCard/RepoCard'
import ErrorMessage from '../../components/styleguide/Error/ErrorMessage'
import NoRepos from '../../components/styleguide/NoRepos/Norepos'
import Loader from '../../assets/loader.gif'


function Repos({ repos, loading, error }) {
  return (
    <Container>
      {
        loading ?
          <ImgLoad>
            <img src={Loader} alt='Loading...' />
          </ImgLoad>
          :
          error ? <ErrorMessage>{error}</ErrorMessage>
            : repos.length > 0 ? repos.map(repo =>
              <RepoCard
                key={repo.name + repo.forks}
                name={repo.name}
                description={repo.description}
                stars={repo.stargazers_count}
                forks={repo.forks}
              />
            )
              : <NoRepos />
      }
    </Container>
  )
}

const normalizeRepos = pathOr([], ['repositories', 'data', 'items'])

const mapStateToProps = ({ repositoryApp }) => ({
  repos: normalizeRepos(repositoryApp),
  loading: repositoryApp.loading,
  error: repositoryApp.error
})

export default connect(
  mapStateToProps
)(Repos);