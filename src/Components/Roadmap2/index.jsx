import React from 'react'
import { ContactDiv, DivRoad, WrapperRoad, Heading, Desc, Img, RoadmapstartDiv, RoadmapStartContainer, UpperBorderDiv } from '../../styles/Roadmap2'
import { MainDiv, Wrapper, Div, DivFigure, Year, Quarter, Text, Circle } from '../../styles/Roadmap2/Question'
import ContactUs from './ContactUs'
import img from '../../assets/images/roadmapstart.png'


const Roadmap2 = () => {
  return (
    <WrapperRoad>
      <UpperBorderDiv />
      <RoadmapStartContainer>
        <RoadmapstartDiv>
          <div>
            <Heading>Road Map</Heading>
            <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Desc>
            <Img src={img} />
          </div>
          <MainDiv>
            <Wrapper>
              <DivFigure background={'white'} height={'179px'}>
                <Circle bg={'linear-gradient(180deg, #15C4C6 0%, #0C79F4 100%)'} border={'6px solid rgba(255, 255, 255, 0.3)'} />
              </DivFigure>
              <Div maxwidth={'300px'}>
                <Year>2022</Year>
                <Quarter>Q1</Quarter>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id purus augue. Lorem ipsum dolor</Text>
              </Div>
            </Wrapper>
          </MainDiv>
        </RoadmapstartDiv>
      </RoadmapStartContainer>

      <DivRoad right>
        <MainDiv right>
          <Wrapper right>
            <DivFigure>
              <Circle />
            </DivFigure>
            <Div right>
              <Year>2022</Year>
              <Quarter>Q2</Quarter>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id purus augue. Lorem ipsum dolor</Text>
            </Div>
          </Wrapper>
        </MainDiv>
      </DivRoad>

      <DivRoad>
        <MainDiv >
          <Wrapper>
            <DivFigure>
              <Circle />
            </DivFigure>
            <Div>
              <Year>2022</Year>
              <Quarter>Q3</Quarter>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id purus augue. Lorem ipsum dolor</Text>
            </Div>
          </Wrapper>
        </MainDiv>
      </DivRoad>

      <DivRoad right>
        <MainDiv right>
          <Wrapper right>
            <DivFigure>
              <Circle />
            </DivFigure>
            <Div right>
              <Year>2022</Year>
              <Quarter>Q4</Quarter>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id purus augue. Lorem ipsum dolor</Text>
            </Div>
          </Wrapper>
        </MainDiv>
      </DivRoad>

      <DivRoad>
        <MainDiv>
          <Wrapper>
            <DivFigure>
              <Circle />
            </DivFigure>
            <Div>
              <Year>2023</Year>
              <Quarter>Q1</Quarter>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id purus augue. Lorem ipsum dolor</Text>
            </Div>
          </Wrapper>
        </MainDiv>
      </DivRoad>

      <DivRoad right>
        <MainDiv right>
          <Wrapper right>
            <DivFigure>
              <Circle />
            </DivFigure>
            <Div right>
              <Year>2023</Year>
              <Quarter>Q2</Quarter>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id purus augue. Lorem ipsum dolor</Text>
            </Div>
          </Wrapper>
        </MainDiv>
      </DivRoad>

      <ContactDiv>
        <ContactUs />
      </ContactDiv>
    </WrapperRoad>
  )
}

export default Roadmap2
