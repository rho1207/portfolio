import React from "react";
import IconButton from '@mui/material/IconButton';
import { ArrowBack } from "@material-ui/icons";

function ProjectCard(props) {
    return <div>
        <IconButton onClick={() => { props.back() }}>
            <ArrowBack></ArrowBack>
        </IconButton>



    </div>;
}

export default ProjectCard;
