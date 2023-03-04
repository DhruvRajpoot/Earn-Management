import styled from "styled-components";

export const P=styled.p`
    font-size: 18px;
    margin-bottom: 30px;
`
export const Link=styled.a`
    text-decoration: none;
    color: white;
    margin: 10px 0;
`
export const Div=styled.div`
    display: flex;
    flex-direction: column;
    `

export const Wrapper=styled.div`
    display: flex;
    flex-direction: column;
    max-width: 200px;
    width: 100%;
    @media (max-width:750px){
        width:100% ;
        text-align: center;
    }
`