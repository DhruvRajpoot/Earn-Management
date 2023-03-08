import styled from "styled-components";

export const Heading = styled.h1`
    font-size: 80px;
    margin-bottom: 0;

    @media (max-width:750px){
        font-size: 40px;
    }
    `
export const Desc = styled.p`
    font-size:18px;
    margin-top: 0;
    margin-bottom: 117px;

    @media (max-width:750px) {
        font-size: 16px;
        margin-top: 10px;
        margin-bottom: 80px;
    }
    `
export const InputDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media (max-width:750px){
        flex-direction: column;
    }
`
export const InputText = styled.p`
    font-size: 25px;
    font-weight: 500;
    @media (max-width:750px){
        font-size: 20px;
        width: 100%;
        margin-bottom: 10px;
    }
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
    @media (max-width:750px){
        width: 100%;
    }   
`

export const BtnDiv=styled.div`
    display: flex;
    justify-content: end;
    margin-top: 32px;
    @media (max-width: 750px) {
        justify-content: center;
    }
`
export const Btn=styled.button`
    color: white;
    font-size: 15px;
    letter-spacing: .5px;
    font-weight: 700;
    padding: 75px 25px;
    border-radius: 50%;
    background: linear-gradient(180deg, #107BEE 0%, #359DFD 100%);
    cursor: pointer;

    &:hover{
        background: linear-gradient(180deg, #1e8bff 0%, #2679c7 100%);
    }
    
    @media (max-width:750px){
        padding: 50px 3px;
        font-size: 14px;
    }       
`