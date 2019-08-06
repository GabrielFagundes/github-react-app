import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
`;

export const LinkMenu = styled(NavLink)`
  display: block;
  width:100%;
  height: 100%;
  color: #ffffff;
  text-decoration: none;
  padding: 10px 40px;
  letter-spacing: 1.5px;

  &.active {
    background-color: #475CD1;
  }

`;