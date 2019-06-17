import React, { Component } from 'react';
import './home.css';


export default class Home extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="home-main">
                <div className="home-text">
                    <div>
                        AndrewKeele
                    </div>
                    <div>
                        Creative
                    </div>
                </div>
            </div>
        )
    }
}