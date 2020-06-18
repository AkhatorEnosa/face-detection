import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Register from './components/Register/Register';
import Signin from './components/Signin/Signin';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import Form from './components/Form/Form';
import Image from './components/Image/Image';
import "./App.css";

const particleOptions = {
    particles: {
          number: {
              value: 50
          },
          size: {
              value: 3
          },
      },
      interactivity: {
          events: {
              onhover: {
                  enable: true,
                  mode: 'grab'
              }
          }
      }
}

const app = new Clarifai.App({
 apiKey: '24a488c715dc4f319a7465a0314a6dbc'
});

class App extends Component { 
  constructor(){
    super()

    this.state = {
      input : '',
      imageUrl: '',
      box: {},
      route: 'signin'
    }
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value })
  }

  calculateFacePosition = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('input-image');
    const imgWidth = Number(image.width);
    const imgHeight = Number(image.height);

    return {
      leftCol: clarifaiFace.left_col * imgWidth,
      topRow: clarifaiFace.top_row * imgHeight,
      rightCol: imgWidth - (clarifaiFace.right_col * imgWidth),
      bottomRow: imgHeight - (clarifaiFace.right_col * imgHeight)
    }
  }

  displayFacebox = (box) => {

    console.log(box);
    this.setState({ box: box });
  }

  onSubmit = () => {
    this.setState({ imageUrl: this.state.input });

    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL, 
        this.state.input)
      .then(response =>  this.displayFacebox(this.calculateFacePosition(response)))
      .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
      this.setState({ route: route})
  }

  render() {
    const { route, box } = this.state;
    return(
        <div className = 'App'>
          <Particles  className= "particles" params={particleOptions}/>
          {route === 'home'
            ? <React.Fragment> 
                <Navigation  onRouteChange = {this.onRouteChange}/>
                <Logo />
                <Rank />
                <Form 
                  onInputChange = {this.onInputChange}
                  onSubmit = {this.onSubmit}
                />
                <Image box= {box} imageUrl = {this.state.imageUrl}/>
              </React.Fragment>
              : route === 'signin' ?
                <Signin onRouteChange = {this.onRouteChange}/> :
                <Register onRouteChange = {this.onRouteChange}/>
            
        }
        </div>
    ) 
  } 
}

export default App; 