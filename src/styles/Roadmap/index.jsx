import styled from "styled-components";
import roadmapline from '../../assets/images/roadmapline.svg'

export const Wrapper = styled.div`
    background-image:url(${roadmapline});
    margin-top: 150px;
    height: 2676.5px;
    border-bottom:  3px solid rgba(255, 255, 255, 0.12);
    position: relative;
`
export const Heading = styled.h1`
    font-size: 80px;
    margin-bottom: 0;
    margin-left: 288px;
    transform: translateY(82px);
    `
export const Desc = styled.p`
    font-size:18px;
    margin-top: 0;
    margin-left: 288px;
    transform: translateY(82px);
`
export const Img=styled.img`
    position: absolute;
    right: 202px;
    transform: translateY(-32px);
    background: radial-gradient(41.76% 41.76% at 50% 50%, rgba(0, 56, 255, 0.24) 0%, rgba(0, 133, 255, 0) 100%);
`