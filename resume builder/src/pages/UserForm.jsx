import React from "react";
import Preview from "../components/Preview";
import Steps from "../components/Steps";
import { useState } from "react";

function UserForm() {
  const [resumeData, setResumeData] = useState({
    fullName: "",
    job: "",
    location: "",
    email: "",
    phone: "",
    github: "",
    linkedin: "",
    portfolio: "",
    degree: "",
    university: "",
    passout: "",
    skills: [],
    summary: "",
  });

  return (
    <div className="container-fluid " style={{ margin: "100px 0px" }}>
      <div className="row">
        <div className="col-lg-6" style={{ overflow: "hidden" }}>
          <Steps setResumeData={setResumeData} resumeData={resumeData} />
        </div>
        <div className="col-lg-6">
          {resumeData.fullName && <Preview resumeData={resumeData} />}
        </div>
      </div>
    </div>
  );
}

export default UserForm;
