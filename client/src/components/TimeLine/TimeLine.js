import React, { Component } from "react";
import axios from "axios";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import { Typography } from "@material-ui/core";

export default class TimeLineDetails extends Component {
  state = { loading: true, data: [] };

  async componentDidMount() {
    const res = await axios.get("http://localhost:5000/api/timeline");

    if (res.status) {
      this.setState({
        data: res.data,
        loading: false,
      });
    }
  }

  render() {
    console.log(this.state.data);
    if (this.state.loading) {
      return <div></div>;
    }
    return (
      <div>
        <div className="profile__parent__div">
          <h2>Career TimeLine</h2>
        </div>
        <Timeline align="alternate">
          {this.state.data.map((item, index) => {
            return (
              <TimelineItem key={index}>
                <TimelineOppositeContent>
                  <Typography
                    color="textSecondary"
                    style={{
                      fontWeight: "bold",
                      color: "black",
                      fontSize: "20px",
                    }}
                  >
                    {item.year}
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography style={{ fontWeight: "bold" }}>
                    {item.title}
                  </Typography>
                  <div>
                    {item.summary.map((sumitem, index1) => {
                      return <div key={index1}>{"- " + sumitem}</div>;
                    })}
                  </div>
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      </div>
    );
  }
}
