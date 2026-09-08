import React from "react";
function Employee({ dataFromParent, str, flag, flag1 }) {
  //js code
  //   console.log(props);

  return (
    <>
      <h1 className="title">Employee Component</h1>
      {
      dataFromParent ? 
        <h3 className="text-danger">Employee Name : {dataFromParent} </h3>
       : 
        <p>Nothing to dispaly</p>
      
      }
    </>
  );
}
export default Employee;
