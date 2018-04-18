import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main/Main";
import Modal from "./components/Modal/Modal";

class App extends Component {
  state = {
    establishments: [],
    userLocation: {
      lat: 39.7575861,
      lng: -105.00684869999999
    },
    showMap: false,
    showModal: false,
    sortedByDistance: true
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
        data.sort(function(a, b){
          return a.distance > b.distance;
        });
        this.setState({
          establishments: data,
          showMap: true,
          sortedByDistance: true,
        });
      });
  };

  toggleShowMap = () => {
    this.setState({
      showMap: !this.state.showMap
    })
  }

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
    this.modal = (
      <Modal place={this.state.establishments[i]} rateMargs={this.rateMargs} toggle={this.toggleModalHandler} />
    );
  };


  appDimensions = {
    height: "100vh",
    width: "100vw"
  }

  rateMargs = (id, rating) => {
    console.log("id", id);
    console.log("rating", rating);
    let url = this.dev ? this.local : this.heroku;
    url = url + "ratings/" + id;
    fetch(url, { method: "post",
      headers: {"Content-Type": "application/json"}, 
      body: JSON.stringify({ rating: rating }) })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => { console.error(error) })
    let establishments = this.state.establishments;
    establishments.forEach(establishment => {
      if(establishment.id === id && establishment.avgRating === null) { establishment.avgRating = rating } 
    })
    this.setState({
      establishments
    })
  };

  toggleSort = () => {
      let sortData = this.state.establishments
      this.state.sortedByDistance ?
      sortData.sort(function(a, b){
        return a.avgRating < b.avgRating;
      })
      :
      sortData.sort(function(a, b){
        return a.distance > b.distance;
      })
      let sortedByDistance = !this.state.sortedByDistance
      this.setState({establishments:sortData, sortedByDistance: sortedByDistance})

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
          toggleSort={this.toggleSort}
          sortedByDistance={this.state.sortedByDistance}
          toggleShowMap={this.toggleShowMap}
        />
        {this.state.showModal && this.modal}
      </div>
    );
  }
}

export default App;
