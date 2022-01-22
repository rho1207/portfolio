import React from 'react';
import ProjectPage from './PageContent/ProjectPage';
import AboutPage from './PageContent/AboutPage';
import ResumePage from './PageContent/ResumePage';
import * as sc from './ContentContainer.styles'

function ContentContainer(props) {

    const selectPage = () => {
        if (props.selected === "About") return <AboutPage></AboutPage>
        if (props.selected === "Projects") return <ProjectPage></ProjectPage>
        if (props.selected === "Resume") return <ResumePage></ResumePage>
    }
    return <sc.container>
        {selectPage()}
    </sc.container>;
}

export default ContentContainer;
