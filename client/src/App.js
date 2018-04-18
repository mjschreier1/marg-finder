import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main/Main";
import Modal from './components/Modal/Modal';

class App extends Component {
  state = {
    establishments: [],
    userLocation: {
      lat: 39.7575861,
      lng: -105.00684869999999
    },
    showMap: false,
    showModal: false
  };

  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position);
      this.setState({
        userLocation: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      });
    });
  };

  dev = window.location.href.includes("localhost");
  local = "http://localhost:3000/v1/";
  heroku = "https://marg-finder.herokuapp.com/v1/";

  findRandomMargs = () => {
    let url = this.dev ? this.local : this.heroku;
    url =
      url +
      "establishments/random/" +
      this.state.userLocation.lng +
      "/" +
      this.state.userLocation.lat;

    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          establishments: data,
          showMap: true
        });
      });
  };

  toggleModalHandler = i => {
    console.log(i);
    let { showModal } = this.state;
    showModal = !showModal;
    this.setState({
      showModal
    });
    this.renderModals(i);
  };

  modal = "";

  renderModals = i => {
    this.modal = <Modal toggle={this.toggleModalHandler} place={this.state.establishments[i]} />;
  };

  appDimensions = {
    height: "100vh",
    width: "100vw"
  }

  render() {
    return (
      <div style={this.appDimensions}>
        <Header />
        <Main
          establishments={this.state.establishments}
          findRandomButton={this.findRandomMargs}
          userLocation={this.state.userLocation}
          showMap={this.state.showMap}
          toggleModal={this.toggleModalHandler}
        />
        {this.state.showModal && this.modal}
      </div>
    );
  }
}

export default App;
