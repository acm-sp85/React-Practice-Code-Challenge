import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!

const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    allSushi: [],
    sushiOnDisplay: [],
    eatenSushi: [],
    money: 100,
  };
  componentDidMount() {
    fetch(API)
      .then((results) => results.json())
      .then((allSushi) => {
        this.setState({ allSushi });
        this.setState({
          sushiOnDisplay: [
            this.state.allSushi[0],
            this.state.allSushi[1],
            this.state.allSushi[2],
            this.state.allSushi[3],
          ],
        });
      });
  }

  nextFourItems = (lastItemId) => {
    this.setState({
      sushiOnDisplay: [
        this.state.allSushi[lastItemId.id],
        this.state.allSushi[lastItemId.id + 1],
        this.state.allSushi[lastItemId.id + 2],
        this.state.allSushi[lastItemId.id + 3],
      ],
    });
  };

  eatSushi = (event) => {
    event.preventDefault();
    const poolOfSushi = this.state.allSushi;
    const findId = event.target.id;
    const justEaten = poolOfSushi.find((sushi) => sushi.id == findId);
    poolOfSushi.map((sushi) => {
      sushi.id == findId ? (sushi.eaten = true) : (sushi.eaten = false);
    });

    let cash = Number(this.state.money);
    let updatedCash = cash - (justEaten === undefined ? 0 : justEaten.price);
    updatedCash >= 0 && justEaten != undefined
      ? this.setState({
          eatenSushi: [...this.state.eatenSushi, justEaten],
          money: updatedCash,
        })
      : console.log("can't");
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushi={this.state.sushiOnDisplay}
          nextFourItems={this.nextFourItems}
          eatSushi={this.eatSushi}
        />
        <Table plates={this.state.eatenSushi} money={this.state.money} />
      </div>
    );
  }
}

export default App;
