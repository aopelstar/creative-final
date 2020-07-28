import React from 'react';
import './about.css';

export default function About() {
    return(
        <div className ="about-main">
            <img src ="https://res.cloudinary.com/drapplestar/image/upload/v1595831444/Gallery/rainbow.jpg" className="main-about-container" alt=""/>
            <div className="about-container">

            <div className="about-photo-container"><img src="http://res.cloudinary.com/drapplestar/image/upload/v1560406218/Gallery/me.jpg" alt="me" className="about-photo"/></div>
                <div className="about-desc">Really, I am just a normal guy, trying to live out his dream.  I love photography. I also love hot air balloons, summer, fireworks and the moon. 
                 <br/>Hire me to photograph your corporate event or buy a print.  I personally guarantee to deliver every product 
                to you wrapped with an intangible - but still real - layer of love and affection.</div>
            </div>
            
                
        </div>
    )
}