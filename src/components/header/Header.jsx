import React, { Component } from 'react';
import './header.css'

class Header extends Component {

    constructor () {
        super();

        this.state={
            value:'',
        }
    }

    render(){
    
        return(
            <div className="head">
            <br/> 
             Analysis | Sales Performance
            </div>
        )
    }
}
export default Header;