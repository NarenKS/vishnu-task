import React, { Component } from 'react';

class Batch extends Component {

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

  render() {
    return (
     
        <div className="grid" style={{marginLeft:"2%"}}>
            <div className="row">
                
                <div className="col-md-10 col-md-10">
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
                </div>
            </div>
      
    );
  }
}

export default Batch;
