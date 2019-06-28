const cloudinary = require('cloudinary');
require('dotenv').config();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
}
);


module.exports = {
    // getGallery: (req, res) => {
    //     cloudinary.v2.api.resources({
    //         type: 'upload',
    //         prefix: 'gallery/',
    //         max_results: 100,
    //         tags: true
    //     }, 
    //     function(error, result){console.log()})
    //     .then( response => {
    //         console.log(response);
    //         res.status(200).send(response)})
    // }

    getGallery: (req, res) => {
        var gallery = "folder=Gallery";
        if(req.body.info!=""){
            gallery ="folder=Gallery AND "+ req.body.info
        }
        cloudinary.v2.search.expression(gallery)
        .with_field('tags')
        .max_results(100)
        .execute().then( response => {
            res.status(200).send(response)
        })
    }
}