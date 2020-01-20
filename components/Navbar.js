import Link from "next/link";

const Navbar = () => {
  const styles = {
    display: "flex",
    background: "pink",
    justifyContent: "space-between",
    padding: "1rem"
  };

  return (
    <div style={styles}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About Us</a>
      </Link>
      <Link href="/contact">
        <a>Contact Us</a>
      </Link>
    </div>
  );
};

export default Navbar;
