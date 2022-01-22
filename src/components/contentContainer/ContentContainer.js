import React from 'react';
import ProjectPage from './PageContent/ProjectPage';
import AboutPage from './PageContent/AboutPage';
import * as sc from './ContentContainer.styles'

function ContentContainer(props) {

    const selectPage = () => {
        if (props.selected === "About") return <AboutPage></AboutPage>
        if (props.selected === "Projects") return <ProjectPage></ProjectPage>
    }
    return <sc.container>
        {selectPage()}
    </sc.container>;
}

export default ContentContainer;
