import React, { Component } from "react";

import GearDAO from "../models/gearDAO";

import GearDetailComponent from "../components/gearDetailComponent";


export default class GearDetailContainer extends Component {
    constructor(props) {
        super(props);

        const { slug } = this.props.match.params;

        const dao = new TreeDAO();
        const gearObj = dao.getObjectBySlug(slug);

        this.state = {
            slug: slug,
            treeObj: gearObj,
        };

        this.onUpdateClick = this.onUpdateClick.bind(this);
    }

    onUpdateClick(event) {
        event.preventDefault();
        this.props.history.push(`/gear-update/${this.state.slug}`);
    }

    render() {
        const { gearObj } = this.state;
        const { onUpdateClick } = this;
        return (
            <GearDetailComponent
               gearObj={gearObj}
               onUpdateClick={onUpdateClick}
            />
        );
    }
}
