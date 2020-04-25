import React, { Component } from "react";

import GearListComponent from "../components/gearListComponent";
import GearDAO from "../models/fishingGearDAO";


export default class GearListContainer extends Component {
    constructor(props) {
        super(props);

        const dao = new GearDAO();
        const gears = dao.getList();
        this.state = {
            gears: gears,
        }
    }

    render() {
        const { gears } = this.state;
        return (
            <GearListComponent
                gears={gears}
            />
        );
    }
}
