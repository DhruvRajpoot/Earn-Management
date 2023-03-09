import { Para, Title, Input, InputDiv, InsideInputDiv, Wrapper, LeftDiv, RightDiv, GorillaImg, SendBtn, Select, Option, GorillaMoney,GorillaTextWrapper, GorillaText, GorillaTextDiv } from '../../styles/Hero'
import { AiOutlineSend } from 'react-icons/ai'
import gorilla from '../../assets/images/gorilla.svg'
import money from '../../assets/images/money.svg'

const Hero = () => {
    return (
        <Wrapper>
            <LeftDiv>
                <Title>Guild Hub of the Metaverse</Title>
                <Para>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis mattis hendrerit. Praesent vel risus in risus vestibulum aliquet. </Para>
                <InputDiv>
                    <Input placeholder='Enter your Email Address' />
                    <InsideInputDiv>
                        <Select name="" id="">
                            <Option value="">Owner</Option>
                            <Option value="">Consumer</Option>
                        </Select>
                        <SendBtn>
                            <AiOutlineSend />
                        </SendBtn>
                    </InsideInputDiv>
                </InputDiv>
            </LeftDiv>
            <RightDiv >
                <GorillaImg src={gorilla} />
                <GorillaMoney src={money} />
                <GorillaTextWrapper>
                <GorillaTextDiv >
                    <GorillaText>Automate payments for quick transparent cashout?</GorillaText>
                    <GorillaText paddingright>All on one platform that doesn’t lag? You’re Kidding</GorillaText>
                </GorillaTextDiv>
                <GorillaTextDiv>
                    <GorillaText>You mean, i can track my scholars’ performance</GorillaText>
                    <GorillaText>Search and Breed Axies and NFTs</GorillaText>
                </GorillaTextDiv>
                </GorillaTextWrapper>
            </RightDiv>
        </Wrapper>
    )
}

export default Hero
