import React, { Component } from "react";
import { Link } from "react-router-dom";


export default function GearDetailComponent(props) {
    const { gearObj, onUpdateClick } = props;
    return(
        <div>
            <h1>{gearObj.name}</h1>
            <p>Price: {gearObj.price}</p>
            <p>Amount: {gearObj.amount}</p>
            <p>
                <Link to="/gear-list">Back</Link>&nbsp;&nbsp;
                <button onClick={ (event)=>onUpdateClick(event) }>Update</button>

            </p>
        </div>
    );
}
