import React, { Component } from "react";
import axios from "axios";
import { Avatar, Grid, Typography } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./ProfileDetails.css";

export default class ProfileDetails extends Component {
  state = {
    loading: true,
    fbIconColor: "#3b5998",
    twitterIconColor: "#00acee",
    instaIconColor: "#405de6",
    linkeinIconColor: "#0e76a8",
  };

  async componentDidMount() {
    const res = await axios.get(`${process.env.APIURL}/api/profile`);
    if (res.status) {
      this.setState({
        fullname: res.data.fullname,
        position: res.data.position,
        currcompany: res.data.currcompany,
        city: res.data.city,
        state: res.data.state,
        emailid: res.data.emailid,
        facebookURL: res.data.facebookURL,
        twitterURL: res.data.twitterURL,
        instagramURL: res.data.instagramURL,
        linkedinURL: res.data.linkedinURL,
        profilePic: res.data.profilePic,
        loading: false,
      });
    }
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="profile__parent__div">
          <Typography></Typography>
        </div>
      );
    }
    return (
      <div className="profile__parent__div">
        <Grid container>
          <Grid item xs={12} md={2}>
            <Avatar
              className="profile__avatar"
              alt="SP"
              src={this.state.profilePic}
            ></Avatar>
          </Grid>
          <Grid item xs={12} md={8} className="profile__text">
            <h2>Hey, I am {this.state.fullname}</h2>
            <Typography>
              I am currently based out of {this.state.city},{this.state.state}{" "}
              working @<b>{this.state.currcompany}</b> as {this.state.position}.
            </Typography>
            <Grid container>
              <Grid item xs={12} className="profile__text">
                <Typography
                  style={{
                    color: "green",
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  Connect with me on:
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <a href={this.state.facebookURL} target="_blank">
                  <FacebookIcon
                    style={{
                      color: this.state.fbIconColor,
                      fontSize: "40px",
                      padding: "10px",
                    }}
                  />
                </a>
                <a href={this.state.twitterURL} target="_blank">
                  <TwitterIcon
                    style={{
                      color: this.state.twitterIconColor,
                      fontSize: "40px",
                      padding: "10px",
                    }}
                  />
                </a>
                <a href={this.state.instagramURL} target="_blank">
                  <InstagramIcon
                    style={{
                      color: this.state.instaIconColor,
                      fontSize: "40px",
                      padding: "10px",
                    }}
                  />
                </a>
                <a href={this.state.linkedinURL} target="_blank">
                  <LinkedInIcon
                    style={{
                      color: this.state.linkeinIconColor,
                      fontSize: "40px",
                      padding: "10px",
                    }}
                  />
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
