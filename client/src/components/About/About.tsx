import styled from "styled-components";

const About = () => {
  return (
    <div>
      <AboutContainer id="about" >
        <h1>About</h1>
        <AboutMain>
          <div> I'm a former financial analyst with over 4 years of experience, seeking an entry-level position to begin my career as a web developer.
            I have high learning abilities, high personal standards, attention to details, and passion for expanding my horizons.
            A team player with good interpersonal skills with both peers and superiors.
          </div>
          <img src={process.env.PUBLIC_URL + "/assets/MILTON.jpg"} alt="miltonPic"></img>
        </AboutMain>
      </AboutContainer>
    </div>
  );
};

export { About };

const AboutContainer = styled.div`
  h1 {
    margin:0px;
    padding-top:10px;
    color:white;
 }
  background: ${props => props.theme.aboutBodyInfo};
  text-align:center;
  font-size:1rem;
  text-shadow: 2px 2px 4px #000000;
`;

const AboutMain = styled.div`
  display:flex;
  flex-direction:row;
  margin-left:20px;
  padding:10px;
  align-items:center;
  font-size:20px;
  text-shadow:none;
  color:${props => props.theme.textColor};
  img {
     height:11rem;
     width:11rem;
     border-radius:500px;
     margin-top:20px;
     margin-bottom:20px;
     margin-right:20px;
     margin-left:20px;
  }
  div{
     line-height: 2;
  }

    @media (max-width:812px){
       flex-direction:column;
    }  
`;
