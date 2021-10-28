import styled from "styled-components"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fileSaver from "file-saver"




const Footer = () => {
    const saveFile = () => {
        fileSaver.saveAs(
            process.env.PUBLIC_URL + "/CV.pdf",
            "CV.pdf"
        );
    }

    return (
        <div>
            <FooterContainer id="contact">
                <Contact>Contact me!</Contact>
                <Icons>
                    <FontAwesomeIcon icon={faFileDownload} onClick={(e) => { saveFile(); }} />
                    <FontAwesomeIcon icon={faGithub} onClick={(e) => { window.open('https://github.com/miilton844'); }} />
                    <FontAwesomeIcon icon={faLinkedin} onClick={(e) => { window.open('https://www.linkedin.com/in/milton-lerner-b22176156/') }} />
                </Icons>

            </FooterContainer>


        </div>)
}

export { Footer }

const FooterContainer = styled.div`
padding:0 2rem;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
text-align:center;
flex-wrap:wrap;
background: ${(props) => {
        return props.theme.navBar
    }};
`
const Contact = styled.div`
    margin-top:0.5rem;
    margin-bottom:1rem;
    font-weight: bold;
    color:white;
    text-align: center;
    font-size:1rem;
    text-shadow: 2px 2px 4px #000000;
`

const Icons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    font-size: 30px;
    width:15rem;
    align-items: center;
    color:white;
    margin-bottom:0.5rem;
    cursor: pointer;
`
