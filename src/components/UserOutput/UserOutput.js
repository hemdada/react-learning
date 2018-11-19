import React from 'react';
import "./UserOutput.css";

const useroutput = (props) => {
    return (
        <div className="UserOutput">
            <p>User Name: {props.username}</p>
            <p>Text1 ....</p>
            <p>Text2 ....</p>
        </div>
    )
};

export default useroutput;