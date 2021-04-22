const mongoose = require('mongoose');
const Blog = mongoose.model('Blog',{
title: String,
descri: String,



});
module.exports= {
    Blog
}