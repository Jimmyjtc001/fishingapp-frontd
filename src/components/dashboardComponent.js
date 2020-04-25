import React, { Component } from "react";
import { Link } from "react-router-dom";


export default function DashboardComponent(props) {
    const { onLogoutClick } = props;
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome, here are your options</p>
            <Link to="/gear-list">View Fishing Gears</Link><br /><br />
            <button onClick={ (event)=>{onLogoutClick(event)}}>Logout</button>
        </div>
    );
}
