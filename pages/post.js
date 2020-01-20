import axios from "axios";

const Post = ({ id, comments }) => {
  return (
    <div>
      <h3>Post #{id}</h3>
      <h2>Comments</h2>
      <ul>
        {comments.map(comment => (
          <li>{comment.body}</li>
        ))}
      </ul>
    </div>
  );
};

Post.getInitialProps = async ({ query }) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/comments?postId=${query.id}`
  );
  const data = res.data;
  return { comments: data, id: query.id };
};

export default Post;
