import styled from "styled-components";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-scroll';
import fileSaver from "file-saver";

const Hero = () => {
    const saveFile = () => {
        fileSaver.saveAs(
            process.env.PUBLIC_URL + "/assets/CV.pdf",
            "CV.pdf"
        );
    };

    return (
        <HeroContainer>
            <DetailsContainer>
                <SubDetailsContainer>
                    <OpeningParagraph>Milton Lerner</OpeningParagraph>
                    <OpeningParagraph2>Fullstack web developer</OpeningParagraph2>
                    <MenuLink activeClass="active" to="about" spy={true} smooth={true} duration={1000}>
                        About
                    </MenuLink>
                </SubDetailsContainer>
                <Icons>
                    <FontAwesomeIcon icon={faFileDownload} onClick={(e) => { saveFile(); }} />
                    <FontAwesomeIcon icon={faGithub} onClick={(e) => { window.open('https://github.com/miilton844'); }} />
                    <FontAwesomeIcon icon={faLinkedin} onClick={(e) => { window.open('https://www.linkedin.com/in/milton-lerner-b22176156/') }} />
                </Icons>
            </DetailsContainer>
            <Img src={process.env.PUBLIC_URL + "/assets/circles.svg"} alt="circleSvg"></Img>
        </HeroContainer>
    );
}

export { Hero };

const Img = styled.img`
  height:100%;
  width:auto;
  @media (max-width:812px){
    width:100%;
    height:auto;
  }
`;

const HeroContainer = styled.div`
  width:100%;
  height:100%;
  @media (max-width:812px){
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
`;

const DetailsContainer = styled.div`
  position:absolute;
  display:flex;
  flex-direction:row;
  width:99%;
  justify-content:space-between;
  margin-top:6rem;

  @media (max-width:812px){
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-top:initial;
    margin:auto;
   }
`;

const SubDetailsContainer = styled.div`
  display:flex;
  flex-direction:column;
  padding:0.1rem
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  font-size: 3rem;
  align-items: center;
  color:white;
  cursor: pointer;

  svg {
   margin:1rem;
  }
`;

const MenuLink = styled(Link)`
  display: block;
  color:white;
  background: ${props => props.theme.buttons};
  border:2px solid white;
  padding: 0.5rem 0.5rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  width:10rem;
  margin-bottom:2rem;
  margin-top:2rem;
  margin-left:auto;
  margin-right:auto;
  border-radius:100px;    
  transition-duration: 0.4s;
  &:hover {
     cursor: pointer;
     background: ${props => props.theme.buttonsHover};
     color: white;
}

  @media only screen and (max-width: 360px) {
    margin-bottom:1.5rem;
    margin-top:1.5rem;
}
`;

const OpeningParagraph = styled.span`
  display: block;
  font-weight: bold;
  color:white;
  text-align: center;
  font-size:4rem;
  text-shadow: 2px 2px 4px #000000;
  @media only screen and (max-width: 562px) {
    font-size: 3rem;
  }
  @media only screen and (max-width: 360px) {
    font-size: 2rem;   
  }
`;

const OpeningParagraph2 = styled.span`
  display: block;
  font-weight: bold;
  color:white;
  text-align: center;
  font-size:3rem;
  text-shadow: 2px 2px 4px #000000;
  @media only screen and (max-width: 562px) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 360px) {
    font-size: 1.5rem;
  }
`;

