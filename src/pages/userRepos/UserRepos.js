import React from 'react'
import { pathOr } from 'ramda'
import { connect } from 'react-redux'
import { Container, ImgLoad } from './styles'
import RepoCard from '../../components/styleguide/repoCard/RepoCard'
import Loader from '../../assets/loader.gif'

function UserRepo({ repos, loading }) {
  console.log(repos)
  return (
    <Container>
      {
        loading ?
          <ImgLoad>
            <img src={Loader} alt='Loading...' />
          </ImgLoad>
          :
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

const normalizeRepos = pathOr([], ['userRepositories', 'data'])

const mapStateToProps = ({ repositoryApp }) => ({
  repos: normalizeRepos(repositoryApp),
  loading: repositoryApp.loading
})

export default connect(
  mapStateToProps
)(UserRepo);