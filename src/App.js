import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";
/*
import Userinput from "./UserInput/UserInput";
import Useroutput from "./UserOutput/UserOutput";
*/


class App extends Component {

    /*    state = {
     username: "Hemanth Reddy"
     };*/
    state = {
        persons: [
            {id: "ww12", name: "Hemanth", age: 35},
            {id: "ww21", name: "Sumanth", age: 35}
        ],
        showPersons: false
    };

  switchNameHandler = (newName) => {
      this.setState({
          persons : [
              {name : newName, age : 35},
              {name : "Sam", age : 38}
          ]
      });
  };

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

/*   usernameChangeHandler = (event) => {
       this.setState({ username : event.target.value});
   };*/

   toggleShowPersons = () => {
        this.setState({showPersons : !this.state.showPersons});
   };

  render() {
   const style = {
       backgroundColor: 'green',
       color: 'white',
       border: '1px solid blue',
       padding: '8px',
   };
   let persons = null;
      if (this.state.showPersons) {
          persons = (
              <div>
                  { this.state.persons.map((person, index) => {
                      return <Person changed={(event) => this.nameChangeHandler(event, person.id)} key={person.id} name={person.name} age={person.age} click={() => this.deletePersonHandler(index)}/>
                  })}
 {/*                 <Person name={this.state.persons[0].name}
                          age={this.state.persons[0].age}
                          click={this.switchNameHandler.bind(this, "Hemanth Reddy!!!")}
                          changed={this.nameChangeHandler}
                  />
                  <Person name={this.state.persons[1].name}
                          age={this.state.persons[1].age}>
                      children
                  </Person>*/}
              </div>
          );
          style.backgroundColor = 'red';
      }

      const classes = [];

      if (this.state.persons.length <= 2) {
          classes.push("red");
      }

      if (this.state.persons.length <= 1) {
          classes.push("bold");
      }
   return (
      <div className="App">
          <p className={classes.join(" ")}>This is my React App</p>
         {/* <button style={style} onClick={ () => this.switchNameHandler("Hemanth!!!")}>Switch Name</button>*/}
         <button style={style} onClick={this.toggleShowPersons}>Toggle Persons</button>
          {persons}

    {/*      <Userinput username={this.state.username} changed={this.usernameChangeHandler}/>
        <Useroutput username={this.state.username}/>
        <Useroutput username={this.state.username}/>*/}

      </div>
    );
    //return  React.createElement("div",{className: 'App'}, React.createElement('h1', null, "Will this work?"));
  }
}

export default App;
