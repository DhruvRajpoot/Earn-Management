import React from 'react'
import { Desc, Heading, Img, Wrapper } from '../../styles/Roadmap'
import img from '../../assets/images/roadmapstart.png'
import Question from './Question'
import ContactUs from './ContactUs'

const Roadmap = () => {
  return (
    <Wrapper>
      <Heading>Road Map</Heading>
      <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Desc>
      <Img src={img} />
      <Question/>
      <ContactUs/>
    </Wrapper>
  )
}

export default Roadmap