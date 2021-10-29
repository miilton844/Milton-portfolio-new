import styled from "styled-components"
import { faInternetExplorer } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "../Card/Card";
import { projectsService } from "../../services/projects"
import { useEffect, useState } from "react"
import usePagination from "../Pagination/Pagination";
import { Pagination } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import { CardDetails } from '../../interfaces/interfaces'

import "./Projects.css"

const Projects: React.FC<CardDetails> = () => {

  const [projectsInfo, setProjectsInfo] = useState([]);
  const useStyles = makeStyles(() => ({
    ul: {
      "& .MuiPaginationItem-root": {
        color: "black",
        background: "white"
      },
    }
  }));

  const classes = useStyles();

  let [page, setPage] = useState(1);
  const PER_PAGE = 4;

  let count = Math.ceil(projectsInfo.length / PER_PAGE);
  let _DATA = usePagination(projectsInfo, PER_PAGE);


  useEffect(() => {

    (async () => {
      let projectsFromAPI: any = await projectsService.fetchProjectsFromFirebase();
      let dataFromGit: any = await projectsService.fetchInfoFromGithub();
      const intersectedArrays = intersectArrays(projectsFromAPI, dataFromGit)
      projectsFromAPI = intersectedArrays.commonProjectsFromAPI;
      dataFromGit = intersectedArrays.commonDataFromGit;
      projectsFromAPI.sort((item1: any, item2: any) => { return item1.id - item2.id })
      dataFromGit.sort((item1: any, item2: any) => { return item1.id - item2.id });
      for (let i = 0; i < projectsFromAPI.length; i++) {
        projectsFromAPI[i].github = dataFromGit[i].html_url;
      }

      setProjectsInfo(projectsFromAPI)

    })();
  }, []);


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
  ];

  const handleChange = async (e: any, p: any) => {
    setPage(p);
    _DATA.jump(p);
  };

  const intersectArrays = (projectsFromAPI: any[], dataFromGit: any[]) => {
    let commonDataFromGit = [];
    let commonProjectsFromAPI = [];

    for (let i = 0; i < projectsFromAPI.length; i++) {
      for (let j = 0; j < dataFromGit.length; j++) {
        if (projectsFromAPI[i].id === dataFromGit[j].id) {
          commonDataFromGit.push(dataFromGit[j]);
          commonProjectsFromAPI.push(projectsFromAPI[i]);
        }
      }
    }
    return ({
      commonDataFromGit: commonDataFromGit,
      commonProjectsFromAPI: commonProjectsFromAPI
    });
  };

  return (
    <div>
      <PaginationContainer>
        <Pagination
          classes={{ ul: classes.ul }}
          count={count}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
      </PaginationContainer>
      <ProjectsContainer id="projects">
        {_DATA.currentData().map((item: any) => (
          <Card
            key={item.id}
            title={item.projectName}
            date={item.date}
            description={item.description}
            deployPage={item.deploy}
            githubPage={item.github}
            actions={buttons}
          />
        ))}
      </ProjectsContainer>
    </div>
  );
}

export { Projects };

const PaginationContainer = styled.div`
background: ${props => props.theme.aboutBodyInfo};
margin-top:-1px;
align-items: center;
    justify-content: center;
    color:white
`
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


