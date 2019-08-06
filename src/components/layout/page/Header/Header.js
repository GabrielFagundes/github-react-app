import React from "react";
import { connect } from "react-redux";
import { getUserListSearch } from '../../../../redux/actions'
import {
  Container,
  Title,
  MdArrowBackIcon,
  SearchContainer,
  SearchBox,
  SearchIcon
} from './styles'

const PageHeader = ({ getUserListSearch }) => {
  return (
    <Container>
      <Title>
        <MdArrowBackIcon
          onClick={() => {
            window.history.back();
          }}
        />
        <SearchContainer>
          <SearchBox placeholder='Search...' onKeyPress={(e) => onEnter(e, getUserListSearch)} />
          < SearchIcon />
        </SearchContainer>
      </Title>
    </Container >
  );
}


const onEnter = (e, getUserListSearch) => {
  if (e.key === 'Enter' && e.target.value.length > 2) {
    return getUserListSearch(e.target.value);
  }
}

export default connect(
  null,
  {
    getUserListSearch
  }
)(PageHeader);
