import React, { useEffect, useState } from 'react';
import * as sc from './Navbar.styles';
import Typist from 'react-typist';
import { Phone, GitHub, Email } from '@material-ui/icons';
import { List, ListItemButton, ListItemText } from '@mui/material'


function Navbar(props) {

  const [count, setCount] = useState(1);


  useEffect(() => {
    setCount(1);
  }, [count]);


  return <sc.NavbarContainer>
    <h1>Richard Ho</h1>
    {count ? (
      <Typist avgTypingDelay={80} onTypingDone={() => setCount(0)}>
        <span>Full Stack Developer.</span>
        <Typist.Backspace count={21} delay={400} />
        <span>Front End Developer.</span>
        <Typist.Backspace count={20} delay={400} />
        <span>Back End Developer.</span>
        <Typist.Backspace count={19} delay={400} />
      </Typist>) : ("")}
    <div>
      <Phone></Phone>
      <span>778-938-2588 </span>
      <Email></Email>
      <span>rho1207@hotmail.com</span>
      <br></br>
      <GitHub></GitHub>
      <a href="https://github.com/rho1207">rho1207</a>
    </div>
    <List>
      <ListItemButton onClick={() => props.setSelected("About")}>
        <ListItemText>About</ListItemText>
      </ListItemButton>
      <ListItemButton onClick={() => props.setSelected("Projects")}>
        <ListItemText>Projects</ListItemText>
      </ListItemButton>
      <ListItemButton onClick={() => props.setSelected("Resume")}>
        <ListItemText>Resume</ListItemText>
      </ListItemButton>
    </List>
  </sc.NavbarContainer>;
}

export default Navbar;
