import React from "react";
import ReactDOM from "react-dom";
import DisplaySeason from "./DisplaySeason";
import "./style.css";

// geolakatsiya bilan sihlash
class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ err: err.message })
    );
  }

  // componentDidUpdate() {} //
  getLocation() {
    if (this.state.lat == null && this.state.errorMessage == "") {
      console.log(this.state.lat);
      return <div>Loading...</div>;
    }
    if (this.state.lat !== null && this.state.errorMessage == "") {
      return <div>Latitute : {this.state.lat}</div>;
    }
    if (this.state.errorMessage !== "") {
      <div>Error : {this.state.errorMessage}</div>;
    }
  }

  render() {
    return (
      <DisplaySeason lat={this.state.lat} error={this.state.errorMessage} />
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
