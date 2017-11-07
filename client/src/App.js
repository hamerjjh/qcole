import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import axios from "axios"
import SplashPage from "./components/SplashPage"
import GalleryPage from "./components/GalleryPage"
import NavBar from "./components/NavBar"
import CommissionPage from "./components/CommissionPage"
import Picture from "./components/Picture"


class App extends Component {

  state = {
    pictures: []
  }

  async componentWillMount() {
    try {
      const response = await axios.get("/api/pictures")
      this.setState({pictures: response.data})

    }catch(error) {
      console.log(error)
    } 
  }

  render() {
    const GalleryPageComponent = () => (<GalleryPage pictures={this.state.pictures} />)
      return (
          <Router>
              <div className="App">

                  <div>
              
                      <div>
                          <NavBar/>
                      </div>
                  </div>
                <Switch>
                  <Route exact path="/" component={SplashPage}/>
                  <Route exact path="/gallery" component={GalleryPageComponent}/>
                  <Route exact path="/gallery/:id" component={Picture}/>
                  <Route exact path="/commission" component={CommissionPage}/>
                </Switch>
              </div>
          </Router>
      );
  }
}

export default App;
