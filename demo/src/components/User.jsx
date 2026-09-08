import React from "react";
import mystyle from "../style.module.css";
import useFetch from "../hooks/useFetch";

function User({ userName }) {
  const users = useFetch("https://jsonplaceholder.typicode.com/users");
  console.log(users);

  const show = () => {
    alert("button clicked");
  };
  const msg = (msg) => {
    alert(msg);
  };

  return (
    <>
      <h1 className={mystyle.title} style={{ textAlign: "center" }}>
        hello
      </h1>
      <h1>UserName : {userName}</h1>
      <button onClick={show} className="btn btn-primary">
        Click Here
      </button>
      <button onClick={() => show("btnclicked")} className="btn btn-primary">
        Click Here
      </button>

      <table>
        <thead>
          <tr>
            <th>SL.No</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default User;
