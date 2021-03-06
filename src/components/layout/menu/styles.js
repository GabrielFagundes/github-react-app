import styled from 'styled-components'

export const Container = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #5972FC;
  /* box-shadow: 1px 0 20px rgba(0,0,0,.2); */
`

export const Logo = styled.div`
  position:absolute;
  padding-top: 20%;
  padding-left: 25%;
  width: 100px;
  height: 100px;
`

export const Menus = styled.nav`
  width: 100%;
  position: absolute;
  top: 200px;
`

export const MenuHero = styled.div`
  font-size: 17px;
  letter-spacing: 0.2px;
  color: #FFFFFF;
  padding: 60px 0 20px 25px;
  opacity: .8;
`