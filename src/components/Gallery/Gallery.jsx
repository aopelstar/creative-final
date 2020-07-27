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
            data: [],
            index: 0
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

    incrementDown(){
        if(this.state.index!==0){

            this.setState({
                index: this.state.index-5
            })
        }
    }

    incrementUp(){
        if(this.state.index+5 < this.state.data.length){

            this.setState({
                index: this.state.index+5
            })
        }
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
        let homeGallery = this.state.data.filter( (pics, i) => i >= this.state.index && i<this.state.index+5).map( (pics, i) => {
            return(
                <div key = {i} className="gallery-photo-container" >
                    <a href={pics.url} rel="noopener" target="_blank" ><img src={pics.url} alt="gallery" className="gallery-photo"  /></a>
                </div>
            )
        })
        return(
            <div className="gallery-main">
                <img src= {background} className="main-gallery-container" alt=""/>
                <div className="gallery-types">
                    <div onClick={() => this.submit('ground')}>Location?</div>
                    <div onClick={() => this.submit('drone')}>Time of Day?</div>
                    <div>sSeason?</div>
                </div>
                <div className="gallery-carousel">
                    <div className="left-arrow" onClick={ (e) => this.incrementDown(e.target.value)}>&#10094;</div>
                </div>
                <div className="gallery-photos">
                    {homeGallery}
                </div>
                <div className="gallery-carousel">
                    <div className="right-arrow" onClick={ (e) => this.incrementUp(e.target.value)}>&#10095;</div>
                </div>


                <div onClick={() => this.search()} className="gallery-search">
                    <img src={glass} className="glass" alt=""/>
                </div>
                <div className={this.state.search?"gallery-hidden":"gallery-hidden gallery-reveal"}>
                    <div className="gallery-container">

                    <div className="gallery-search-title">
                        Search For A Key Word
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