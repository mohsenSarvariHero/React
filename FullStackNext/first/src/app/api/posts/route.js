// import { NextResponse } from "next/server"
// import connect from "@/utils/db"
// import Post from "@/models/Post"

// export const GET = async(request)=>{

//     try{
//         await connect()

//         const posts = await Post.find()

//         return new NextResponse(posts,{status : 200});
//     }catch (err){
//         return new NextResponse("DataBase Error!", {status : 500})
//     }
    
// };

import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (request) => {
  try {
    // Connect to the database
    await connect();

    // Retrieve all posts from the database
    const posts = await Post.find();

    // Serialize the posts to avoid issues with Mongoose's ObjectId
    const postsData = posts.map((post) => {
      return {
        id: post._id.toString(), // Convert MongoDB ObjectId to string
        title: post.title,
        desc: post.desc,
        img: post.img,
        content: post.content,
        username: post.username,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
      };
    });

    // Return the posts as JSON
    return new NextResponse(JSON.stringify(postsData), {
      status: 200,
      headers: {
        "Content-Type": "application/json", // Ensure the response is JSON
      },
    });
  } catch (err) {
    console.error(err);
    return new NextResponse("Database Error!", { status: 500 });
  }
};
