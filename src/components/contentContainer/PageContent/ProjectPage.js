import { React, useState } from 'react';
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
                return <ProjectCard back={backButton} title="Portfolio Website" link="" github="https://github.com/rho1207/portfolio"
                    desc="Designed and developed my personal website to showcase projects."
                    tech="React.JS, HTML/CSS">
                </ProjectCard>;
            case "aeresgen":
                return <ProjectCard back={backButton} title="Associated Engineering Resume Generator" github="" link=""
                    desc="Worked with AE stakeholders to develop a web app to enable project administrators to easily build proposals for new client work.
                    I implemeneted and tested the backend API routes following the MVC pattern and handled load testing to ensure application stability. 
                    In addition, I assisted with establishing documentation for application by constructing the project plan, 
                    terms of reference, business and technical requirements, system design, testing plan, developer and user manual. 
                    Unfortunately, I am not allowed to show any design or expose any code."
                    tech="C#, .NET, Microsoft SQL Server, NUnit, JMeter, Javascript, React.JS, Redux, Figma, HTML/CSS, Microsoft Azure">
                </ProjectCard>;
            case "trippo":
                return <ProjectCard back={backButton} title="Trippo" link="https://trippoapp.herokuapp.com/" github="https://github.com/rho1207/Trippo"
                    desc="Developed a web application allowing end users to easily create travel itineraries and get suggestions based on user preferences.
                    I was responsible for creating and testing the backend API routes, as well as implementing the home page and the forms used within the application. 
                    In addition, I ensured data integrity throughout the application with 
                    form validation for user inputs in the front-end connected to Mongoose schemas for server-side validation."
                    tech="Typescript, React.JS, Redux (Redux Tool Kit), HTML/CSS, Figma, Node.JS, Express, MongoDB, Heroku">
                </ProjectCard>;
            case "courses":
                return <ProjectCard back={backButton} title="UBC Course Data Visualization" link="" github=""
                    desc="An application that parses 13,000 data entries of UBC buildings, rooms, and courses 
                    and allows users to query for data about the campus. I implemented a JSON parser for queries that searched for the request data.
                    Unfortunately, I am not allowed to show any design or expose any code."
                    tech="Typescript, HTML/CSS, Mocha, Node.JS ">
                </ProjectCard>;
            case "vet":
                return <ProjectCard back={backButton} title="Veterinarian Database Project" link="" github="https://github.com/hobbeskocha/304-M4/tree/master/CPSC304-M4"
                    desc="Developed a scalable full stack application modeling zoo staff and animals in a team of three. I
                    created efficient SQL queries to populate the UI with essential information for staff such as health records for animals 
                    (general traits, vaccinations, examinations, dietary restrictions) and pages containing information about which staff members are assigned to work with each animal.
                    I also helped create the GUI using Java Swing and JavaFX.
                    "
                    tech="Java, JDBC">
                </ProjectCard>;
            case "tft":
                return <ProjectCard back={backButton} title="Teamfight Tactics Queries" link="" github=""
                    desc="Created a natural language processor that answers queries to the game Teamfight Tactics"
                    tech="Prolog">
                </ProjectCard>;
            case "snake":
                return <ProjectCard back={backButton} title="Snake Game" link="" github="https://github.com/rho1207/Snake-Haskell"
                    desc="Created the classic snake game using Haskell displayed on a GUI using Gloss with single-player and 
                    multiplayer options and different difficulties and developed a bot that picks the best directions to move 
                    to eat food and increase score based on its current location, which can also be played against in multiplayer mode"
                    tech="Haskell, Gloss">
                </ProjectCard>;
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
                        <sc.buttonTitle primary="Trippo" secondary="Web application to help users create and manage travel itineraries and receive personalized suggestions"></sc.buttonTitle>
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
                        <sc.buttonTitle primary="TFT Queries" secondary="A NLP that answers queries for information regarding the game Teamfight Tactics"></sc.buttonTitle>
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
