import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  padding: 40px;
  top: 60px;
  overflow: auto;
  z-index: 300;
  @media (min-width: 700px) {
    top: 90px;
  }
  transition: top .3s cubic-bezier(.34, 0, .58, 1), opacity .3s cubic-bezier(.34, 0, .58, 1);
`