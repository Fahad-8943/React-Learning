import React from "react";
// import User from "./User";

function Company({ userName }) {
  const user = userName;
  const display = (data) => {
    // console.log(data);

    alert(data);
  };
  return (
    <>
      <h1>Company</h1>
      {/* <User userName={user} /> */}
      <input
        type="text"
        placeholder="enter data"
        className="form-control m-5 "
        onChange={(e) => display(e.target.value)}
      />
    </>
  );
}

export default Company;
