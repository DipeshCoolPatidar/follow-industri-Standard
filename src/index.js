   import dotenv from "dotenv";
    import connectDB from "./db/index.js";


   dotenv.config({
    path:'./env'
   })


    connectDB();









    /*
    import express from "express";
    const app = express();

    ( async  () =>  {
        try{
           await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
           app.on("error",   (err)  =>  {
                console.log("ERRORE: ", err);
                throw err
           })
           app.listen(process.env.PORT, ()  =>  {
                console.log(`App is Listening on port ${process.env.PORT}`);
           })

        } catch(err){
            console.error("ERRORE: ", err);
            throw err
        }
    })()*/