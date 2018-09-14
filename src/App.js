import React, { Component } from "react";
import "./App.css";
import Input from "./components/Input";
import Button from "./components/Button";
import SearchResult from "./components/SearchResult/SearchResult";

class App extends Component {
  state = {
    title: "DK Lunch",
    heading: "Deltagare",
    h3: "Search TV-Shows",
    buttons: { title: "Change title", person: "Add person", search: "Search" },
    inputs: { title: "abc", person: "Jonathan", search: "" },
    people: [],
    results: [],
    fetched: false
  };

  handleInput = ({ target: { value, name } }) =>
    this.setState(prevState => ({
      inputs: {
        ...prevState.inputs,
        [name]: value
      }
    }));

  changeTitle = () =>
    this.setState(prevState => ({ title: prevState.inputs.title }));

  addPerson = () =>
    this.setState(prevState => ({
      people: [...prevState.people, prevState.inputs.person]
    }));

  fetchData = () =>
    fetch(
      `http://api.tvmaze.com/search/shows?q=${this.state.inputs.search}`
    ).then(response =>
      response
        .json()
        .then(data => this.setState({ results: data, fetched: true }))
    );

  render() {
    console.log(this.state);

    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <Input
          onChange={this.handleInput}
          value={this.state.inputs.title}
          name="title"
        />
        <Button onClick={this.changeTitle} text={this.state.buttons.title} />
        <h2>{this.state.heading}</h2>
        <Input
          onChange={this.handleInput}
          value={this.state.inputs.person}
          name="person"
        />
        <Button onClick={this.addPerson} text={this.state.buttons.person} />
        {this.state.people.map((person, iteration) => (
          <p key={iteration}>{person}</p>
        ))}
        <h1>{this.state.h3}</h1>
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
