import axios from "axios";
import Link from "next/link";

const Index = ({ posts }) => {
  return (
    <div>
      <h1>Index</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link
              key={post.id}
              href={`/post?id=${post.id}`}
              as={`/post/${post.id}`}
            >
              <a>{post.title}</a>
            </Link>
          </li>
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
