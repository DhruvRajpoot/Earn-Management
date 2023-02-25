import styled from "styled-components";

export const WrapperRoad = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 120px;
`
export const DivRoad = styled.div`
    border: 3px solid rgba(255, 255, 255, 0.12);
    border-top: ${props => props.right ? 'none' : ''};
    border-bottom: ${props => props.right ? 'none' : ''};
    border-left: ${props => props.right ? 'none' : ''};
    border-right: ${props => props.right ? '' : 'none'};
    border-top-left-radius: ${props => props.right ? '0' : '30px'};
    border-bottom-left-radius: ${props => props.right ? '0' : '30px'};
    border-top-right-radius: ${props => props.right ? '30px' : ''};
    border-bottom-right-radius: ${props => props.right ? '30px' : '-30px'};
    height: ${props => props.height ? props.height : '250px'};
    width: ${props => props.right?'1150px':'1110px'};
    display: flex;
    align-items: center;
    justify-content: ${props => props.right ? 'end' : 'start'};

    @media (max-width:750px) {
        width: 70%;
    }
`
export const RoadMapStartDiv = styled.div`
    border: 3px solid rgba(255, 255, 255, 0.12);
    
`
export const ContactDiv = styled.div`
    border: 3px solid rgba(255, 255, 255, 0.12);
    border-top-left-radius: 30px;
    border-bottom: none;
    border-right: none;
    width: 1070px;
    height: 850px;
    padding-top: 20px;
    padding-left: 50px;

    @media (max-width:750px) {
        width: 250px;
        padding-left: 20px;
        margin-right: 20px;
    }
`
export const RoadmapstartDiv = styled.div`
    border: 3px solid rgba(255, 255, 255, 0.12);
    height: 550px;
    width: 1110px;
    border-bottom-left-radius: 30px;
    border-right: none;
    border-top:none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 60px;

    @media (max-width:750px) {
        width: 220px;
    }
`
export const Heading = styled.h1`
    font-size: 80px;
    margin-bottom: 0;
    margin-left: 40px;
    
    @media (max-width: 750px){
     font-size:40px ;
     margin-left:20px;
    }
    `
export const Desc = styled.p`
    font-size:18px;
    margin-top: 0;
    margin-left: 40px;
    
    @media (max-width: 750px){
        margin-left: 20px;
        font-size: 16px;
    }
`
export const Img = styled.img`
    position: absolute;
    right: 210px;
    transform: translateY(-100px);
    background: radial-gradient(41.76% 41.76% at 50% 50%, rgba(0, 56, 255, 0.24) 0%, rgba(0, 133, 255, 0) 100%);

    @media (max-width:750px){
        transform: translateY(0);
        right: 0;
        width: 200px;
    }
`