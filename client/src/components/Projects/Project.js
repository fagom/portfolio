import React, { Component } from "react";
import axios from "axios";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

export default class Projects extends Component {
  state = { loading: true, data: [] };

  async componentDidMount() {
    const res = await axios.get(`${process.env.APIURL}/api/projects`);

    if (res.status) {
      this.setState({
        data: res.data,
        loading: false,
      });
    }
  }

  render() {
    if (this.state.loading) {
      return <div></div>;
    }
    return (
      <div>
        <h2>Projects</h2>
        <Grid container>
          <Grid item xs={12} md={5} style={{ margin: "10px" }}>
            {this.state.data.map((item, index) => {
              if (index % 2 === 0) {
                return (
                  <Card key={index} elevation={10}>
                    <CardContent>
                      <Typography
                        componen="h6"
                        variant="h6"
                        style={{ fontWeight: "bold" }}
                      >
                        {item.title}{" "}
                      </Typography>
                      <Typography>
                        Status:{" "}
                        {item.status === "Live" ? (
                          <b style={{ fontSize: "14px", color: "green" }}>
                            {item.status}
                          </b>
                        ) : (
                          <b style={{ fontSize: "12px", color: "black" }}>
                            {item.status}
                          </b>
                        )}
                      </Typography>
                    </CardContent>
                    <CardContent
                      style={{ paddingTop: "0px", marginTop: "0px" }}
                    >
                      {item.description}
                    </CardContent>
                    <CardContent
                      style={{ paddingTop: "0px", marginTop: "0px" }}
                    >
                      <a
                        href={item.githubURL}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          textDecoration: "none",
                          color: "#388E3C",
                          fontWeight: "bold",
                          display: "inline-block",
                        }}
                      >
                        Github repo
                        <OpenInNewIcon
                          style={{
                            display: "inline-block",
                            float: "left",
                            fontSize: "17px",
                          }}
                        />
                      </a>
                      {item.websiteURL === "null" ? (
                        ""
                      ) : (
                        <a
                          href={item.websiteURL}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            textDecoration: "none",
                            color: "#388E3C",
                            fontWeight: "bold",
                            display: "inline-block",
                            marginLeft: "10px",
                          }}
                        >
                          Website
                          <OpenInNewIcon
                            style={{
                              display: "inline-block",
                              float: "left",
                              fontSize: "17px",
                            }}
                          />
                        </a>
                      )}
                    </CardContent>
                  </Card>
                );
              }
              return null;
            })}
          </Grid>
          <Grid item xs={12} md={5} style={{ margin: "10px" }}>
            {this.state.data.map((item, index) => {
              if (index % 2 === 1) {
                return (
                  <Card key={index} elevation={10}>
                    <CardContent>
                      <Typography
                        componen="h6"
                        variant="h6"
                        style={{ fontWeight: "bold" }}
                      >
                        {item.title}{" "}
                        {item.status === "Live" ? (
                          <b style={{ fontSize: "14px", color: "green" }}>
                            {item.status}
                          </b>
                        ) : (
                          <b style={{ fontSize: "12px", color: "black" }}>
                            {item.status}
                          </b>
                        )}
                      </Typography>
                    </CardContent>
                    <CardContent
                      style={{ paddingTop: "0px", marginTop: "0px" }}
                    >
                      {item.description}
                    </CardContent>
                    <CardContent>
                      <a
                        href={item.githubURL}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          textDecoration: "none",
                          color: "#388E3C",
                          fontWeight: "bold",
                        }}
                      >
                        View Github repo
                      </a>
                    </CardContent>
                  </Card>
                );
              }
              return null;
            })}
          </Grid>
        </Grid>
      </div>
    );
  }
}
