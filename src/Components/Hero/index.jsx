import { Para, Title, Input, InputDiv, InsideInputDiv, Wrapper, LeftDiv, RightDiv, GorillaImg, SendBtn, Select, Option, GorillaMoney, GorillaText } from '../../styles/Hero'
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
                    <Input placeholder='Enter your Email Address'></Input>
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
                <GorillaText top={'40%'} width={'200px'}>Automate payments for quick transparent cashout?</GorillaText>
                <GorillaText top={'67%'} left={'16px'} width={'200px'}>All on one platform that doesn’t lag? You’re Kidding</GorillaText>
                <GorillaText top={'25%'} right={'8%'} width={'200px'}>You mean, i can track my scholars’ performance</GorillaText>
                <GorillaText top={'63%'} right={'12%'} width={'150px'}>Search and Breed Axies and NFTs</GorillaText>
            </RightDiv>
        </Wrapper>
    )
}

export default Hero
