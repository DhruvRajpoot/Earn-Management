import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: ${props => props.right ? 'row-reverse' : 'row'};
    align-items: center;
`
export const Year = styled.p`
    font-size: 71px;
    margin: 5px 0;

    @media (max-width: 750px) {
        font-size: 40px;
    }
`
export const Quarter = styled.p`
    font-size: 33px;
    color: rgba(21, 196, 198, 1);
    font-weight: 600;
    margin: 0;

    @media (max-width: 750px) {
     font-size:25px ;
    }
`
export const Text = styled.p`
    color: rgba(255, 255, 255, 0.39);

    @media (max-width: 750px) {
        font-size:14px ;
    }
`
export const DivFigure = styled.div`
    background: ${props => props.background ? props.background : 'rgba(29, 51, 64, 0.45)'};
    max-width: 214px;
    width: 100% ;
    height: ${props => props.height ? props.height : '133px'};
    backdrop-filter: blur(40px);
    border-radius: 32px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width:750px) {
        width: 170px;
        height: 80px;
        border-radius: 20px;
    }
`

export const Circle = styled.div`
    border-radius: 50%;
    background: ${props => props.bg ? props.bg : 'linear-gradient(180deg, #778282 0%, #2F3842 100%)'};
    border: ${props => props.border ? props.border : '6px solid rgba(255, 255, 255, 0.3)'};
    max-width: 102px;
    width: 100%;
    height: 102px;

    @media (max-width:750px) {
        max-width: 40px;
        height: 40px;
    }
`

export const Div = styled.div`
    max-width: ${props => props.maxwidth ? props.maxwidth : '550px'};
    text-align: ${props => props.right ? 'right' : 'left'};
    margin: 0 25px;

    @media (max-width: 750px) {
        margin: 0;
        width: 100%;
        transform: ${props=>props.right?'translateX(-20px)':'translateX(20px)'};
    }
`
export const MainDiv = styled.div`
    transform: ${props => props.right ? 'translateX(107px)' : 'translateX(-107px)'};

    @media (max-width: 750px) {
        transform: ${props => props.right ? 'translateX(50px)' : 'translateX(-50px)'};
    }
`