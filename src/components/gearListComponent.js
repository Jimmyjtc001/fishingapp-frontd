import React, { Component } from "react";
import { Link } from "react-router-dom";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';


function priceFormatter(cell, row) {
    return (
        <span>
            ${row.price}
        </span>
    );
}


function detailsFormatter(cell, row) {
    return (
        <span>
            <Link to={`/gear-delete/${row.slug}`}>Delete</Link>&nbsp;&nbsp;
            <Link to={`/gear/${row.slug}`}>View</Link>
        </span>
    );
}


export default function GearListComponent(props) {

    const { gears } = props;

    const columns = [{
      dataField: 'name',
      text: 'Fishing Gear Name'
    }, {
      dataField: 'price',
      text: 'Fishing Gear Price',
      formatter: priceFormatter,
    },{
      dataField: "amount",
      text: "Fishing Gear Amount"
    },{
      dataField: "slug",
      text: "Details",
      formatter: detailsFormatter,
    }];


    return (
        <div>
            <h1>Fishing Gear List</h1>
            <Link to="gear-create">Create a Gear</Link><br /><br />
            <br />
            <BootstrapTable
               keyField='slug'
               data={ gears }
               columns={ columns }
            />
            <br />
            <Link to="/dashboard">Back</Link>
        </div>
    );
}
