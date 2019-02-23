import React, { Component } from 'react';
import './dateee.css'

class Datee extends Component {

    constructor () {
        super();

        this.state={
            value:'',
        }
    }

    render(){
    
        return(

            
            <div style={{float:"right",marginTop:"7%"}}>
        <div className="grid">
          <div className="row">

            <div className="col-md-8" style={{ width: "63%" }}>

            </div>
            <div className="col-md-4" className="fontname" style={{marginTop:"3%",boxShadow: "0px 1px 8px 0px #888888"}}>
             <div style={{marginTop:"3%"}}>
             From
                    <input type="date" />
              &ensp;&ensp;To
                    <input type="date" />

            </div> 

            </div>
            <br /><br />
            <br />
          </div>
          </div>
          </div>
        )
    }
}
export default Datee;




