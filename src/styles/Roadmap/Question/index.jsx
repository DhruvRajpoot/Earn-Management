import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: ${props => props.direction};
    align-items: center;
`
export const P = styled.p`
    font-size: ${props => props.fontSize};
    color:${props => props.color};
    font-weight: ${props => props.fontWeight};
    margin: ${props => props.margin};
`
export const DivFigure = styled.div`
    border-radius: ${props => props.borderRadius};
    background: ${props => props.background};
    border: ${props => props.border};
    height: ${props => props.height};
    width: ${props => props.width};
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Div = styled.div`
    width: ${props => props.width};
    margin: 0 25px;
    text-align: ${props=>props.align};
`
export const MainDiv = styled.div`
    position :absolute ;
    top: ${props=>props.top};
    bottom: ${props=>props.bottom};
    left: ${props=>props.left};
    right: ${props=>props.right};
`