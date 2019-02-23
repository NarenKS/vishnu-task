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
            <div>
            {/* <Login/> */}
        <Layout />
            </div>
        )
    }
}
export default Home;