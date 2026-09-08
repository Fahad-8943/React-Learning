import React, { useEffect, useState } from "react";

function Count() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("company rendered");
  }, [count]);
  return (
    <div className="p-5">
      <h1>Count:{count} </h1>
      <button onClick={() => setCount(count + 1)} className="btn btn-secondry">
        increament
      </button>
    </div>
  );
}

export default Count;
