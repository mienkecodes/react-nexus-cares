import { useParams } from "react-router-dom";
import useProject from "../hooks/use-project";
import "./ProjectPage.css"; // Import the CSS file
import React from "react";



function ProjectPage() {
    // Here we use a hook that comes for free in react router called `useParams`to get the id from the URL so that we can pass it to our useProject hook.+   
    const { id } = useParams();
    // useProject returns three pieces of info, so we need to grab them all here
    const { project, isLoading, error } = useProject(id);
    // When you think about it, we really want three versions of this page.One that displays while we are waiting for the API to respond, that let's the userknow "be patient, we are working on it".One that displays the project data when we get it.        <div>            <h2>{project.title}</h2>            <h3>Created at: {project.date_created}</h3>            <h3>{`Status: ${project.is_open}`}</h3>            <h3>Pledges:</h3>            <ul>                {project.pledges.map((pledgeData, key) => {                    return (                        <li key={key}>                            {pledgeData.amount} from {pledgeData.supporter}                        </li>                    );                })}            </ul>        </div>    );}export default ProjectPage;
    // One that tells us what went wrong if the API gives us an error instead of someproject data.    console.log(isLoading)
    if (isLoading) {
        return (<p>loading...</p>)
    }
    
    if (error) {
        return (<p>{error.message}</p>)
    }


    return (
        <div>
            <h2>{project.title}</h2>       
            <h3>Created at: {project.date_created}</h3>          
            <h3>{`Status: ${project.is_open}`}</h3>
            <h3>Pledges:</h3>
            <ul>        
                {project.pledges.map((pledgeData, key) => {
                    return (
                        <li key={key}>
                            {pledgeData.amount} from {pledgeData.supporter}
                        </li>
                    );
                })}
            </ul>
        </div>

    );
}
                        
export default ProjectPage;
