import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

export default function Menu() {
    return (
        <div className="menu-main">
            <div className="menu-container">

                <div className="menu-logo">
                    <Link to = '/'>
                    AndrewKeeleCreative
                    </Link>
            </div>
                <div className="menu-items">
                    <Link to ='/gallery'><div>Gallery</div></Link>
                    <Link to='/about'><div>About</div></Link>
                    <Link to='/prints'><div>E-shop</div></Link>
                    <Link to='/contact'><div>Contact</div></Link>
                    <Link to ='/blog'><div>Blog</div></Link>
                </div>
            </div>
        </div>
    )
}