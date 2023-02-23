import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: ${props => props.right ? 'row-reverse' : 'row'};
    align-items: center;
`
export const Year = styled.p`
    font-size: 71px;
    margin: 5px 0;
`
export const Quarter = styled.p`
    font-size: 33px;
    color: rgba(21, 196, 198, 1);
    font-weight: 600;
    margin: 0;
`
export const Text = styled.p`
    color: rgba(255, 255, 255, 0.39);
`
export const DivFigure = styled.div`
    background: ${props => props.background ? props.background : 'rgba(29, 51, 64, 0.45)'};
    width: 214px;
    height: ${props => props.height ? props.height : '133px'};
    backdrop-filter: blur(40px);
    border-radius: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Circle = styled.div`
    border-radius: 50%;
    background: ${props => props.bg ? props.bg : 'linear-gradient(180deg, #778282 0%, #2F3842 100%)'};
    border: ${props => props.border ? props.border : '6px solid rgba(255, 255, 255, 0.3)'};
    width: 102px;
    height: 102px;
`

export const Div = styled.div`
    width: ${props => props.width ? props.width : '39%'};
    text-align: ${props => props.right ? 'right' : 'left'};
    margin: 0 25px;
`
export const MainDiv = styled.div`
    transform: ${props => props.right ? 'translateX(107px)' : 'translateX(-107px)'};
`