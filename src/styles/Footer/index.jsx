import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    border-top: 3px solid rgba(255, 255, 255, 0.12);
`

export const DiscordBtn = styled.button`
    position: absolute;
    bottom: 37px;
    right: 34px;
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    color: black;
    background-color: white;
    padding: 25px 15px;
    border-radius: 50%;
    font-weight: 900;
    z-index: 100;
    cursor: pointer;

    @media (max-width:750px) {
        position: relative;
        top: 16px;
        bottom: 0;
        left: 0;
        right: 0;
    }
`
export const Icon = styled.img`
    margin-top: 10px;
`

export const Text = styled.p`
    margin-top: 7px;
`
export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 60px;
    
`
export const Div = styled.div`
    width: 65%;
    height: 190px;
    display: flex;
    @media (max-width:750px){
        flex-direction: column;
        width: 100%;
        height: 100%;
    }

`
export const LinkDiv=styled.div`
    width: 60%;
    display: flex;
    @media (max-width:750px){
        width : 100%;
    }
`

export const Copyright = styled.p`
    text-align: center;
    margin: 100px 0 20px 0;
    font-size: 14px;

    @media (max-width:750px){
        margin-top: 40px;
    }
`