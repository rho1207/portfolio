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
    <h1 style={{ fontSize: "30px", fontFamily: "DM Mono, monospace" }}>Richard Ho</h1>
    <img src="profilepic.png" alt="profile" style={{ height: "250px", margin: "none" }} />
    {count ? (
      <Typist avgTypingDelay={80} onTypingDone={() => setCount(0)}>
        <span>Full Stack Developer.</span>
        <Typist.Backspace count={21} delay={400} />
        <span>Front End Developer.</span>
        <Typist.Backspace count={20} delay={400} />
        <span>Back End Developer.</span>
        <Typist.Backspace count={19} delay={400} />
      </Typist>) : ("")}
    <sc.infoDiv>
      <Phone ></Phone>
      <span >778-938-2588 </span>
      <Email></Email>
      <span >rho1207@hotmail.com</span>
      <br></br>
      <GitHub style={{ marginTop: "0.7em" }}></GitHub>
      <a href="https://github.com/rho1207">rho1207</a>
    </sc.infoDiv >
    <List>
      <ListItemButton onClick={() => props.setSelected("About")}>
        <sc.buttonText>About</sc.buttonText>
      </ListItemButton>
      <ListItemButton onClick={() => props.setSelected("Projects")}>
        <sc.buttonText >Projects</sc.buttonText>
      </ListItemButton>
      <ListItemButton component="a" href="https://drive.google.com/file/d/1aKNh4XUhaNhc7WE1xQzczkrqU399YAOW/view?usp=sharing">
        <sc.buttonText>Resume</sc.buttonText>
      </ListItemButton>
    </List>
  </sc.NavbarContainer >;
}

export default Navbar;
