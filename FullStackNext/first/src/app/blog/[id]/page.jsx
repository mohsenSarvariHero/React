<<<<<<< HEAD
// import React from "react";
// import styles from "../[id]/page.module.css";
// import Image from "next/image";
// import firstimg from "@/public/websites.jpg"

// async function getPost(id) {
//   const res = await fetch(`http://localhost:3000/api/posts/${id}`);
  
//   if (!res.ok) {
//     throw new Error("Failed to fetch post");
//   }

//   return res.json();
// }

// const BlogPost =async ({ params }) => {
//   const { id } = params; // Extract the `id` from `params`
//   const post = await getPost(id); 
  
//   return (
//     <div className={styles.container}>
//       <h1>{params.id}</h1>
//       <div className={styles.header}>
//         <div className={styles.headerleft}>
//           <h1 className={styles.headingleft}>{post.title}</h1>
//           <p className={styles.descleft}>{post.desc}</p>
//           <div>
//             <Image src={post.img} width={400} height={300} />
//             <p>{post.username}</p>
//           </div>
//         </div>
//         <div className={styles.headerright}>
//           <Image src={post.img} width={400} height={300} />
//         </div>

//       </div>
//       <div className={styles.lower}>
//          {post.content}
//         </div>
//     </div>
//   );
// };

// export default BlogPost;
// import React from "react";
// import styles from "../[id]/page.module.css";
// import Image from "next/image";

// // Function to fetch the post data based on ID
// async function getPost(id) {
//   const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
//     cache: 'no-store' // Make sure you fetch fresh data on each request
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch post");
//   }

//   return res.json();
// }

// // BlogPost Component
// const BlogPost = async ({ params }) => {
//   const { id } = params; // Extract the `id` from `params`
//   const post = await getPost(id); // Fetch the post data

//   return (
//     <div className={styles.container}>
//       <h1>{post._id}</h1>
//       <div className={styles.header}>
//         <div className={styles.headerleft}>
//           <h1 className={styles.headingleft}>{post.title}</h1>
//           <p className={styles.descleft}>{post.desc}</p>
//           <div>
//             <Image src={post.img} width={400} height={300} alt="post image" />
//             <p>{post.username}</p>
//           </div>
//         </div>
//         <div className={styles.headerright}>
//           <Image src={post.img} width={400} height={300} alt="post image" />
//         </div>
//       </div>
//       <div className={styles.lower}>{post.content}</div>
//     </div>
//   );
// };

// export default BlogPost;
import React from "react";
import styles from "../[id]/page.module.css";
import Image from "next/image";

// Function to fetch the post data based on ID
async function getPost(id) {
  console.log("Fetching post with ID:", id);

  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: 'no-store', // Ensure fresh data
  });

  if (!res.ok) {
    console.error("Error fetching post:", res.status, res.statusText);
    throw new Error("Failed to fetch post");
  }

  return res.json();
}

// BlogPost Component
const BlogPost = async ({ params }) => {
  const { id } = params; // Extract the `id` from `params`

  if (!id) {
    return <div>Error: Post ID is missing.</div>; // Handle missing ID error
  }

  try {
    const post = await getPost(id); // Fetch the post data
    return (
      <div className={styles.container}>
        <h1>{post.id}</h1>
        <div className={styles.header}>
          <div className={styles.headerleft}>
            <h1 className={styles.headingleft}>{post.title}</h1>
            <p className={styles.descleft}>{post.desc}</p>
            <div>
              <Image src={post.img} width={100} height={100} alt="Post Image" />
              <p>{post.username}</p>
            </div>
          </div>
          <div className={styles.headerright}>
            <Image src={post.img} width={400} height={300} alt="Post Image" />
          </div>
        </div>
        <div className={styles.lower}>{post.content}</div>
      </div>
    );
  } catch (error) {
    console.error("Error in BlogPost component:", error);
    return <div>Error: Failed to fetch post</div>;
  }
};

export default BlogPost;

=======
import React from "react";
import styles from "../[id]/page.module.css";
import Image from "next/image";
import firstimg from "@/public/websites.jpg"
const BlogPost = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1>{params.id}</h1>
      <div className={styles.header}>
        <div className={styles.headerleft}>
          <h1 className={styles.headingleft}>title</h1>
          <p className={styles.descleft}>descriptions</p>
          <div>
            <Image />
            <p>Mohsen</p>
          </div>
        </div>
        <div className={styles.headerright}>
          <Image src={firstimg} width={400} height={300} />
        </div>

      </div>
      <div className={styles.lower}>
          <div> descriptions1 </div>
          <div> description 2</div>
          <div> description 3</div>
        </div>
    </div>
  );
};

export default BlogPost;
>>>>>>> 91eb025d213b349f0940b74f78dae0b98895365a
