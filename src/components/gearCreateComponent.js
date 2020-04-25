import React, { Component } from "react";
import { Link } from "react-router-dom";


export default function GearCreateComponent(props) {
    const { name, price, amount } = props;
    const { onNameChange, onPriceChange, onAmountChange, onClick } = props;
    return (
        <div>
            <h1>Fishing Gear Create</h1>

            <input
               type="text"
               value={name}
               onChange={onNameChange}
               placeholder="Fishing gear name"
            />

            <input
               type="text"
               value={price}
               onChange={onPriceChange}
               placeholder="Price"
            />

            <input
               type="number"
               value={amount}
               onChange={onAmountChange}
               placeholder="Amount in inventory"
            />

            <button onClick={ (event)=>{ onClick(event) } }>Save</button>

            <Link to="/gear-list">Back</Link>
        </div>
    );
}
