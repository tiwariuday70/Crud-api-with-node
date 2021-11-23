const mongoose=require('mongoose');
const schema = mongoose.Schema(
    {
        title:'String',
        Content:'String'
    },
    {timestamps:true}
)




const Post= mongoose.model('Post',schema);
module.exports= Post;


