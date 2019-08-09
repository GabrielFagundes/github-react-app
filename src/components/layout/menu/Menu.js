import React from 'react';
import { Container, Logo, Menus, MenuHero } from './styles'
import MenuItem from '../menuItem/MenuItem'
import GithubLogo from '../../../assets/GithubLogo.svg'

function Menu() {
  return (
    <Container>
      <Logo>
        <img src={GithubLogo} alt='GithubLogo' />
      </Logo>

      <Menus>
        <MenuHero>
          MAIN
        </MenuHero>
        <MenuItem label='Users' link='/users' />
        <MenuItem label='Repositories' link='/repositories' />
      </Menus>
    </Container>
  );
}


export default Menu;