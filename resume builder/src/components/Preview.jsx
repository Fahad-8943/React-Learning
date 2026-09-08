// import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function Preview({ resumeData }) {
  console.log("Resume Data:", resumeData);
  console.log("Skills:", resumeData?.skills);

  return (
    <>
      <Box component="section">
        <Paper elevation={1} sx={{ p: 3, textAlign: "center" }}>
          <h2>{resumeData.fullName}</h2>
          <h6>{resumeData.job}</h6>
          <p>
            <span>{resumeData.phone}</span>| <span>{resumeData.email}</span>|
            <span>{resumeData.location}</span>
          </p>
          <p>
            <Link to={resumeData.github}>GITHUB</Link>|
            <Link to={resumeData.linkedin}>LINKEDIN</Link>|
            <Link to={resumeData.portfolio}>PORTFOLIO </Link>
          </p>
          <Divider>
            <h4>SUMMARY</h4>
          </Divider>
          <p>{resumeData.summary}</p>
          <Divider>
            <h4>EDUCATION</h4>
          </Divider>
          <div className="d-flex justify-content-around">
            <div>
              <p className="m-0">{resumeData.degree}</p>
              <p>{resumeData.university}</p>
            </div>
            <div>
              <p>{resumeData.passout}</p>
            </div>
          </div>
          <Divider>
            <h4>SKILLS</h4>
          </Divider>
          <Stack
            direction="row"
            spacing={0}
            sx={{ flexWrap: "wrap", gap: ".7rem" }}
          >
            {resumeData.skills?.map((skill, index) => (
              <Button variant="contained" sx={{ m: 0 }} key={index}>
                {skill}
              </Button>
            ))}
          </Stack>
        </Paper>
      </Box>
    </>
  );
}

export default Preview;
