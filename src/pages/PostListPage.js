import React, { useEffect, useState } from "react";
import axios from "axios";

function PostListPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data));
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          {post.title} ({post.id})
        </div>
      ))}
    </div>
  );
}

export default PostListPage;
