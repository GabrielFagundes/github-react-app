import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa';

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  padding: 20px 20px;
  margin-top: 30px;
  margin-bottom: -50px;
  border-radius: 10px;
  background-color: #FFFFFF;
  box-shadow: 0 3px 15px rgba(0,0,0,.2);
  z-index: 200;
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SearchIcon = styled(FaSearch)`
  opacity: .4;
  margin-left: -40px;
`

export const SearchBoxInput = styled.input`
  width: 85%;
  height: 40px;
  padding: 0 20px;
  border: none;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,.2);
  opacity: .8;
  text-decoration: none;
  outline: none;
  font-size: 1rem;
  color: #585151;
`

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888787;
  padding-top: 20px;
`
export const LabelSwitch = styled.label`
  margin-top: -5px;
  padding-right: 10px;
`