import styled from "styled-components";

export const Heading = styled.h1`
    font-size: 80px;
    margin-bottom: 0;
    `
export const Desc = styled.p`
    font-size:18px;
    margin-top: 0;
    margin-bottom: 117px;
    `
export const InputDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const InputText = styled.p`
    font-size: 25px;
    font-weight: 500;
`
export const Input = styled.input`
    background: transparent;
    border: none;
    outline: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.21);
    color:rgba(255, 255, 255,.5);
    font-size: 16px;
    width: 50%;
    height: 30px;
`

export const Btn=styled.button`
    color: white;
    font-size: 15px;
    letter-spacing: .5px;
    font-weight: 700;
    padding: 75px 25px;
    border-radius: 50%;
    background: linear-gradient(180deg, #107BEE 0%, #359DFD 100%);
    position: absolute;
    right: 180px;
    margin-top: 32px;
    cursor: pointer;

    &:hover{
        background: linear-gradient(180deg, #1e8bff 0%, #2679c7 100%);
    }
`