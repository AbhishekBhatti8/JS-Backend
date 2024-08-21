// require('dotenv').config({path: './env'});
import "dotenv/config";
import connectDB from "./db/index.js";
import { app } from "./app.js";

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("error", error);
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running at port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection failed !!");
  });

// const app = express();

// ;(async ()=>{
//     try {
//      await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`)
//      app.on("error", (error)=>{
//         console.log("error", (error));
//         throw error;
//      })
//      app.listen(process.env.PORT, ()=>{
//         console.log(`app is listening to port ${process.env.PORT}`);
//      })
//     } catch (error) {
//         console.error("Error", error);
//         throw err
//     }
// })()
