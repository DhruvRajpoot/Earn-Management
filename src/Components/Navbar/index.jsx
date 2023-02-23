import { Nav, Wrapper,Div,Img, Link, LinkDiv, SideDiv, Hamburger } from "../../styles/Navbar"
import logo from '../../assets/images/logo.svg'
import discord from '../../assets/images/navdiscord.svg'
import twitter from '../../assets/images/navtwitter.svg'
import { SocialImg } from '../../styles/Navbar'
import { CgMenuGridR } from 'react-icons/cg'
import {VscChromeClose} from 'react-icons/vsc'
import { useState } from "react"

const Navbar = () => {
    const [hide,setHide]=useState(true);
    const handleclick=()=>{
        setHide(!hide);
    }

    return (
        <Nav>
            <Wrapper>
                <Img src={logo} alt="" />
                <Hamburger onClick={handleclick}>{hide?<CgMenuGridR/>:<VscChromeClose/>}</Hamburger>
                <Div hide={hide}>
                    <LinkDiv>
                        <Link>Road Map</Link>
                        <Link>Contact</Link>
                        <Link>Blog</Link>
                    </LinkDiv>
                    <SideDiv>
                        <SocialImg src={discord} alt="" />
                        <SocialImg src={twitter} alt="" />
                    </SideDiv>
                </Div>
            </Wrapper>
        </Nav>
    )
}

export default Navbar
