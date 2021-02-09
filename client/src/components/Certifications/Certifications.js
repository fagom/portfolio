import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import React, { Component } from "react";
import axios from "axios";

export default class Certifications extends Component {
  state = { loading: true, data: [] };

  async componentDidMount() {
    const res = await axios.get(`/api/getcertifications`);

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
        <h2>Certifications / Courses</h2>
        <Grid container>
          <Grid item xs={12} md={5} style={{ margin: "10px" }}>
            {this.state.data.map((item, index) => {
              if (index % 2 === 0) {
                return (
                  <Card
                    key={index}
                    elevation={0}
                    style={{ backgroundColor: "#CEF3D2" }}
                  >
                    <CardContent>
                      <Typography
                        componen="h6"
                        variant="h6"
                        style={{
                          fontWeight: "bold",
                          color: "#28A434",
                          fontSize: "17px",
                        }}
                      >
                        {item.name}
                      </Typography>
                      <Typography style={{ fontSize: "14px" }}>
                        Provider: {item.provider}
                      </Typography>
                      <a
                        style={{
                          textDecoration: "none",
                          color: "#28A434",
                          fontSize: "12px",
                          paddingTop: "10px",
                          fontWeight: "900",
                        }}
                        href={item.CertificateLink}
                        rel="noreferrer"
                        target="_blank"
                      >
                        Certificate Link
                      </a>
                    </CardContent>
                  </Card>
                );
                return null;
              }
            })}
          </Grid>
          <Grid item xs={12} md={5} style={{ margin: "10px" }}>
            {this.state.data.map((item, index) => {
              if (index % 2 === 1) {
                return (
                  <Card
                    key={index}
                    elevation={0}
                    style={{ backgroundColor: "#CEF3D2" }}
                  >
                    <CardContent>
                      <Typography
                        componen="h6"
                        variant="h6"
                        style={{
                          fontWeight: "bold",
                          color: "#28A434",
                          fontSize: "17px",
                        }}
                      >
                        {item.name}
                      </Typography>
                      <Typography style={{ fontSize: "14px" }}>
                        Provider: {item.provider}
                      </Typography>
                      <a
                        style={{
                          textDecoration: "none",
                          color: "#28A434",
                          fontSize: "12px",
                          paddingTop: "10px",
                          fontWeight: "900",
                        }}
                        href={item.CertificateLink}
                        rel="noreferrer"
                        target="_blank"
                      >
                        Certificate Link
                      </a>
                    </CardContent>
                  </Card>
                );
                return null;
              }
            })}
          </Grid>
        </Grid>
      </div>
    );
  }
}
