import React from 'react'
import { InputDiv, Desc, Heading, InputText, Input, Btn } from '../../../styles/Roadmap2/ContactUs'

const ContactUs = () => {
  return (
    <>
      <Heading>Contact Us</Heading>
      <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Desc>
      <InputDiv>
        <InputText>Earnmanagement.com</InputText>
        <Input placeholder='Your Name' />
      </InputDiv>
      <InputDiv>
        <InputText>US  +1 (872) 288 9283</InputText>
        <Input placeholder='Your Email Address' />
      </InputDiv>
      <InputDiv>
        <InputText>UA  +1 (872) 288 9283</InputText>
        <Input placeholder='Describe your needs' />
      </InputDiv>
      <Btn>Submit Request</Btn>
    </>
  )
}

export default ContactUs
