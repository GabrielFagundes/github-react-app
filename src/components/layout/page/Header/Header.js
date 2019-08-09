import React from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import { getUserListSearch, getRepositoryListSearch } from '../../../../redux/actions'
import {
  Container,
  Title,
  MdArrowBackIcon,
  SearchContainer,
  SearchBox,
  SearchIcon
} from './styles'

const PageHeader = ({ getUserListSearch, getRepositoryListSearch, history, location }) => {
  return (
    <Container>
      <Title>
        <MdArrowBackIcon
          onClick={() => {
            window.history.back();
          }}
        />
        <SearchContainer>
          <SearchBox placeholder='Search...' onKeyPress={(e) => onEnter(e, getUserListSearch, getRepositoryListSearch, history, location)} />
          < SearchIcon />
        </SearchContainer>
      </Title>
    </Container >
  );
}


const onEnter = (e, getUserListSearch, getRepositoryListSearch, history, location) => {
  if (e.key === 'Enter' && e.target.value.length > 0) {
    if (location.pathname.includes('repositories')) {
      return getRepositoryListSearch(e.target.value);
    } else {
      history.push('/users');
      return getUserListSearch(e.target.value);
    }
  }
}

export default connect(
  null,
  {
    getUserListSearch,
    getRepositoryListSearch
  }
)(withRouter(PageHeader));
