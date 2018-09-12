import React, { Component } from "react";
// import logo from "./logo.svg";
import Button from "./components/Button";
import Input from "./components/Input";
import Result from "./components/Result";
import "./App.css";

class App extends Component {
  state = {
    title: "DK Lunch",
    name: ["Jonathan", "Jenny", "Louise"],
    input: {
      title: "",
      atendee: "",
      show: ""
    },
    result: []
  };

  updateInput = ({ value, field }) =>
    this.setState(prevState => ({
      input: { ...prevState.input, [field]: value }
    }));

  changeTitle = () =>
    this.setState(prevState => ({ title: prevState.input.title }));

  addAtendee = () =>
    this.setState(prevState => ({
      people: [...prevState.people, prevState.input.atendee],
      input: { ...prevState.input, atendee: "" }
    }));

  getData = () =>
    fetch(`http://api.tvmaze.com/search/shows?q=${this.state.input.show}`).then(
      data => data.json().then(result => this.setState({ result }))
    );

  // componentDidMount() {
  //   console.log("mounted");
  //   setTimeout(() => this.setState({ title: "HEJHEJ" }), 3000);
  // }

  render() {
    console.log(this.state);

    return (
      <div className="DK">
        <h1>{this.state.title}</h1>
        <Input
          value={this.state.input.show}
          onChange={this.updateInput}
          field="show"
        />
        <Button onClick={this.getData} title="Search" />
        <Result result={this.state.result} />
        {/* {this.state.result.length > 0 ? (
          <div>
            <p>{this.state.result[0].show.name}</p>
            <img src={this.state.result[0].show.image.medium} />
          </div>
        ) : (
          <p>No show found</p>
        )} */}

        {/* {this.state.result.length > 0 ? (
          this.state.result.map(
            ({ show }) =>
              console.log(show) || (
                <div key={show.id}>
                  <p>{`Name: ${show.name}, Type: ${show.type}`}</p>
                  <img
                    alt=""
                    src={
                      show.image
                        ? show.image.medium
                        : "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
                    }
                  />
                </div>
              )
          )
        ) : (
          <p>No show found</p>
        )} */}

        {/* <input value={this.state.input.title} onChange={({target: { value }}) => this.updateInput({value, field: 'title'})}/> */}
        {/* <Input value={this.state.input.title} onChange={this.updateInput} field="title"/> */}
        {/* <Button onClick={this.changeTitle} title="Change title"/> */}
        {/* <h2>List of atendees</h2> */}
        {/* { this.state.people.map(person => <p key={Math.random()}>{person}</p>) } */}
        {/* <input value={this.state.input.atendee} type="text" onChange={({target: { value }}) => this.updateInput({value, field: 'atendee'})} /> */}
        {/* <Input value={this.state.input.atendee} type="text" onChange={this.updateInput} field='atendee'/>       */}
        {/* <Button onClick={this.addAtendee} title="Add atendee"/> */}
      </div>
    );
  }
}

export default App;
