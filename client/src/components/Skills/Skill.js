import React, { Component } from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { Container, Grid, Typography } from "@material-ui/core";
import axios from "axios";

export default class Skills extends Component {
  state = { loading: true, data: [] };

  async componentDidMount() {
    const res = await axios.get(`/api/skills`);

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
        <h3>Technical Languanges / Frameworks</h3>
        <Grid container>
          <Grid item xs={12} md={2}>
            {this.state.data.map((item, index) => {
              if (index % 3 === 0) {
                return (
                  <Box component="fieldset" mb={3} key={index}>
                    <Typography component="legend">{item.skillcode}</Typography>
                    <Rating
                      name="customized-empty"
                      style={{ color: "#e53935" }}
                      defaultValue={item.value}
                      precision={0.5}
                      emptyIcon={<StarBorderIcon fontSize="inherit" />}
                      disabled={true}
                    />
                  </Box>
                );
              }
            })}
          </Grid>
          <Grid item xs={12} md={2}>
            {this.state.data.map((item, index) => {
              if (index % 3 === 1) {
                return (
                  <Box component="fieldset" mb={3} key={index}>
                    <Typography component="legend">{item.skillcode}</Typography>
                    <Rating
                      style={{ color: "#e53935" }}
                      name="customized-empty"
                      defaultValue={item.value}
                      value={item.value}
                      precision={0.5}
                      emptyIcon={<StarBorderIcon fontSize="inherit" />}
                      disabled={true}
                    />
                  </Box>
                );
              }
            })}
          </Grid>
          <Grid item xs={12} md={3}>
            {this.state.data.map((item, index) => {
              if (index % 3 === 2) {
                return (
                  <Box component="fieldset" mb={3} key={index}>
                    <Typography component="legend">{item.skillcode}</Typography>
                    <Rating
                      name="customized-empty"
                      style={{ color: "#e53935" }}
                      defaultValue={item.value}
                      precision={0.5}
                      emptyIcon={<StarBorderIcon fontSize="inherit" />}
                      disabled={true}
                    />
                  </Box>
                );
              }
            })}
          </Grid>
        </Grid>
      </div>
    );
  }
}
