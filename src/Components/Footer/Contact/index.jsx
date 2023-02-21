import discordpurple from '../../../assets/images/discordpurple.png'
import discordwhite from '../../../assets/images/discordwhite.png'
import twitter from '../../../assets/images/twitter.png'
import phone from '../../../assets/images/phone.png'
import {Wrapper, Div, Flex, Img, P } from '../../../styles/Footer/Contact'

const Contact = () => {
  return (
    <Wrapper>
      <Div>
        <Flex>
          <Img src={discordpurple} alt="" height={'18px'} marginRight={'16px'} />
          <P color={'rgba(88, 101, 242, 1)'}>Join us on Discord</P>
        </Flex>
        <Flex marginLeft={'5px'}>
          <Img src={phone} alt="" height={'30px'} marginRight={'16px'} />
          <P>(239) 555-0193</P>
        </Flex>
        <Flex marginTop={'30px'}>
          <Img src={twitter} alt="" marginRight={'16px'} />
          <Img src={discordwhite} alt="" />
        </Flex>
      </Div>
    </Wrapper>
  )
}

export default Contact;
