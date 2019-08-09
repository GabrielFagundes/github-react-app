import styled from 'styled-components'
import { FaStar, FaGitAlt } from 'react-icons/fa'

export const Container = styled.div`
    width: 400px;
    height: 200px;
    margin: 20px 35px 20px 40px;

    a {
        color: black;
        text-decoration: none;
    }
`;

export const Card = styled.div`
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;
    border-radius: 12px;
    padding: 30px;
    box-shadow: 0 6px 15px rgba(0,0,0,.2);
`;

export const Title = styled.div`
    display:block; 
    padding-bottom: 15px;
    font-size: 20px;
`;

export const Description = styled.div`
    height: 55px;
    font-style: italic;
    opacity: .6;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
`;

export const Footer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 5px;
    font-size: 15px;
    padding: 25px 5px;
`;

export const Counter = styled.div`
   display: flex;
`;

export const StarIcon = styled(FaStar)`
    opacity: .6;
    margin-bottom: -1px;
    margin-right: 4px;
`

export const ForkIcon = styled(FaGitAlt)`
    opacity: .6;
    margin-bottom: -1px;
    margin-right: 4px;
`