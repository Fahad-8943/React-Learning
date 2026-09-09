import React, { useRef } from "react";
import { RiFileEditFill } from "react-icons/ri";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import jobTypes from "../assets/jobRole.json";
import { editResumeApi } from "../services/allApi";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  maxHeight: "80vh",
  overflowY: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function Edit({ resumeData, setResumeData }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const skillRef = useRef();

  const addSkill = (skill) => {
    if (skill) {
      if (
        resumeData?.skills
          .map((item) => item.toLowerCase())
          .includes(skill.toLowerCase())
      ) {
        alert("already exist");
      } else {
        setResumeData({
          ...resumeData,
          skills: [...resumeData?.skills, skill],
        });
      }
      skillRef.current.value = "";
    } else {
      alert("enter a valid skill");
    }
  };

  const removeSkill = (skill) => {
    setResumeData({
      ...resumeData,
      skills: resumeData?.skills?.filter((item) => item != skill),
    });
  };
  const updateResume = async () => {
    const {
      fullName,
      job,
      location,
      email,
      phone,
      linkedin,
      github,
      portfolio,
      degree,
      university,
      passout,
      skills,
      summary,
    } = resumeData;
    if (
      fullName &&
      job &&
      location &&
      email &&
      phone &&
      linkedin &&
      github &&
      portfolio &&
      degree &&
      university &&
      passout &&
      skills.length > 0 &&
      summary
    ) {
      // api call
      const responce = await editResumeApi(resumeData?.id, resumeData);
      console.log(responce);
      if (responce.status == 200) {
        alert("Resume Updated successfully");
        handleClose();
      }
    } else {
      alert("Fill the fields completely");
    }
  };
  return (
    <>
      <button onClick={handleOpen} className="btn fs-5 text-primary">
        <RiFileEditFill />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Details
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="mt-3">
              {" "}
              <div>
                <h3>Personal Details</h3>
                <div>
                  <TextField
                    value={resumeData.fullName}
                    onChange={(e) =>
                      setResumeData({
                        ...resumeData,
                        fullName: e.target.value,
                      })
                    }
                    id="standard-basic"
                    label="Full Name"
                    variant="standard"
                    className="w-100"
                  />
                </div>
                <div>
                  <FormControl variant="standard" sx={{ minWidth: "100%" }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      Choose Job Title
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={resumeData?.job}
                      onChange={(e) =>
                        setResumeData({ ...resumeData, job: e.target.value })
                      }
                    >
                      {jobTypes.jobRoles.map((role) => (
                        <MenuItem key={role} value={role}>
                          {role}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <div>
                  <TextField
                    value={resumeData.location}
                    onChange={(e) =>
                      setResumeData({
                        ...resumeData,
                        location: e.target.value,
                      })
                    }
                    id="standard-basic"
                    label="Location"
                    variant="standard"
                    className="w-100"
                  />
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div>
                <h3>Contact Details</h3>
                <div>
                  <TextField
                    value={resumeData.email}
                    onChange={(e) =>
                      setResumeData({ ...resumeData, email: e.target.value })
                    }
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    className="w-100"
                  />
                </div>
                <div>
                  <TextField
                    value={resumeData.phone}
                    onChange={(e) =>
                      setResumeData({ ...resumeData, phone: e.target.value })
                    }
                    id="standard-basic"
                    label="Phone"
                    variant="standard"
                    className="w-100"
                  />
                </div>
                <div>
                  <TextField
                    value={resumeData.github}
                    onChange={(e) =>
                      setResumeData({ ...resumeData, github: e.target.value })
                    }
                    id="standard-basic"
                    label="Github Link"
                    variant="standard"
                    className="w-100"
                  />
                </div>
                <div>
                  <TextField
                    value={resumeData.linkedin}
                    onChange={(e) =>
                      setResumeData({ ...resumeData, linkedin: e.target.value })
                    }
                    id="standard-basic"
                    label="LinkedIn Link"
                    variant="standard"
                    className="w-100"
                  />
                </div>
                <div>
                  <TextField
                    value={resumeData.portfolio}
                    onChange={(e) =>
                      setResumeData({
                        ...resumeData,
                        portfolio: e.target.value,
                      })
                    }
                    id="standard-basic"
                    label="portfolio Link"
                    variant="standard"
                    className="w-100"
                  />
                </div>
              </div>
            </div>
            <div className="mt-3">
              {" "}
              <div>
                <h3>Education Details</h3>
                <div>
                  <TextField
                    value={resumeData.degree}
                    onChange={(e) =>
                      setResumeData({ ...resumeData, degree: e.target.value })
                    }
                    id="standard-basic"
                    label="Bachelor's Degree"
                    variant="standard"
                    className="w-100"
                  />
                </div>

                <div>
                  <TextField
                    value={resumeData.university}
                    onChange={(e) =>
                      setResumeData({
                        ...resumeData,
                        university: e.target.value,
                      })
                    }
                    id="standard-basic"
                    label="College/University"
                    variant="standard"
                    className="w-100"
                  />
                </div>
                <div>
                  <TextField
                    value={resumeData.passout}
                    onChange={(e) =>
                      setResumeData({ ...resumeData, passout: e.target.value })
                    }
                    id="standard-basic"
                    label="Passout Year"
                    variant="standard"
                    className="w-100"
                  />
                </div>
              </div>
            </div>

            <div className="mt-3">
              <div className="mt-3">
                <h3>Skills</h3>
                <div className="mt-3">
                  <input
                    ref={skillRef}
                    sx={{ width: "400px" }}
                    id="standard-skill"
                    label="Add Skills"
                    variant="outlined"
                  />
                  <Button
                    onClick={() => {
                      addSkill(skillRef.current.value);
                    }}
                    variant="contained"
                    className="ms-3"
                  >
                    ADD
                  </Button>
                </div>

                <h5>Added Skills:</h5>
                <div
                  className="d-flex my-3 flex-wrap justify-content-between"
                  direction="row"
                  spacing={0}
                  style={{ flexWrap: "wrap", gap: ".7rem" }}
                >
                  {resumeData.skills?.map((skill, index) => (
                    <span
                      className="btn btn-primary m-1 "
                      variant="contained"
                      sx={{ m: 0 }}
                      key={index}
                    >
                      {skill}{" "}
                      <button
                        style={{color:"black", background:"none", border:"none"}}
                        onClick={() => removeSkill(skill)}
                      >
                        X
                      </button>
                    </span>
                  ))}

                  {/*  */}
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div className="mt-3">
                <h3>Professional Summary</h3>

                <div className="mt-3">
                  <div>
                    <TextField
                      id="standard-role"
                      label="Write a short summary of yourself"
                      variant="standard"
                      className="w-100"
                      multiline
                      value={resumeData.summary}
                      onChange={(e) =>
                        setResumeData({
                          ...resumeData,
                          summary: e.target.value,
                        })
                      }
                      rows={4}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex align-item-center justify-content-center">
              <Button
                variant="contained"
                className=" mt-2 "
                onClick={() => updateResume()}
              >
                Update
              </Button>
            </div>
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

export default Edit;
