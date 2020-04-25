import React, { Component } from "react";
import { Link } from "react-router-dom";


export default function IndexComponent(props) {
    return (
        <div>
            <h1>Welcome to Fishing APp!</h1>
            <p>This is an app which helps you find good fishing gear and communicate with other anglers.</p>
            <Link to="/register">Register</Link><br /><br />
            <Link to="/login">Login</Link>
        </div>
    );
}
