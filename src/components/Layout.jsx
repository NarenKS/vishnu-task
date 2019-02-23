import React, { Component } from 'react';
import SideBar  from "./sideBar/SideBar";
import Header from "./header/Header";
// import AddOn from "./AddOn/AddOn";
import Batch from "./batch/Batch";
import Graph from './graph/Graph';
import Dateee from './date/dateee';
import Box from './box/box';
import Drop from './drop/drop';
import "../App.css";

class Layout extends Component {
  render() {
    return (
     
        <div className="grid">
            <div className="row">
                <div className="col-md-3 sideBarContainer">
                <SideBar />
                </div>
                <div className="col-md-9  mainContainer" style={{marginLeft:"-4%"}}>
                    <Header />
                    <Dateee />
                    <Drop />
                    {/* <AddOn /> */}
                    <Box />
                    <Batch />
                    <Graph />
                </div>
            </div>
        </div>
    );
  }
}

export default Layout;
