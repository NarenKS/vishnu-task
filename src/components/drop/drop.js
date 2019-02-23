import React, { Component } from 'react';
import * as action1 from "../../img/1.png"
import * as action2 from "../../img/2.png"
import * as action3 from "../../img/3.png"
import * as action4 from "../../img/actions4.png"
import * as action5 from "../../img/actions5.png"
import house from "../../img/house.png"

class Drop extends Component {

    constructor () {
        super();

        this.state={
            value:'',
            common:action5
        }
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
    render(){
    
        return(
            <div style={{marginTop:"10%"}}>
                <div className="container">
                    <img style={{width:"4%"}} src={house}></img>
                    <button  data-toggle="modal" data-target="#myModal" style={{backgroundColor:"#1bbf6d",color:"white",borderRadius:"5px"}}>+</button>
                    <hr/>
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
                <img src={action1} style={{width:"5%"}}></img>
                <img src={action2} style={{border:"1px solid #9e9e9e",width:"100px",height:"30px"}}></img>&ensp;&ensp;
                <img src={action3} style={{border:"1px solid #9e9e9e",width:"100px",height:"30px"}}></img>
                <button style={{ float:"right",marginRight:'20px'}} onClick={() => this.myFunction()}> <img src={this.state.common}  alt={this.state.common} /></button>
                <div id="myDIV" style={{boxShadow: "rgb(136, 136, 136) 1px 1px 2px 0px",marginTop:"2%",marginBottom:"5%",height:"170px"}}>
                    <ul style={{marginBottom:"2%"}}>
                        <li style={{"marginBottom":"2%"}}>
                            
                            <button  data-toggle="modal" data-target="#myModal" style={{backgroundColor:"#1bbf6d",color:"white",borderRadius:"2px",border:"none"}}>Add More</button>
                        </li>
                        <li style={{boxShadow: "0px 1px 8px 0px #888888",padding:"10px",marginBottom:"2%"}}>
                            <a >All > Dairy > Milk </a>
                        </li>
                        <li style={{boxShadow: "0px 1px 8px 0px #888888",padding:"10px",marginBottom:"2%"}}>
                            <a >All > Dairy > Butter > CORN/MAIZ </a>
                            
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Drop;