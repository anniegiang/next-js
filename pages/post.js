import axios from "axios";

const Post = ({ id, comments }) => {
  return (
    <div>
      <h3>Post #{id}</h3>
      <h2>Comments</h2>
      <ul>
        {comments.map(comment => (
          <Comment wkey={comment.id} {...comment} />
        ))}
      </ul>
    </div>
  );
};

const Comment = ({ email, body }) => {
  return (
    <div>
      <h4>{email}</h4>
      <p>{body}</p>
    </div>
  );
};

Post.getInitialProps = async ({ query }) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/comments?postId=${query.id}`
  );
  const data = res.data;
  return { comments: data, ...query };
};

export default Post;
