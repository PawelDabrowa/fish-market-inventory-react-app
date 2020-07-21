import React from "react";
import Header from"./Header";
import Inventory from"./Inventory";
import Order from"./Order";
import sampleFishes from '../sample-fishes'
import Fish from "./Fish";

class App extends React.Component {
  state ={
    fishes: {},
    order: {}
  };
  addFish = fish => {
    //1. Take a copy of the exsitin state
    const fishes = { ...this.state.fishes }
    //2. Add our new fish to that fishes 
    fishes[`fish${Date.now()}`] = fish;
    //3. Set the new fishes object to state

    this.setState({
      fishes
    });

  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Pawel" />
          <ul className="fishes" >
           {Object.keys(this.state.fishes).map(key => <p>{key}</p>)}
          </ul>
        </div>
        <Order />
        <Inventory 
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    )
  }
}

export default App;