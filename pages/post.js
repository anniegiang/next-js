const Post = props => {
  return <h3>Post #{props.id}</h3>;
};

Post.getInitialProps = async ({ query }) => {
  return { id: query.id };
};

export default Post;
