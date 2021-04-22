const { User } = require('../models/user');
const { Blog } = require('../models/blog');

function addblog(title, descri) {
    console.log("in services adddblog");
    //console.log(imagePath);
   return Blog.findOne({
       title
   })
   .then(blog=>{
       if(blog){
         return {
             statusCode:400,
             message:"Book exists"
         }
       }
       const newblog = new Blog({
        title,descri
       })
      
        return {
            statusCode:200,
            message:"Blog added sucessfully"
        }

   })
    
    
}
module.exports={
    
    addblog:addblog,
   
    }