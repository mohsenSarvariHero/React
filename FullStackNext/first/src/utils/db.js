// import mongoose from "mongoose"

// const connect = async () =>{
//     try{
//         await mongoose.connect(process.env.MONGO);
//     } catch (error) {
//          throw new Error("Connection failed")
//     }
// };

// export default connect;
import mongoose from "mongoose";

const connect = async () => {
  // Check if we already have a connection to avoid re-connecting multiple times
  if (mongoose.connection.readyState >= 1) {
    console.log("MongoDB is already connected.");
    return;
  }

  try {
    // Connect to MongoDB using the URI from environment variables
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Database connection failed", error);
    throw new Error("Connection failed");
  }
};

export default connect;




