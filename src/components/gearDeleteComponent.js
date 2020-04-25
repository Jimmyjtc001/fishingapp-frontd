import React, { Component } from "react";
import { Link } from "react-router-dom";


export default function GearDeleteComponent(props) {
    const { slug, gearObj, onDeleteClick } = props;
    return(
        <div>
            <h1>Are you sure?</h1>
            <p>You are about to delete the <strong>{gearObj.name}</strong> gear. Are you sure you want to continue?</p>
            <p>
                <Link to="/gear-list">Back</Link>&nbsp;&nbsp;
                <button onClick={ (event, slug)=>onDeleteClick(event, slug) }>Delete</button>

            </p>
        </div>
    );
}
