import React, { Component } from "react";
import "./App.css";
import Input from "./components/Input";
import Button from "./components/Button";
import People from "./components/People";
import SearchResult from "./components/SearchResult/SearchResult";

class App extends Component {
  state = {
    title: "DK Lunch",
    h2: "Deltagare",
    h3: "Search TV-Shows",
    buttons: { title: "Change title", person: "Add person", search: "Search" },
    inputs: { title: "", person: "", search: "" },
    people: [],
    results: [],
    fetched: false
  };

  handleInput = ({ target: { value, name } }) =>
    this.setState(({ inputs }) => ({
      inputs: {
        ...inputs,
        [name]: value
      }
    }));

  changeTitle = () => this.setState(({ inputs: { title } }) => ({ title }));

  addPerson = () =>
    this.setState(({ people, inputs: { person } }) => ({
      people: [...people, person]
    }));

  fetchData = () =>
    fetch(`http://api.tvmaze.com/search/shows?q=${this.state.inputs.search}`)
      .then(response => response.json()
        .then(data => this.setState({ results: data, fetched: true }))
      );

  render() {
    console.log(this.state);

    return (
      <div className="App">
        {/* Change title */}
        <h1>{this.state.title}</h1>
        <Input
          onChange={this.handleInput}
          value={this.state.inputs.title}
          name="title"
        />
        <Button onClick={this.changeTitle} text={this.state.buttons.title} />

        {/* List of people */}
        <h2>{this.state.h2}</h2>
        <Input
          onChange={this.handleInput}
          value={this.state.inputs.person}
          name="person"
        />
        <Button onClick={this.addPerson} text={this.state.buttons.person} />
        <People people={this.state.people} />

        {/* Search tv shows */}
        <h3>{this.state.h3}</h3>
        <Input
          onChange={this.handleInput}
          value={this.state.inputs.search}
          name="search"
        />
        <Button onClick={this.fetchData} text={this.state.buttons.search} />
        <SearchResult
          results={this.state.results}
          fetched={this.state.fetched}
        />
      </div>
    );
  }
}

export default App;
