import styled from "styled-components"
import { faInternetExplorer } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "../Card/Card";
import { projectsService } from "../../services/projects"
import { useEffect, useState } from "react"
import axios from "axios";
import { GithubAuthProvider } from "@firebase/auth";

const ProjectsContainer = styled.div`

background: ${props => props.theme.aboutBodyInfo};
padding-left:1rem;
padding-right:1rem;
padding-top:1rem;
padding-bottom:1rem;
flex-direction:row; 
display: flex;
flex-wrap: wrap;
justify-content: center;
flex: 0 0 200px; /* play with this number */
align-items:center;
margin-top:-1px;


@media (max-width:812px){
flex-direction:column;
}  
`

interface Props {
  theme: string
}


const Projects: React.FC<Props> = (props) => {
  const [projectsInfo, setProjectsInfo] = useState([]);

  useEffect(() => {

    (async () => {
      let projectsFromAPI: any = await projectsService.GetProjectsDetails();
      let dataFromGit: any = await projectsService.fetchInfoFromGithub();
      projectsFromAPI.sort((item1: any, item2: any) => { return item1.id - item2.id })
      dataFromGit.sort((item1: any, item2: any) => { return item1.id - item2.id });

      for (let i = 0; i < projectsFromAPI.length; i++) {
        projectsFromAPI[i].github = dataFromGit[i].html_url;
      }

      console.log(projectsFromAPI)
      setProjectsInfo(projectsFromAPI)
    })();
  }, [])


  const buttons = [
    {
      key: 1,
      label: (
        <>
          <FontAwesomeIcon icon={faGithub} />
        </>
      ),
    },
    {
      key: 2,
      label: (
        <>
          <FontAwesomeIcon icon={faInternetExplorer} />
        </>
      ),
    },

  ]



  return (
    <div>
      <ProjectsContainer id="projects">
        {projectsInfo.map((item: any) => (
          <Card
            key={item.id}
            title={item.projectName}
            date={item.date}
            description={item.description}
            deployPage={item.deploy}
            githubPage={item.github}
            actions={buttons}
            theme={props.theme}
          />
        ))}

      </ProjectsContainer>
    </div>
  )
}

export { Projects }

