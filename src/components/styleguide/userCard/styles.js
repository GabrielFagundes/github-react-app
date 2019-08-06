import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa'

export const Container = styled.div`
    width: 200px;
    height: 300px;
    margin: 20px 35px 20px 40px;
    text-align: center;

    a {
        color: black;
        text-decoration: none;
        outline: none;
    }
`

export const Image = styled.div`
    width: 200px;
    height: 200px;
    background-color: #FFFFFF;
    border-radius: 100px;
    box-shadow: 0 5px 28px rgba(0,0,0,.3);
    background-image: url(${props => props.userImage});
    background-position: cover;
    background-repeat: no-repeat;
    background-size: 200px;
`
export const Name = styled.div`
    font-size: 20px; 
    max-width: 170px;  
`

export const Icon = styled(FaGithub)`
    margin-right: 10px;
    width: 23px;
    height: 23px;
`

export const Footer = styled.div`
    padding-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
`