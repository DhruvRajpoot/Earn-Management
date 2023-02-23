import styled from "styled-components";

export const Nav = styled.div`
    position: sticky;
    top: 10px;
    z-index: 99;
`
export const Img = styled.img`
    width: 80px;
    @media (max-width: 750px) {
        width: 60px;
    }
`
export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    font-size:16px;
    margin: 22px 30px 22px 56px;

    @media (max-width:750px) {
        margin: 20px;
    }
    `
export const Div = styled.div`
    display: flex;
    justify-content: space-between;
    width: 60%;
    @media (max-width:750px) {
        display: flex;
        background: #262626f7;
        flex-direction: column;
        justify-content: center;
        position: fixed;
        width: 100vw;
        height: 100vh;
        left: 1px;
        top: 1px;
        transform: ${props=>props.hide===true?'translateX(-120vw)':'translateX(0)'};
        transition: all .5s;
    }
`


export const LinkDiv = styled.div`
    display: flex;
    align-items: center;
    @media (max-width:750px) {
        flex-direction: column;
    }
    `
export const Link = styled.a`
    margin: 0 26px;
    text-decoration: none;
    color: white;
    letter-spacing: .5px;
    @media (max-width:750px) {
        margin-bottom: 25px;
        font-size: 25px;
    }
`

export const SideDiv = styled.div`
    border: 1px solid rgba(255, 255, 255, 0.17);
    border-radius: 40px;
    margin: 16px 0 20px 0;  
    display: flex;
    @media (max-width:750px) {
        justify-content: center;
        border: none;
    }    
`

export const SocialImg = styled.img`
    padding:18px 16px;
    width:  20px;

    @media (max-width: 750px) {
        width: 30px;
    }
`

export const Hamburger = styled.button`
    background: transparent;
    color: white;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
    border: none;
    display: none;
    @media (max-width: 750px) {
        display: block;
        z-index: 100;
    }
`