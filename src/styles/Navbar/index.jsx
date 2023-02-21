import styled from "styled-components";

export const Nav = styled.div`
    position: sticky;
    top: 10px;
    z-index: 99;
`
export const Wrapper = styled.div`
    display: flex;
    font-size:16px;
    justify-content: space-between;
    margin: 22px 30px 22px 56px;
    `

export const LinkDiv = styled.div`
    display: flex;
    align-items: center;
    `

export const Link = styled.a`
    margin: 0 26px;
    text-decoration: none;
    color: white;
    letter-spacing: .5px;
`

export const SideDiv = styled.div`
    border: 1px solid rgba(255, 255, 255, 0.17);
    border-radius: 40px;
    margin: 16px 0 20px 0;  
    display: flex;
`

export const SocialImg = styled.img`
    padding:18px 16px;
    width:  20px;
`