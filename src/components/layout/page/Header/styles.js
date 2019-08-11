import styled from 'styled-components'
import { FaAngleLeft } from 'react-icons/fa';
import BackgroundHeader from '../../../../assets/headerBkg.svg'

export const Container = styled.div`
  position: absolute;
  display:flex; 
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.065);
  background-image: url(${BackgroundHeader});
  background-size: 120%;
  background-position-x: -100px;
  background-position-y: -400px;
  background-repeat: no-repeat;
  @media (min-width: 700px) {
    height: 70px;
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