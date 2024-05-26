/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./Example.css";

const Example = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Example render");

    return () => {
      alert("Example unmounting !!!");
    };
  });

  return (
    <div className="example">
      <h2>Đây là Example {count}</h2>
      <h2>Name là {props.name}</h2>
      <button onClick={() => setCount(count + 1)}>Change count</button>
    </div>
  );
};

export default Example;
