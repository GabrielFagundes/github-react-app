import React from 'react';
import { connect } from 'react-redux'
import { Container } from './styles'

function ReposByYear({ repos }) {
  console.log(repos)
  return (
    <Container>
      <h3>No repositories to show</h3>
    </Container>
  )
}

const mapStateToProps = ({ repositoryApp }) => ({
  repos: repositoryApp
})

export default connect(
  mapStateToProps
)(ReposByYear);