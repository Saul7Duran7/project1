import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Navigation extends Component{
    render(){
        return (
        <nav>
            <ul>
             <li><Link to="/Manage-Page">Manage Page</Link></li>
             <li><Link to='/Preview-Page'>Preview Page</Link></li>
            </ul>
       </nav>      
        )  
    }
    }


export default Navigation;
