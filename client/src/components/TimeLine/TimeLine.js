import React, { Component } from "react";
import axios from "axios";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
//import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
//import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
//import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import { Card, Typography, CardContent } from "@material-ui/core";

export default class TimeLineDetails extends Component {
  state = { loading: true, data: [] };

  COLORS = ["#c62828", "#673AB7", "#E64A19", "#F57F17", "#0091EA"];

  async componentDidMount() {
    const res = await axios.get(`/api/timeline`);

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
        <div style={{ paddingLeft: "10px" }}>
          <h2>Career Timeline</h2>
        </div>
        <Timeline align="left" style={{ textAlign: "left", padding: "0px" }}>
          {this.state.data.map((item, index) => {
            return (
              <Card
                elevation={0}
                style={{ margin: "5px", padding: "0px",backgroundColor:'#FEEFEC' }}
                key={index}
              >
                <CardContent>
                  <TimelineItem
                    key={index}
                    style={{ textAlign: "left", display: "inline-block" }}
                  >
                    <TimelineOppositeContent
                      style={{ textAlign: "left", width: "50px" }}
                    >
                      <Typography
                        style={{
                          fontWeight: "bold",
                          color: '#D52D0B',
                          fontSize: "20px",
                          width: "50px",
                        }}
                      >
                        {item.year}
                      </Typography>
                    </TimelineOppositeContent>

                    <TimelineContent>
                      <Typography
                        style={{ fontWeight: "bold", color: "#F67251", }}
                      >
                        {item.title}
                      </Typography>
                      <div>
                        {item.summary.map((sumitem, index1) => {
                          return (
                            <div key={index1} style={{ color: "#F67251" }}>
                              {"- " + sumitem}
                            </div>
                          );
                        })}
                      </div>
                    </TimelineContent>
                  </TimelineItem>
                </CardContent>
              </Card>
            );
          })}
        </Timeline>
      </div>
    );
  }
}
