import React, { Component } from 'react';
import './box.css'

class box extends Component {

    constructor () {
        super();

        this.state={
            value:'',
        }
    }

    render(){
    
        return(
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div style={{boxShadow: "0px 1px 8px 0px #888888",margin:"1%"}}>
                    <p>$ 207,720 <br /> <span style={{color:"#9e9e9e",fontSize:"10px"}}>Sales $</span></p> 
                  </div>
                </div>

                <div className="col-md-4">
                  <div style={{boxShadow: "0px 1px 8px 0px #888888",margin:"1%"}}>
                  <p>$ 13 <br /> <span style={{color:"#9e9e9e",fontSize:"10px"}}> Average Basket Size $</span></p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div style={{boxShadow: "0px 1px 8px 0px #888888",margin:"1%"}}>
                  $ 29,674 <br /> <span style={{color:"#9e9e9e",fontSize:"10px"}}> Average Revenue / Day $ </span>
                  </div>
                </div>

                <div className="col-md-4">
                  <div style={{boxShadow: "0px 1px 8px 0px #888888",margin:"1%"}}>
                  15,071 <br /> <span style={{color:"#9e9e9e",fontSize:"10px"}}> Total Checkouts </span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div style={{boxShadow: "0px 1px 8px 0px #888888",margin:"1%"}}>
                  91,581 <br /> <span style={{color:"#9e9e9e",fontSize:"10px"}}> Total Units Sold </span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div style={{boxShadow: "0px 1px 8px 0px #888888",margin:"1%"}}>
                  13,083 <br /> <span style={{color:"#9e9e9e",fontSize:"10px"}}> Average Units Sold / Day </span>
                  </div>
                </div>
              </div>
            </div>

        )
    }
}
export default box;