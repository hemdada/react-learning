import React, { Component } from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux.js';

class Cockpit extends Component {
    constructor(props){

        super(props);

        console.log("[Cockpit.js] Inside Constructor", props);
    }

    componentWillMount() {
        console.log("[Cockpit.js] Inside componentWillMount");
    }

    componentDidMount() {
        console.log("[Cockpit.js] Inside componentDidMount");
    }
    render() {

        console.log("[Cockpit.js] Inside Render");

        const assignedClasses = [];

        let buttonClass = classes.Button;
        if (this.props.showPersons) {
            buttonClass = [classes.Button, classes.Red].join(" ");
            console.log(buttonClass);
        }

        if (this.props.persons.length <= 2) {
            assignedClasses.push(classes.red);
        }

        if (this.props.persons.length <= 1) {
            assignedClasses.push(classes.bold);
        }
        return (
            <Aux>
                <p className={assignedClasses.join(" ")}>{this.props.appTitle}</p>
                <button className={buttonClass} onClick={this.props.click}>Toggle Persons</button>
                <button onClick={this.props.login}>Login In</button>
            </Aux>
        );
    }
}

export default Cockpit;