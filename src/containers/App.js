import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
//import ErrorBoundary from "./ErrorBoundary/ErrorBoundary ";

export const AuthContext = React.createContext(false);

class App extends Component {


    constructor(props){

        super(props);

        console.log("[App.js] Inside Constructor", props);

        this.state = {
            persons: [
                {id: "ww12", name: "Hemanth", age: 25},
                {id: "ww21", name: "Sumanth", age: 35}
            ],
            showPersons: false,
            toggleClicked: 0,
            authenticated: false
        };
    }

    componentWillMount() {
        console.log("[App.js] Inside componentWillMount");
    }

    componentDidMount() {
        console.log("[App.js] Inside componentDidMount");
    }


    shouldComponentUpdate(nextProps, nextState) {
        console.log("[UPDATE App.js] Inside shouldComponentUpdate", nextProps, nextState);
        return nextState.persons !== this.state.persons || nextState.showPersons !== this.state.showPersons || nextState.authenticated !== this.state.authenticated;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("[UPDATE App.js] Inside componentWillUpdate", nextProps, nextState);
    }

    static getDerivedStateFromProps(nextProps, nextState) {
        console.log("[UPDATE App.js] Inside getDerivedStateFromProps", nextProps, nextState);
    }

    getSnapshotBeforeUpdate() {
        console.log("[UPDATE App.js] Inside getSnapshotBeforeUpdate");
    }

    componentDidUpdate() {
        console.log("[UPDATE App.js] Inside componentDidUpdate");
    }

  nameChangeHandler = (event, id) => {

      const personIndex = this.state.persons.findIndex(p => p.id === id);
      const person = {...this.state.persons[personIndex]};
      person.name = event.target.value;
      const persons = [...this.state.persons];
      persons[personIndex] = person;
      this.setState({
          persons : persons
      })

  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons : persons});
  };

   toggleShowPersons = () => {
       const doShow = this.state.showPersons;
        this.setState((prevState, props) => { return {showPersons : !doShow, toggleClicked : prevState.toggleClicked +1} });
   };

   loginHandler = () => {
     this.setState({authenticated : true});
   };

  render() {
      console.log("[App.js] Inside Render");
   let persons = null;
      if (this.state.showPersons) {
          persons = <Persons persons={this.state.persons} click={this.deletePersonHandler} changed={this.nameChangeHandler} />;
      }

   return (
        <Aux>
          <button onClick={() => {this.setState({showPersons : true})}}>Show Persons</button>
          <Cockpit
              appTitle = {this.props.title}
              showPersons={this.state.showPersons}
              persons={this.state.persons}
              click = {this.toggleShowPersons}
              login = {this.loginHandler}
          />
          <AuthContext.Provider value={this.state.authenticated}>
          {persons}
          </AuthContext.Provider>
        </Aux>
    );
    //return  React.createElement("div",{className: 'App'}, React.createElement('h1', null, "Will this work?"));
  }
}

export default withClass(App, classes.App);
