import styled from "styled-components"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./hero.css"
import { Link } from 'react-scroll';
import fileSaver from "file-saver"

const GeneralInfoContainer = styled.div`
position: relative;
display:flex;
flex-direction:row;
top:7rem;
left:1rem;
font-size:1rem;
width:95%;
justify-content:space-between;
z-index:1;
align-items:center;

@media (max-width:812px){
flex-direction:column;

}

@media (max-width:540px){
top:4rem;

}

@media (max-width:360px){
top:2rem;
}

@media (max-width:280px){
width:initial;
top:0rem;
left:initial;
}
`

const GeneralInfoContainer2 = styled.div`
display:flex;
flex-direction:column;
top:15rem;
left:10rem;
/* font-size:2rem; */

@media (max-width:812px){
width:initial;
top:initial;
left:initial;
}
`
const AboutMeButton = styled.button`
top:19rem;
display: block;
color:white;
background: ${props => props.theme.buttons};
border:2px solid white;
padding: 16px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
width:10rem;
font-size: 16px;
margin-top:10px;
margin-bottom:10px;
margin-left:auto;
margin-right:auto;
border-radius:100px;    
transition-duration: 0.4s;

&:hover {
cursor: pointer;

background: ${props => props.theme.buttonsHover};
color: white;
}

@media (max-width:812px){
margin-left:auto;
margin-right:auto;
margin-top:1rem;
margin-bottom:1rem;
}  
`

const MenuLink = styled(Link)`

top:19rem;
display: block;
color:white;
background: ${props => props.theme.buttons};
border:2px solid white;
padding: 0.5rem 0.5rem;
text-align: center;
text-decoration: none;
display: inline-block;
width:10rem;
font-size: 16px;
margin-top:2rem;
margin-bottom:2rem;
margin-left:auto;
margin-right:auto;
border-radius:100px;    
transition-duration: 0.4s;

&:hover {
cursor: pointer;

background: ${props => props.theme.buttonsHover};
color: white;
}

@media (max-width:812px){
margin-left:auto;
margin-right:auto;
margin-top:2rem;
margin-bottom:2rem;
}  
`


const Hero = () => {

    const saveFile = () => {
        fileSaver.saveAs(
            process.env.PUBLIC_URL + "/CV.pdf",
            "CV.pdf"
        );
    }

    return (
        <div>
            <GeneralInfoContainer>
                <GeneralInfoContainer2>
                    <div className='openning'>Milton Lerner</div>
                    <div className='sub-openning'>Fullstack web developer</div>

                    {/* <AboutMeButton className='about-me-button' onClick={handleClick}> */}
                    <MenuLink activeClass="active" to="about" spy={true} smooth={true} duration={1000}>
                        About
                    </MenuLink>
                    {/* </AboutMeButton> */}
                </GeneralInfoContainer2>
                <div className='icons'>
                    <FontAwesomeIcon icon={faFileDownload} onClick={(e) => { saveFile(); }} />
                    <FontAwesomeIcon icon={faGithub} onClick={(e) => { window.open('https://github.com/miilton844'); }} />
                    <FontAwesomeIcon icon={faLinkedin} onClick={(e) => { window.open('https://www.linkedin.com/in/milton-lerner-b22176156/') }} />
                </div>
            </GeneralInfoContainer>

        </div>
    )
}

export { Hero }

