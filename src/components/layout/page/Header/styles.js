import styled from 'styled-components'
import { FaAngleLeft, FaSearch } from 'react-icons/fa';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 59px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.065);
  transition: 
    height 0.3s cubic-bezier(0.34, 0, 0.58, 1),
    background-color 1s cubic-bezier(0.34, 0, 0.58, 1),
    border-color 1s cubic-bezier(0.34, 0, 0.58, 1);
    animation: fade-in 0.3s cubic-bezier(0.34, 0, 0.58, 1) forwards;
  @media (min-width: 700px) {
    height: 89px;
  }
`
export const Title = styled.div`
  display: flex;
  top: 16px;
  left: 15px;

  @media (min-width: 700px) {
    padding-top: 26px;
  left: 30px;
}
 `

export const PageTitle = styled.h1`
  top: 1px;
  left: 0;
  padding: 5px;
  cursor: pointer;
  opacity: 1;
`

export const MdArrowBackIcon = styled(FaAngleLeft)`
  pointer-events: auto;
  padding-left: 40px;
  width: 50px;
  height: 50px;
  opacity: .5;
  cursor: pointer;
  &:hover {
    transform: translateY(-1px)
  }
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`

export const SearchIcon = styled(FaSearch)`
  opacity: .4;
  margin-left: -40px;
`

export const SearchBox = styled.input`
  width: 550px;
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