import React, { Fragment } from 'react'
import PageHeader from '../Header/Header'
import PageContent from '../Content/Content';
import Menu from "../../menu/Menu";
import { Container } from './styles'

export const PageContainer = ({ children }) => (
  <Fragment>
    <Menu />
    <Container>
      <PageHeader />
      <PageContent children={children} />
    </Container>
  </Fragment>
)
