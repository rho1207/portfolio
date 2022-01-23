import { React, useState } from 'react';
import { List, ListItemButton, ListItemText } from '@mui/material'
import ProjectCard from './ProjectCard';
import * as sc from './ProjectPage.styles'

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
                return <sc.list dense>
                    <sc.listButton alignItems="flex-start" onClick={() => { setProject("portfolio") }}>
                        <sc.buttonYear>2022</sc.buttonYear>
                        <sc.buttonTitle primary="Portfolio Website" secondary="You're already here!"></sc.buttonTitle>
                    </sc.listButton>
                    <sc.listButton alignItems="flex-start" onClick={() => { setProject("aeresgen") }}>
                        <sc.buttonYear>2021</sc.buttonYear>
                        <sc.buttonTitle primary="Associated Engineering Resume Generator" secondary="AE Web app to help project admins create proposals to bid on projects"></sc.buttonTitle>
                    </sc.listButton>
                    <sc.listButton alignItems="flex-start" onClick={() => { setProject("trippo") }}>
                        <sc.buttonYear>2021</sc.buttonYear>
                        <sc.buttonTitle primary="Trippo" secondary="Web application to help users create and manage travel itineraries"></sc.buttonTitle>
                    </sc.listButton>
                    <sc.listButton alignItems="flex-start" onClick={() => { setProject("courses") }}>
                        <sc.buttonYear>2021</sc.buttonYear>
                        <sc.buttonTitle primary="UBC Course Data Visualization" secondary="Allows users to query UBC campus data"></sc.buttonTitle>
                    </sc.listButton>
                    <sc.listButton alignItems="flex-start" onClick={() => { setProject("vet") }}>
                        <sc.buttonYear>2020</sc.buttonYear>
                        <sc.buttonTitle primary="Veterinarian Database Project" secondary="Full stack application providing essential information on zoo animals and their caretakers"></sc.buttonTitle>
                    </sc.listButton>
                    <sc.listButton alignItems="flex-start" onClick={() => { setProject("tft") }}>
                        <sc.buttonYear>2019</sc.buttonYear>
                        <sc.buttonTitle primary="TFT Queries" secondary=""></sc.buttonTitle>
                    </sc.listButton>
                    <sc.listButton alignItems="flex-start" onClick={() => { setProject("snake") }}>
                        <sc.buttonYear>2019</sc.buttonYear>
                        <sc.buttonTitle primary="Snake Game" secondary="The classic snake game implemented in Haskell"></sc.buttonTitle>
                    </sc.listButton>
                </sc.list>;
        }
    }

    return <div>
        <span>Projects</span>
        {paneSelector()}
    </div>;
}

export default ProjectPage;
