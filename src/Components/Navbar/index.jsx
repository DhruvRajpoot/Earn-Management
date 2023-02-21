import { Nav, Wrapper, Link, LinkDiv, SideDiv } from "../../styles/Navbar"
import logo from '../../assets/images/logo.svg'
import discord from '../../assets/images/navdiscord.svg'
import twitter from '../../assets/images/navtwitter.svg'
import { SocialImg } from '../../styles/Navbar'

const Navbar = () => {
    return (
        <Nav>
            <Wrapper>
                <img src={logo} alt="" />
                <LinkDiv>
                    <Link>Road Map</Link>
                    <Link>Contact</Link>
                    <Link>Blog</Link>
                </LinkDiv>
                <SideDiv>
                    <SocialImg src={discord} alt="" />
                    <SocialImg src={twitter} alt="" />
                </SideDiv>
            </Wrapper>
        </Nav>
    )
}

export default Navbar
