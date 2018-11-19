import React, { Component} from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass'
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types';
import { AuthContext } from '../../../containers/App';

class Person extends Component {
    constructor(props){

        super(props);

        console.log("[Person.js] Inside Constructor", props);
        this.inputElement = React.createRef();
    }

    componentWillMount() {
        console.log("[Person.js] Inside componentWillMount");
    }

    componentDidMount() {
        console.log("[Person.js] Inside componentDidMount");
        if (this.props.position === 0) {
            this.inputElement.current.focus();
        }
    }

    focus() {
        this.inputElement.current.focus();
    }

    render () {
        console.log("[Person.js] Inside Render");
        return (
            <Aux>
                <AuthContext.Consumer>
                    { auth => auth ? <p>I'am authenticated </p> : null }
                </AuthContext.Consumer>
                <p onClick={this.props.click}>I am {this.props.name} and age {this.props.age}</p>
                <input
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                    ref={this.inputElement}
                />
            </Aux>
        )
    }
}

Person.propTypes = {
    name : PropTypes.string,
    age: PropTypes.number,
    click: PropTypes.func,
    changed: PropTypes.func
};
export default withClass(Person, classes.Person);