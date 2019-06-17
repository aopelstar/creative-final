import React, { Component } from 'react';
import './gallery.css';
import glass from '../../images/glass.png';
import background from '../../images/mapleton.jpg'
import axios from 'axios';


export default class Gallery extends Component {
    constructor(){
        super();
        this.state = {
            search: true,
            searchText: "",
            data: []
        }
    }

    async componentDidMount(){
        let body ={
            info: this.state.searchText
        }
        await axios.post('http://localhost:9876/api/cloudinary', body)
        .then( ( {data} ) => {
            this.setState({
                data: data.resources
            })
        })
    }

    search(){
        this.setState({
            search: !this.state.search
        })
    }

    searchText(val){
        this.setState({
            searchText: val
        })
    }

    submit(val){
        let body = {
            info: this.state.searchText
        } 

        if( val === "drone" || val ==="ground"){
            let promise = axios.post('http://localhost:9876/api/cloudinary', {info: val})
            promise.then( ( {data} ) => {
                this.setState({
                    data: data.resources
                })
            })
        } else {

            let promise = axios.post('http://localhost:9876/api/cloudinary', body)
            promise.then( ( {data} ) => {
                this.setState({
                    data: data.resources
                })
            })
        }
    }

    render(){
        let homeGallery = this.state.data.map( (pics, i) => {
            return(
                <div key = {i} className="gallery-photo-container" onClick={ () => window.open( {pics}, "_blank")}>
                    <img src={pics.url} alt="gallery" className="gallery-photo"/>
                </div>
            )
        })
        return(
            <div className="gallery-main">
                <img src= {background} className="main-gallery-container" alt=""/>
                <div className="gallery-types">
                    <div onClick={() => this.submit('ground')}>Ground</div>
                    <div onClick={() => this.submit('drone')}>Aerial</div>
                    <div>Portrait</div>
                </div>
                <div className="gallery-photos">
                    {homeGallery}
                </div>


                <div onClick={() => this.search()} className="gallery-search">
                    <img src={glass} className="glass" alt=""/>
                </div>
                <div className={this.state.search?"gallery-hidden":"gallery-hidden gallery-reveal"}>
                    <div className="gallery-container">

                    <div className="gallery-search-title">
                        Something Specific In Mind?
                    </div>
                    <div className="gallery-search-bar">
                        <div>
                        <input type="text" className="gallery-input" onChange={(e)=>this.searchText(e.target.value)}/>
                        </div>
                    <div>
                        <button onClick={ () => this.submit()}>Search</button>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}