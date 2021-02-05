import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import React, { Component } from "react";
import ProfileDetails from "../../components/ProfileDetails/ProfileDetails";
import Projects from "../../components/Projects/Project";
import Skills from "../../components/Skills/Skill";
import TimeLineDetails from "../../components/TimeLine/TimeLine";
export default class Homepage extends Component {
  render() {
    return (
      <div>
        <AppBar
          elevation={0.2}
          style={{ backgroundColor: "black", color: "black" }}
        >
          <Toolbar>
            <Typography
              style={{ color: "white", fontWeight: "bold", fontSize: "20px" }}
            >
              Carpe diem
            </Typography>
          </Toolbar>
        </AppBar>
        <Container style={{ marginTop: "70px" }}>
          <ProfileDetails />
          <TimeLineDetails />
          <Projects />
          <Skills />
        </Container>
      </div>
    );
  }
}
