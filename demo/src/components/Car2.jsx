import React, { useState } from "react";

export const Car2 = () => {
  const [name, setName] = useState("POLO GT");

  return (
    <>
      <div className="m-5">
        <input
          className="form-control"
          type="text"
          placeholder="Enter car name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="p-5 bg-success text-danger fs-3 fw-bold">
        <p> Car Name :{name} </p>
      </div>
    </>
  );
};
