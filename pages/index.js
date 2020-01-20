import Link from "next/link";

const Index = () => (
  <div>
    <Link href="/about">
      <a>About Us</a>
    </Link>
    <Link href="/contact">
      <a>Contact Us</a>
    </Link>
    <h1>Index Page</h1>
  </div>
);

export default Index;
