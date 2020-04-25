Learn more or give us feedback
import React, { Component } from "react";

import GearDAO from "../models/fishingGearDAO";
import GearUpdateComponent from "../components/gearUpdateComponent";


export default class GearUpdateContainer extends Component {
    constructor(props) {
        super(props);
        const { slug } = this.props.match.params;

        const dao = new TreeDAO();
        const gearObj = dao.getObjectBySlug(slug);

        this.state = {
            slug: slug,
            name: treeObj.name,
            price: treeObj.price,
            amount: treeObj.amount,
        }

        this.onNameChange = this.onNameChange.bind(this);
        this.onPriceChange = this.onPriceChange.bind(this);
        this.onAmountChange = this.onAmountChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onNameChange(event) {
        this.setState({
            name: event.target.value,
        });
    }

    onPriceChange(event) {
        this.setState({
            price: event.target.value,
        });
    }

    onAmountChange(event) {
        this.setState({
            amount: event.target.value,
        });
    }

    onClick(event){
        event.preventDefault();

        const { slug, name, price, amount } = this.state;
        const dao = new TreeDAO();
        dao.updateObjectBySlug(slug, name, price, amount);

        alert("Fishing Gear has been saved!");

        this.props.history.push(`/gear/${slug}`);
    }

    render() {
        const { slug, name, price, amount } = this.state;
        const { onNameChange, onPriceChange, onAmountChange, onClick } = this;
        return (
            <GearUpdateComponent
               slug={slug}
               name={name}
               price={price}
               amount={amount}
               onNameChange={onNameChange}
               onPriceChange={onPriceChange}
               onAmountChange={onAmountChange}
               onClick={onClick}
            />
        );
    }
}
