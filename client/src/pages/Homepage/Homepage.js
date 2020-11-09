import React, { Component } from "react";
import ProfileDetails from "../../components/ProfileDetails/ProfileDetails";
import TimeLineDetails from "../../components/TimeLine/TimeLine";
export default class Homepage extends Component {
  render() {
    return (
      <div>
        <ProfileDetails />
        <TimeLineDetails />
      </div>
    );
  }
}
