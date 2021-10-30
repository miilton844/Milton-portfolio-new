import axios from "axios";

const port = 3001;
const BASE_API = `http://localhost:${port}`;

const fetchInfoFromGithub = async() => {
    let data;
    await axios.get('https://api.github.com/users/miilton844/repos')
        .then((response) => {
            data = response.data;
        });

    return data;

}

const fetchProjectsFromFirebase = async() => {
    let data;
    await axios.get(BASE_API + '/projects/list')
        .then((response) => {
            data = response.data.data
        })
    return data;
}

export const projectsService = {
    fetchInfoFromGithub,
    fetchProjectsFromFirebase
}