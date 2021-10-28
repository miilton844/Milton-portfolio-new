import axios from "axios";
// import firebase from "firebase/app";
import "firebase/auth";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


const port = 3001;
const BASE_API = `http://localhost:${port}`;

const firebaseConfig = {
	apiKey: "AIzaSyDc6wXsrzKwZv0T3jeZOlP1dfdMI7YihU8",
	authDomain: "portfolio-41f96.firebaseapp.com",
	projectId: "portfolio-41f96",
	storageBucket: "portfolio-41f96.appspot.com",
	messagingSenderId: "396813287308",
	appId: "1:396813287308:web:78854112eeaffbd89c60a9",
	measurementId: "G-V2ST5WXWD5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



const GetProjectsDetails = async (id, token) => {
	let projectsInfo = [];
	const projectsCol = collection(db, 'projects');
	const projectSnapShot = await getDocs(projectsCol);
	const projectsList = projectSnapShot.docs.map(doc => {
		projectsInfo.push(doc.data())
		projectsInfo[projectsInfo.length - 1].id = doc.id
	})
	return projectsInfo;
};

const fetchInfoFromGithub = async () => {
	let data;
	await axios.get('https://api.github.com/users/miilton844/repos')
		.then((response) => {
			data = response.data;
		});

	return data;

}

const fetchProjectsFromFirebase = async () => {
	let data;
	await axios.get(BASE_API + '/projects/list')
		.then((response) => {
			data = response.data.data
		})
		return data;
}

export const projectsService = {
	GetProjectsDetails,
	fetchInfoFromGithub,
	fetchProjectsFromFirebase
}