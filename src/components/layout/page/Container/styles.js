import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  top: 50px;
  bottom: 0;
  left: 0;
  width: 90%;
  background-color: #fafafa;
  box-sizing: border-box;
  z-index: 110;
  transition: left .3s cubic-bezier(.34, 0, .58, 1), background-color 1s cubic-bezier(.34, 0, .58, 1);
  @media (min-width: 700px) {
    top: 0;
    margin-left: 250px;
    width: calc(100% - 250px);
  }
`