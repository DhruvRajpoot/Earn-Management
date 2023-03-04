import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    padding: 0 0 0 120px;
    height: 80vh;
    align-items: center;

    @media (max-width: 990px) {
        padding: 0 0 0 20px;
    }

    @media (max-width:750px) {
        padding: 10px;
        height: 100%;
        flex-direction: column;
    }
    `
export const LeftDiv = styled.div`
    max-width: 550px;
    width: 100%;

    @media (max-width: 750px) {
        width: 95%;
    }
    `
export const RightDiv = styled.div`
    max-width: 800px;
    width: 100%;
    overflow: hidden;
    position: relative;
    z-index: 2;

    @media (max-width: 750px) {
    width:100%;
    }
`

export const Title = styled.h1`
    font-size: 80px;
    line-height: 88px;
    margin-bottom: 0;

    @media (max-width:990px){
        font-size: 55px;
        line-height: 60px;
    }
`
export const Para = styled.p`
    font-size: 20px;
    line-height: 30px;

    @media (max-width:990px){
        font-size: 18px;
    }
`

export const InputDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 450px;
    width: 100%;
    margin-top: 42px;
    padding: 2px;
    border-radius: 40px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.18);

    @media (min-width: 750px) and (max-width:990px){
        width: 100%;
    }

    @media (max-width: 750px) {
        width   : 100%;
    }
    
    `

export const Input = styled.input`
    background-color: transparent;
    padding: 25px 0 25px 25px;
    border: none;
    color: rgba(255, 255, 255, 0.62);
    outline: none;

    @media (max-width:750px){
        padding: 20px 0 20px 20px;
        width: 100%;
        max-width: 250px;
    }
`
export const InsideInputDiv = styled.div`
    display: flex;
`
export const SendBtn = styled.button`
    border: none;
    border-radius: 50%;
    background-color: rgba(16, 123, 238, 1);
    color: white;
    padding: 21px;
    font-size: 23px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    @media (max-width:750px){
        padding: 15px;
    }
`

export const Select = styled.select`
    background: transparent;
    color: white;
    border: none;
    outline: none;
    font-weight: 500;
    cursor: pointer;
    border-left: 1px solid rgba(255, 255 , 255 ,.18);
    padding-left: 10px;
    margin-right: 10px;
`
export const Option = styled.option`
    background: #121212d1;
    color: white;
`

export const GorillaImg = styled.img`
    transform: translate(-15%,7%);
    z-index: 3;
    padding-bottom: 16px;
    background: radial-gradient(41.76% 41.76% at 50% 50%, rgba(0, 209, 255, 0.24) 0%, rgba(0, 163, 255, 0) 85%);

    @media (max-width:750px){
        transform: translate(-5%,8%);
        width: 500px;
    }

    
    @media (max-width:520px){
        transform: translate(-8%,8%);
    }

    @media (max-width:425px){
        transform: translate(-12%,8%);
    }

    @media (max-width:360px){
        transform: translate(-20%,8%);
    }
`
export const GorillaMoney = styled.img`
    z-index: 4;
    position: absolute;
    bottom: -6%;
    left: 34%;

    @media (max-width:750px){
        max-width: 180px;
        width: 100%;
        left: 30%;
    }
`
export const GorillaText = styled.div`
    border-radius:90px;
    background: rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(40px);
    padding: 18px 25px;
    line-height: 25px;
    position: absolute;
    top: ${props => props.top};
    bottom: ${props => props.bottom};
    left: ${props => props.left};
    right: ${props => props.right};
    max-width: ${props => props.maxwidth ? props.maxwidth : '200px'};
    width: 100%;
    z-index: 10;

    @media (max-width:750px){
        padding: 5px 0 5px 15px;
        font-size: 14px;
        max-width: 180px;
        width: 100%;
        backdrop-filter: blur(20px);
        line-height: 20px;
    }
`