import React, { useEffect, useState } from "react";
import axios from "axios";

function CommentListPage({ match }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts/${match.params.postId}/comments`
      )
      .then((response) => setComments(response.data));
  }, [match.params.postId]);

  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>
          <div>
            <b>{comment.name}:</b> {comment.body}
          </div>
          <div>
            <i>{comment.email}</i>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommentListPage;
