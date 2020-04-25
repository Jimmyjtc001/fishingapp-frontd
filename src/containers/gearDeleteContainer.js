import React, { Component } from "react";

import GearDAO from "../models/gearDAO";

import GearDeleteComponent from "../components/gearDeleteComponent";


export default class GearDeleteContainer extends Component {
    constructor(props) {
        super(props);

        const { slug } = this.props.match.params;

        const dao = new GearDAO();
        const gearObj = dao.getObjectBySlug(slug);

        this.state = {
            slug: slug,
            gearObj: gearObj,
        };

        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    onDeleteClick(event) {
        event.preventDefault();
        const dao = new GearDAO();
        const { slug } = this.state;
        dao.deleteObjectBySlug(slug);

        alert("The fishing gear has been deleted!");

        this.props.history.push("/gear-list");
    }

    render() {
        const { slug, treeObj } = this.state;
        const { onDeleteClick } = this;
        return (
            <GearDeleteComponent
               slug={slug}
               gearObj={gearObj}
               onDeleteClick={onDeleteClick}
            />
        );
    }
}
