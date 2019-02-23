import React, { Component } from 'react';
// import Login from './Login/Login';
import Layout from './Layout';

class Home extends Component {

    constructor () {
        super();

        this.state={
            value:'',
        }
    }

    render(){
        return(
            <div className="row">
                <div className="col-2">
                    <div>
                        <img src="" alt="logo"/>
                    </div>
                </div>
                <div className="col-10">
                    right
                </div>
            </div>
            
        )
    }
}
export default Home;