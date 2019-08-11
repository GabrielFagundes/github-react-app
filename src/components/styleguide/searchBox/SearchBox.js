import React from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import { getUserListSearch, getRepositoryListSearch, changeFilterList } from '../../../redux/actions'
import Switch from 'react-switch'
import {
  SearchContainer,
  SearchBoxInput,
  SearchIcon,
  InputContainer,
  SwitchContainer,
  LabelSwitch,
} from './styles'

const SearchBox = ({ getUserListSearch, getRepositoryListSearch, filterByLanguage, changeFilterList, history, location }) => {
  return (
    <>
      <SearchContainer>
        <InputContainer>
          <SearchBoxInput
            placeholder='Search...'
            onKeyPress={(e) => onEnter(e, getUserListSearch, getRepositoryListSearch, filterByLanguage, history, location)}
          />
          < SearchIcon />
        </InputContainer>
        {
          !location.pathname.includes('users') ?
            <SwitchContainer>
              <LabelSwitch>
                Search by language:
          </LabelSwitch>
              <label>
                <Switch
                  checked={filterByLanguage}
                  onChange={changeFilterList}
                  height={21}
                  width={45}
                  onColor='#5972FC'
                />
              </label>
            </SwitchContainer>
            : ''
        }
      </SearchContainer>
    </>
  );
}


const onEnter = (e, getUserListSearch, getRepositoryListSearch, filterByLanguage, history, location) => {
  if (e.key === 'Enter' && e.target.value.length > 0) {
    if (location.pathname.includes('repositories')) {
      return getRepositoryListSearch(e.target.value, filterByLanguage);
    } else {
      history.push('/users');
      return getUserListSearch(e.target.value, filterByLanguage);
    }
  }
}

const mapStateToProps = ({ repositoryApp }) => ({
  filterByLanguage: repositoryApp.filterByLanguage
})

export default connect(
  mapStateToProps,
  {
    getUserListSearch,
    getRepositoryListSearch,
    changeFilterList
  }
)(withRouter(SearchBox));
