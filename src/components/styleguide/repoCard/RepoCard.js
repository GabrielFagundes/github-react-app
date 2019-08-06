import React from 'react';
import { Container, Card, Title, Description, Footer, Counter, StarIcon, ForkIcon } from './styles'

function UserCard({ name, description, stars, forks }) {


  return (
    <Container>
      <Card>
        <Title>
        {name}
        </Title>

        <Description>
          {description ? description : 'No description available'}
        </Description>

        <Footer>
          <Counter>
            <StarIcon />   
            <div>{stars}</div>
          </Counter>
          <Counter>
            <ForkIcon/>
            <div>{forks}</div>
          </Counter>
        </Footer>
      </Card>
    </Container>
  )
}

export default UserCard