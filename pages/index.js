import axios from "axios";

const Index = ({ posts }) => {
  return (
    <div>
      <h1>Index</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

Index.getInitialProps = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const data = res.data;
  return { posts: data };
};

export default Index;
