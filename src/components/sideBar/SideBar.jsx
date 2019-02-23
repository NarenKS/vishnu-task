import React, { Component } from 'react';
import * as logo from "../../img/nextorbitlogo.png"
import * as log from "../../img/GEX-LOGO.png"
import * as analysis from "../../img/analysis.jpg"
import actions from "../../img/actions.png"
import settings from "../../img/settings.png"
import "./sidebar.css"
class SideBar extends Component {
    render() {
        return (

            <div className="grid">
                <div className="row">

                    <div className="sidenav" style={{zIndex:"10"}}>
                        <img className="imagecontainer" src={logo}></img>
                        <img className="imagecontain" src={log}></img>
                        <div className="side-heading">
                        
                        <img className="analysis" src={analysis}></img>
                        <h5>  Analysis </h5>
                        </div>
                        
                        <ul>
                        <li><a>Sales Performance</a></li>
                        <li><a>Comparison Tools</a></li>
                        <li><a>Top Sellers</a></li>
                        <li><a>Slow Movers</a></li>
                        <li><a>Out of Stock Analysis</a></li>
                        <li><a>Demad Planning</a></li>
                        <li><a>Store Inwards</a></li>
                        <li><a>Inventroy Level</a></li>
                        <li><a>Order History</a></li>
                        </ul>
                        <hr></hr>

                        
                        <div className="side-headi">
                        <img className="actio" src={actions} style={{width:"27%"}}></img>
                        <h7>  Actions </h7>
                        </div>
                        <ul>
                        <li><a>Store Ordering</a></li>
                        <li><a>Alters and Resolution</a></li>
                        </ul>
                        <hr></hr>
                        
                        
                        <div className="side-headiS">
                        <img className="actioS" src={settings} style={{width:"27%"}}></img>
                        <h7>  Settings </h7>
                        </div>
                        <ul>
                        <li><a>My Stores</a></li>
                        <li><a>My Products</a></li>
                        </ul>
                        <hr></hr>
                       
                        <div className="doc">
                        <h6>  Documantation </h6>
                        </div>


                    </div>
                </div>
            </div>
        );
    }
}

export default SideBar;
