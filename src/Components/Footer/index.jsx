import React from 'react'
import { Container, Div, Wrapper, Copyright,LinkDiv } from '../../styles/Footer'
import Column from './Column';
import Contact from './Contact';

const Footer = () => {
    const array = ['Fingertipe', 'Home', 'Blog', 'Roadmap', 'Contact'];
    const array2 = ['Resources', 'Discord', 'Twitter', 'Lorem', 'Lorem'];
    const array3 = ['About', 'Lorem', 'Lorem', 'Lorem', 'Lorem'];
    return (
        <Container>
            <Wrapper>
                <Div>
                    <LinkDiv>
                        <Column array={array} />
                        <Column array={array2} />
                        <Column array={array3} />
                    </LinkDiv>
                    <Contact />
                </Div>
            </Wrapper>
            <Copyright>&copy;copyright.play 2022</Copyright>
        </Container>
    )
}

export default Footer
