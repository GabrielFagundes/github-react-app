import React from 'react';
import { Container, Card, Title, Description, Footer, Counter, StarIcon, ForkIcon } from './styles'

function UserCard() {


  return (
    <Container>
    <Card>
      <Title>
       cd-nation-test
      </Title>

      <Description>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
      </Description>

      <Footer>
        <Counter>
          <StarIcon />   
          <div>12</div>
        </Counter>
        <Counter>
          <ForkIcon/>
          <div>39</div>
        </Counter>
      </Footer>
    </Card>
    </Container>
  )
}

export default UserCard