import styled from "styled-components"
import { faInternetExplorer } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Title = styled.h2`
  color: #fff;
  font-weight: 300;
`

const Date = styled.div`
  color: #ccc;
  font-weight: 300;
  margin: 6px 0;
`

const Description = styled.p`
  color: #fff;
  font-weight: 300;
`
const ActionButton = styled.button`
  margin: 5px 5px 5px 5px;
  padding: 8px 20px;
  background: ${props => props.theme.buttons};
  border:2px solid white;
  border-radius:100px;
  color: #fff;
  cursor: pointer;
  outline: 0;
  font-weight: 300;
  :hover {
    opacity: 0.8;
  }
`

const Actions = styled.div`
  color: #333;
  display: flex;
  align-items: center;
  display:flex;
  flex-direction:row;
  justify-content:space-evenly;

  svg {
    transform: translateY(2px);
    margin-right: 5px;
  }
`

const Container = styled.div`
margin:10px;
border-radius:10px;
background:rgb(0, 61, 77);
padding:10px;
align-items: center;
text-align:center;
flex: 0 0 33.333333%;
   background: rgb(0, 61, 77);
   margin: 10px;
   width:18rem;
   @media (max-width:812px){
width:initial;
    }  

`

interface Props {
  title: string
  description: string
  actions: any
  date: string
  deployPage: string
  githubPage: string
}



// https://jsmanifest.com/build-reusable-responsive-react-card-with-styled-components/
const Card: React.FC<Props> = (props) => {

  return (
    <div >
      <Container>
        <Title>{props.title}</Title>
        <Description>
          {props.description}
        </Description>
        <Date>{props.date}</Date>
        <Actions>
          <ActionButton onClick={(e) => { window.open(props.githubPage); }}> <FontAwesomeIcon icon={faGithub} /></ActionButton>
          <ActionButton onClick={(e) => { 
            console.log(props.deployPage)
            if (props.deployPage==undefined){
              alert('for now only github page')
              return;
            }
            window.open(props.deployPage); }}><FontAwesomeIcon icon={faInternetExplorer} /></ActionButton>
        </Actions>
      </Container>

    </div>)
}

export { Card }