import React from 'react';
import { Container, LinkMenu } from './styles';

function MenuItem({ link = '/2', activeMenu, onClick, label }) {
  return (
    <Container>
      <LinkMenu to={link}>
        {label}
      </LinkMenu>
    </Container>
  );
}

export default MenuItem;