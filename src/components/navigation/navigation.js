import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Navigation extends Component{
    render(){
        return (
        <nav>
            <ul>
             <li><Link to = "/">Contact List Page</Link></li>
             <li><Link to = "/preview-page">Preview Contacts List Page</Link></li>
            </ul>
       </nav>      
        )  
    }
    }


export default Navigation;
