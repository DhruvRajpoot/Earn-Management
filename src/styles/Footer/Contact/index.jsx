import styled from "styled-components";
export const Wrapper=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 40%;
    @media (max-width:750px){
        width: 100%;
        margin-top: 16px;
    }
`
export const Div=styled.div`
    width: fit-content;
`
export const Flex=styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: ${props=>props.marginLeft};
    margin-top: ${props=>props.marginTop};
    @media (max-width:750px){
        justify-content: center;
    }
`
export const FlexIcon=styled(Flex)`
    margin-top: 30px;
    @media (max-width:750px){
        margin-top: 16px;
    }
`
export const Img=styled.img`
    height: ${props=>props.height};
    margin-right: ${props=>props.marginRight};
`
export const P=styled.p`
    color: ${props=>props.color};
`