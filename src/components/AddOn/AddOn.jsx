import React, { Component } from 'react';
import * as action1 from "../../img/1.png"
import * as action2 from "../../img/2.png"
import * as action3 from "../../img/3.png"
import * as action4 from "../../img/actions4.png"
import * as action5 from "../../img/actions5.png"

// import {Collapse} from 'react-collapse';


class AddOn extends Component {
 
  constructor(props){
    super(props);
    this.state={
      common: action4,
    }
  }

  openCity = (evt, cityName) => {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }


  myFunction = () => {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
      this.setState({ common: action4});
    } else {
      x.style.display = "none";
      this.setState({ common: action5});

    }
  }


  render() {
    return (
      <div>


          <div className="container">

            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
              +
  </button>

            <div className="modal fade" id="myModal">
              <div className="modal-dialog modal-sm">
                <div className="modal-content">


                  <div className="modal-header">
                    <h4 className="modal-title">Select Store</h4>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                  </div>

                  <div className="modal-body">
                    Done..
        </div>

                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>

                </div>
              </div>
            </div>

          </div>






          <button style={{ float:"right",marginRight:'20px'}} onClick={() => this.myFunction()}> <img src={this.state.common}  alt={this.state.common} /></button>
          
          <div id="myDIV">
          
            
            <ul>
                        <li><a>Add More </a></li>
                        <li><a>All > Dairy > Milk </a></li>
                        <li><a>All > Dairy > Butter > CORN/MAIZ </a></li>
                        </ul>
          </div>

          




            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div style={{boxShadow: "0px 1px 8px 0px #888888",margin:"5%"}}>
                    <p>$ 207,720 <br /> Sales $</p> 
                  </div>
                </div>

                <div className="col-md-4">
                  <div style={{boxShadow: "0px 1px 8px 0px #888888",margin:"5%"}}>
                  <p>$ 13 <br /> Average Basket Size $</p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div style={{boxShadow: "0px 1px 8px 0px #888888",margin:"5%"}}>
                  $ 29,674 <br /> Average Revenue / Day $
                  </div>
                </div>

                <div className="col-md-4">
                  <div style={{boxShadow: "0px 1px 8px 0px #888888",margin:"5%"}}>
                  15,071 <br /> Total Checkouts
                  </div>
                </div>
                <div className="col-md-4">
                  <div style={{boxShadow: "0px 1px 8px 0px #888888",margin:"5%"}}>
                  91,581 <br /> Total Units Sold
                  </div>
                </div>
                <div className="col-md-4">
                  <div style={{boxShadow: "0px 1px 8px 0px #888888",margin:"5%"}}>
                  13,083 <br /> Average Units Sold / Day
                  </div>
                </div>
              </div>
            </div>


          


          <div className="tab">
            <button className="tablinks" onClick={(event) => this.openCity(event, 'Sales ($)')}> Sales ($) </button>
            <button className="tablinks" onClick={(event) => this.openCity(event, 'Total Transactions')}> Total Transactions </button>
            <button className="tablinks" onClick={(event) => this.openCity(event, 'Units Sold')}> Units Sold </button>
          </div>

          <div id="Sales ($)" className="tabcontent">
            
          </div>

          <div id="Total Transactions" className="tabcontent">
               
          </div>

          <div id="Units Sold" className="tabcontent">  
            
          </div>
         <hr></hr>

        </div>

        

        );
      }
    }
    
    export default AddOn;
