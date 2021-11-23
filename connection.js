const mongoose=require('mongoose');


 const connection = async() =>{
   try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log(`MongoDB connected: `);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
 }



module.exports= connection
