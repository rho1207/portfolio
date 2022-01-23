import React from "react";
import IconButton from '@mui/material/IconButton';
import { ArrowBack } from "@material-ui/icons";

function ProjectCard(props) {

    const createDemoLink = () => {
        if (props.link !== "") return <a href={props.link}>Demo</a>;
        else return;
    }

    const createGithubLink = () => {
        if (props.link !== "") return <a href={props.github}>Github</a>;
        else return;
    }

    return <div>
        <IconButton onClick={() => { props.back() }}>
            <ArrowBack></ArrowBack>
        </IconButton>
        <h1>{props.title}</h1>
        <br></br>
        {createDemoLink()}
        <br></br>
        {createGithubLink()}
        <br></br>
        <p>{props.desc}</p>
        <br></br>
        <p>Technologies: {props.tech}</p>
    </div>;
}

export default ProjectCard;
