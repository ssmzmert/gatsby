import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import Comp from "../components/comp";

const NumIncrement = () => {
  const [count, setCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    setSecondCount(secondCount + 1);
  }, [count]); // [] leaves updates it once

  return (
    <Layout pageTitle="Use State">
      Count: {count}
      <br />
      Second Count: {secondCount === 20 ? setSecondCount(0) : secondCount}
      <br /> <br />
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <br /> <br />
      <br /> <br />
      <button onClick={() => setShow(false)}>Hide Component</button>
      <button onClick={() => setShow(true)}>Show Component</button>
      <br /> <br />
      {show && <Comp />}
    </Layout>
  );
};

export default NumIncrement;
