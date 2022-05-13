import * as React from "react";
import { Link } from "gatsby";

const Homepage = () => {
  return (
    <main>
      <h1>Homepage</h1>
      <p1>Whats going on?</p1>
      <Link to="/about">To About</Link>
    </main>
  );
};

export default Homepage;
