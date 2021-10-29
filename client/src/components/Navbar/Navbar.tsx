import styled from "styled-components";
import { useState } from "react";
import { Toggle } from '../Toggle/Toggle'
import { Link } from 'react-scroll';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [toggled, setToggled] = useState(false);

    const change = (isOpen: boolean) => {
        setIsOpen(!isOpen);
    };

    const toggle = (event: any) => {
        setToggled(event.target.checked);
    };

    return (<Nav>
        <Logo >
            Milton <span>Codes</span>
        </Logo>
        <Hamburger onClick={() => change(isOpen)}>
            <span></span>
            <span></span>
            <span></span>
        </Hamburger>
        <Menu open={isOpen}>
            <MenuLink activeClass="active" to="about" spy={true} smooth={true} duration={1000}>
                About
            </MenuLink>
            <MenuLink activeClass="active" to="projects" spy={true} smooth={true} duration={1000}>
                Projects
            </MenuLink>

            <MenuLink activeClass="active" to="contact" spy={true} smooth={true} duration={1000}>
                Contact
            </MenuLink>
            <Toggle onChange={(event: any) => toggle(event)}> </Toggle>
        </Menu>
    </Nav>
    );
}

export { Navbar };

const Nav = styled.div`
padding:0 2rem;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
flex-wrap:wrap;
background: ${(props) => {
        return props.theme.navBar
    }};
`;
const Hamburger = styled.div`
display:none;
flex-direction:column;
cursor:pointer;

span{
    height:2px;
    width:25px;
    background-color:white;
    margin-top:1px;
    margin-bottom:4px;
    border-radius:5px;
}
@media (max-width:768px){
    display:flex;
}
`;
const Menu = styled.div<{ open: boolean }>`
background-color: ${({ open }: any) => open};

display:flex;
justify-content:space-between;
align-items:center;
position:relative;

@media (max-width:768px){
    overflow:hidden;
    flex-direction:column;
    width:100%;
    max-height:${({ open }) => (open ? "300px" : "0px")}
}
`;
const MenuLink = styled(Link)`
padding:1rem 2rem;
cursor:pointer;
text-align:center;
text-decoration:none;
color:white;
transition: all 0.3s ease-in;
font-size:0.9rem;
/* https://stackoverflow.com/questions/25704650/disable-blue-highlight-when-touch-press-object-with-cursorpointer */
-webkit-tap-highlight-color: transparent;
:hover{
    color:#FFFD95;
}

@media (max-width:812px){
cursor:none;
}
`;

const Logo = styled.a`
padding: 1rem 0;
color: white;
text-decoration:none;
font-weight:800;
font-size:1.7rem;
text-decoration:none;

span{
    font-weight:300;
    font-size:1.3rem;    
}

&:hover{
    color:#FFFD95;
}
`;

// https://www.youtube.com/watch?v=s-_8wRbuPSM
