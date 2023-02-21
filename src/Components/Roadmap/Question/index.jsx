import React from 'react'
import { MainDiv, Wrapper, Div, DivFigure, P } from '../../../styles/Roadmap/Question'

const Question = () => {
    return (
        <>
            <MainDiv top={'320px'} left={'146px'}>
                <Wrapper direction={'row'}>
                    <DivFigure width={'214px'} height={'179px'} borderRadius={'32px'} background={'white'}>
                        <DivFigure width={'102px'} height={'102px'} borderRadius={'50%'} background={'linear-gradient(180deg, #15C4C6 0%, #0C79F4 100%)'} border={'6px solid rgba(255, 255, 255, 0.3)'} />
                    </DivFigure>
                    <Div width={'30%'}>
                        <P fontSize={'71px'} margin={'5px 0'}>2022</P>
                        <P fontSize={'33px'} margin={'0'} color={'rgba(21, 196, 198, 1)'} fontWeight={'600'}>Q1</P>
                        <P color={'rgba(255, 255, 255, 0.39)'} margin={'0'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id purus augue. Lorem ipsum dolor </P>
                    </Div>
                </Wrapper>
            </MainDiv>

            <MainDiv top={'620px'} right={'60px'}>
                <Wrapper direction={'row-reverse'}>
                    <DivFigure width={'214px'} height={'133px'} borderRadius={'32px'} background={'rgba(29, 51, 64, 0.45)'}>
                        <DivFigure width={'102px'} height={'102px'} borderRadius={'50%'} background={'linear-gradient(180deg, #778282 0%, #2F3842 100%)'} border={'6px solid rgba(255, 255, 255, 0.3)'} />
                    </DivFigure>
                    <Div width={'39%'} align={'right'}>
                        <P fontSize={'71px'} margin={'5px 0'}>2022</P>
                        <P fontSize={'33px'} margin={'0'} color={'rgba(21, 196, 198, 1)'} fontWeight={'600'}>Q2</P>
                        <P color={'rgba(255, 255, 255, 0.39)'} margin={'0'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id purus augue. Lorem ipsum dolor </P>
                    </Div>
                </Wrapper>
            </MainDiv>

            <MainDiv top={'850px'} left={'146px'}>
                <Wrapper direction={'row'}>
                    <DivFigure width={'214px'} height={'133px'} borderRadius={'32px'} background={'rgba(29, 51, 64, 0.45)'}>
                        <DivFigure width={'102px'} height={'102px'} borderRadius={'50%'} background={'linear-gradient(180deg, #778282 0%, #2F3842 100%)'} border={'6px solid rgba(255, 255, 255, 0.3)'} />
                    </DivFigure>
                    <Div width={'39%'}>
                        <P fontSize={'71px'} margin={'5px 0'}>2022</P>
                        <P fontSize={'33px'} margin={'0'} color={'rgba(21, 196, 198, 1)'} fontWeight={'600'}>Q3</P>
                        <P color={'rgba(255, 255, 255, 0.39)'} margin={'0'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id purus augue. Lorem ipsum dolor </P>
                    </Div>
                </Wrapper>
            </MainDiv>

            <MainDiv top={'1090px'} right={'60px'}>
                <Wrapper direction={'row-reverse'}>
                    <DivFigure width={'214px'} height={'133px'} borderRadius={'32px'} background={'rgba(29, 51, 64, 0.45)'}>
                        <DivFigure width={'102px'} height={'102px'} borderRadius={'50%'} background={'linear-gradient(180deg, #778282 0%, #2F3842 100%)'} border={'6px solid rgba(255, 255, 255, 0.3)'} />
                    </DivFigure>
                    <Div width={'39%'} align={'right'}>
                        <P fontSize={'71px'} margin={'5px 0'}>2022</P>
                        <P fontSize={'33px'} margin={'0'} color={'rgba(21, 196, 198, 1)'} fontWeight={'600'}>Q4</P>
                        <P color={'rgba(255, 255, 255, 0.39)'} margin={'0'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id purus augue. Lorem ipsum dolor </P>
                    </Div>
                </Wrapper>
            </MainDiv>

            <MainDiv top={'1315px'} left={'146px'}>
                <Wrapper direction={'row'}>
                    <DivFigure width={'214px'} height={'133px'} borderRadius={'32px'} background={'rgba(29, 51, 64, 0.45)'}>
                        <DivFigure width={'102px'} height={'102px'} borderRadius={'50%'} background={'linear-gradient(180deg, #778282 0%, #2F3842 100%)'} border={'6px solid rgba(255, 255, 255, 0.3)'} />
                    </DivFigure>
                    <Div width={'39%'}>
                        <P fontSize={'71px'} margin={'5px 0'}>2023</P>
                        <P fontSize={'33px'} margin={'0'} color={'rgba(21, 196, 198, 1)'} fontWeight={'600'}>Q1</P>
                        <P color={'rgba(255, 255, 255, 0.39)'} margin={'0'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id purus augue. Lorem ipsum dolor </P>
                    </Div>
                </Wrapper>
            </MainDiv>

            <MainDiv top={'1570px'} right={'120px'}>
                <Wrapper direction={'row-reverse'}>
                    <DivFigure width={'214px'} height={'133px'} borderRadius={'32px'} background={'rgba(29, 51, 64, 0.45)'}>
                        <DivFigure width={'102px'} height={'102px'} borderRadius={'50%'} background={'linear-gradient(180deg, #778282 0%, #2F3842 100%)'} border={'6px solid rgba(255, 255, 255, 0.3)'} />
                    </DivFigure>
                    <Div width={'39%'} align={'right'}>
                        <P fontSize={'71px'} margin={'5px 0'}>2023</P>
                        <P fontSize={'33px'} margin={'0'} color={'rgba(21, 196, 198, 1)'} fontWeight={'600'}>Q2</P>
                        <P color={'rgba(255, 255, 255, 0.39)'} margin={'0'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id purus augue. Lorem ipsum dolor </P>
                    </Div>
                </Wrapper>
            </MainDiv>
        </>
    )
}

export default Question