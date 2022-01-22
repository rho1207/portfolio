import { React, useState } from 'react';
import { List, ListItemButton, ListItemText, SnackbarContent } from '@mui/material'
import ProjectCard from './ProjectCard';

function ProjectPage() {

    const [projectSelected, setProject] = useState("default");

    const backButton = () => {
        setProject("default");
    }

    const paneSelector = () => {
        switch (projectSelected) {
            case "portfolio":
                return <ProjectCard back={backButton}></ProjectCard>;
            case "aeresgen":
                return <ProjectCard back={backButton}></ProjectCard>;
            case "trippo":
                return <ProjectCard back={backButton}></ProjectCard>;
            case "courses":
                return <ProjectCard back={backButton}></ProjectCard>;
            case "vet":
                return <ProjectCard back={backButton}></ProjectCard>;
            case "tft":
                return <ProjectCard back={backButton}></ProjectCard>;
            case "snake":
                return <ProjectCard back={backButton}></ProjectCard>;
            default:
                return <List>
                    <ListItemButton onClick={() => { setProject("portfolio") }}>
                        <ListItemText>Portfolio Website</ListItemText>
                    </ListItemButton>
                    <ListItemButton onClick={() => { setProject("aeresgen") }}>
                        <ListItemText>Associated Engineering Resume Generator</ListItemText>
                    </ListItemButton>
                    <ListItemButton onClick={() => { setProject("trippo") }}>
                        <ListItemText>Trippo</ListItemText>
                    </ListItemButton>
                    <ListItemButton onClick={() => { setProject("courses") }}>
                        <ListItemText>UBC Course Data Visualization</ListItemText>
                    </ListItemButton>
                    <ListItemButton onClick={() => { setProject("vet") }}>
                        <ListItemText>Veterinarian Database Project</ListItemText>
                    </ListItemButton>
                    <ListItemButton onClick={() => { setProject("tft") }}>
                        <ListItemText>TFT Queries</ListItemText>
                    </ListItemButton>
                    <ListItemButton onClick={() => { setProject("snake") }}>
                        <ListItemText>Snake Game</ListItemText>
                    </ListItemButton>
                </List>;
        }
    }

    return <div>
        <span>Projects</span>
        {paneSelector()}
    </div>;
}

export default ProjectPage;
