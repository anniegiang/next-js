import axios from "axios";

const Index = props => {
  return (
    <div>
      <h1>Index</h1>
    </div>
  );
};

Index.getInitialProps = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const data = res.data;

  return { res: console.log(data) };
};

export default Index;
