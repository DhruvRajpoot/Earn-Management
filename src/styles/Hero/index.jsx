import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    padding: 0 0 0 120px;
    height: 80vh;
    align-items: center;
    `
export const LeftDiv = styled.div`
    width: 43%;
    `
export const RightDiv = styled.div`
    width: 57%;
    overflow: hidden;
    position: relative;
    z-index: 2;
`

export const Title = styled.h1`
    font-size: 80px;
    line-height: 88px;
    margin-bottom: 0;
`
export const Para = styled.p`
    font-size: 20px;
    line-height: 30px;
`

export const InputDiv = styled.div`
    position: relative;
    width: 80%;
    margin-top: 42px;
    padding: 2px;
    border-radius: 40px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.18);
    `

export const Input = styled.input`
    background-color: transparent;
    padding: 25px 0 25px 25px;
    border: none;
    color: rgba(255, 255, 255, 0.62);
    outline: none;
`
export const InsideInputDiv = styled.div`
    position: absolute;
    top: 2px;
    right: 4px;
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
`

export const Select=styled.select`
    background: transparent;
    color: white;
    border: none;
    outline: none;
    font-weight: 500;
    cursor: pointer;
    border-left: 1px solid rgba(255, 255 , 255 ,.18);
    padding-left: 10px;
    margin: 10px;
`
export const Option=styled.option`
    background: #121212d1;
    color: white;
`

export const GorillaImg = styled.img`
    transform: translate(-15%,7%);
    z-index: 3;
    padding-bottom: 16px;
    background: radial-gradient(41.76% 41.76% at 50% 50%, rgba(0, 209, 255, 0.24) 0%, rgba(0, 163, 255, 0) 85%);;
`
export const GorillaMoney=styled.img`
    z-index: 4;
    position: absolute;
    bottom: -6%;
    left: 34%;
`
export const GorillaText=styled.div`
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
    width: ${props => props.width?props.width:'200px'};
`