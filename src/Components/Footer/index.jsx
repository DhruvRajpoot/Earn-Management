import React from 'react'
import { DiscordBtn, Div, Icon, Text, Wrapper ,Copyright } from '../../styles/Footer'
import discord from '../../assets/images/discordblack.svg'
import Column from './Column';
import Contact from './Contact';

const Footer = () => {
    const array = ['Fingertipe', 'Home', 'Blog', 'Roadmap', 'Contact'];
    const array2 = ['Resources', 'Discord', 'Twitter', 'Lorem', 'Lorem'];
    const array3 = ['About', 'Lorem','Lorem','Lorem','Lorem'];
    return (
        <>
            <DiscordBtn>
                <Icon src={discord} />
                <Text>Join Discord</Text>
            </DiscordBtn>
            <Wrapper>
                <Div>
                    <Column array={array} />
                    <Column array={array2} />
                    <Column array={array3} />
                    <Contact/>
                </Div>
            </Wrapper>
            <Copyright>&copy;copyright.play 2022</Copyright>
        </>
    )
}

export default Footer
