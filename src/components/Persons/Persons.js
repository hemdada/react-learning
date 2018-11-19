import React, {Component} from "react";
import Person from "./Person/Person";

class Persons extends Component {
    constructor(props){

        super(props);

        console.log("[Persons.js] Inside Constructor", props);
        this.lastPersonRef = React.createRef();
    }

    componentWillMount() {
        console.log("[Persons.js] Inside componentWillMount");
    }

    componentDidMount() {
        console.log("[Persons.js] Inside componentDidMount");
        this.lastPersonRef.current.focus();
    }

    componentWillReceiveProps(nextProps) {
        console.log("[UPDATE Persons.js] Inside componentWillReceiveProps", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("[UPDATE Persons.js] Inside shouldComponentUpdate", nextProps, nextState);
        return nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed || nextProps.click !== this.props.click;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("[UPDATE Persons.js] Inside componentWillUpdate", nextProps, nextState);
    }

    componentDidUpdate() {
        console.log("[UPDATE Persons.js] Inside componentDidUpdate");
    }

    render() {
        console.log("[Persons.js] Inside Render");
        return this.props.persons.map((person, index) =>
            <Person changed={(event) => this.props.changed(event, person.id)}
                    key={person.id}
                    name={person.name}
                    position={index}
                    ref={this.lastPersonRef}
                    age={person.age}
                    click={() => this.props.click(index)}/>
        );
    }
}

export default Persons;