import React from 'react';
import {Link } from 'react-router-dom';

const nav=()=>{
    return (
        <div>
            <ul className = "nav-ul">
                <li><Link to="/">Products</Link></li>
                <li><Link to="/Add">Add products</Link></li>
                <li><Link to="/update">Update products</Link></li>
                <li><Link to="/logouts">Logouts</Link></li>
                <li><Link to="/Profile">profile</Link></li>
                <li><Link to="/signup">SignUp</Link></li>
            </ul>
        </div>
    )
}

export default nav;
