import React from "react";
import IconButton from '@mui/material/IconButton';
import { ArrowBack } from "@material-ui/icons";

function ProjectCard(props) {

    const createDemoLink = () => {
        if (props.link !== "") return <a href={props.link}>External</a>;
        else return null;
    }

    const createGithubLink = () => {
        if (props.github !== "") return <a href={props.github}>Github</a>;
        else return null;
    }

    return <div>
        <h1 style={{ margin: '0 0', textAlign: 'center', color: '#3266a8' }}>{<IconButton style={{}} onClick={() => { props.back() }}>
            <ArrowBack></ArrowBack>
        </IconButton>}{props.title}</h1>
        <br></br>
        {createGithubLink()}
        {createGithubLink() ? <br></br> : null}
        {createDemoLink()}
        {createDemoLink() ? <br></br> : null}
        <p>{props.desc}</p>
        <p style={{ color: '#3266a8' }}>Technologies: {props.tech}</p>
    </div>;
}

export default ProjectCard;
