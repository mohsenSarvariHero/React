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

// import { NextResponse } from "next/server";
// import connect from "@/utils/db";
// import Post from "@/models/Post";

// export const GET = async (request , {params}) => {
//   const {id} = params
  
//     try {
//     // Connect to the database
//     await connect();

//     // Retrieve all posts from the database
//     const post = await Post.findById(id);

//     // Serialize the posts to avoid issues with Mongoose's ObjectId
//     const postsData = post.map((post) => {
//       return {
//         id: post._id.toString(), // Convert MongoDB ObjectId to string
//         title: post.title,
//         desc: post.desc,
//         img: post.img,
//         content: post.content,
//         username: post.username,
//         createdAt: post.createdAt,
//         updatedAt: post.updatedAt,
//       };
//     });

//     // Return the posts as JSON
//     return new NextResponse(JSON.stringify(postsData), {
//       status: 200,
//       headers: {
//         "Content-Type": "application/json", // Ensure the response is JSON
//       },
//     });
//   } catch (err) {
//     console.error(err);
//     return new NextResponse("Database Error!", { status: 500 });
//   }
// };
import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

// Define the GET method to fetch a post by its ID
export const GET = async (request, { params }) => {
  const { id } = params;

  try {
    // Connect to the database
    await connect();

    // Retrieve a post by its ID
    const post = await Post.findById(id);

    // If the post does not exist, return a 404 error
    if (!post) {
      return new NextResponse("Post not found", { status: 404 });
    }

    // Return the post data as JSON
    return new NextResponse(JSON.stringify({
      id: post._id.toString(), // Convert MongoDB ObjectId to string
      title: post.title,
      desc: post.desc,
      img: post.img,
      content: post.content,
      username: post.username,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
    }), {
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
