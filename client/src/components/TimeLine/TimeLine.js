import React, { Component } from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import { Container, Typography } from "@material-ui/core";

export default class TimeLineDetails extends Component {
  render() {
    return (
      <div>
        <div className="profile__parent__div">
          <h2>Career TimeLine</h2>
        </div>
        <Timeline align="alternate">
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography color="textSecondary">2020</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography>
                • Involved in Requirements Gathering for enhancements and
                development of User Interfaces based on Customer Requirements•
                Involved in Requirements Gathering for enhancements and
                development of User Interfaces based on Customer Requirements•
                Involved in Requirements Gathering for enhancements and
                development of User Interfaces based on Customer Requirements•
                Involved in Requirements Gathering for enhancements and
                development of User Interfaces based on Customer Requirements •
                Involved in Requirements Gathering for enhancements and
                development of User Interfaces based on Customer Requirements•
                Involved in Requirements Gathering for enhancements and
                development of User Interfaces based on Customer Requirements
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography color="textSecondary">2020</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography>
                • Involved in Requirements Gathering for enhancements and
                development of User Interfaces based on Customer Requirements•
                Involved in Requirements Gathering for enhancements and
                development of User Interfaces based on Customer Requirements•
                Involved in Requirements Gathering for enhancements and
                development of User Interfaces based on Customer Requirements•
                Involved in Requirements Gathering for enhancements and
                development of User Interfaces based on Customer Requirements •
                Involved in Requirements Gathering for enhancements and
                development of User Interfaces based on Customer Requirements•
                Involved in Requirements Gathering for enhancements and
                development of User Interfaces based on Customer Requirements
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    );
  }
}
