import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import jobTypes from "../assets/jobRole.json";
import jobSkills from "../assets/jobSkills.json";
import summaries from "../assets/summaries.json";
import { addResumeAPI } from "../services/allApi";
import { useNavigate } from "react-router-dom";

const steps = [
  "Basic Information",
  "Contact Details",
  "Education Details",
  "Review & Submit",
];

function Steps({ setResumeData, resumeData }) {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const genrateAi = () => {
    setResumeData({
      ...resumeData,
      skills: jobSkills[resumeData.job],
      summary: summaries[resumeData.job],
    });
    handleNext();
  };

  const navigate = useNavigate();
  const addResume = async () => {
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
      const responce = await addResumeAPI(resumeData);
      console.log(responce);
      if (responce.status == 201) {
        alert("Resume Generated successfully");
        let resumeId = responce.data.id;
        navigate(`/resume/${resumeId}/view`);
      }
    } else {
      alert("Fill the fields completely");
    }
  };
  

  const previousActiveStepRef = React.useRef(activeStep);
  const resetButtonRef = React.useRef(null);
  const nextButtonRef = React.useRef(null);

  const renderStepArrayContent = (steps) => {
    switch (steps) {
      case 0:
        return (
          <div>
            <h3>Personal Details</h3>
            <div>
              <TextField
                value={resumeData.fullName}
                onChange={(e) =>
                  setResumeData({ ...resumeData, fullName: e.target.value })
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
                  setResumeData({ ...resumeData, location: e.target.value })
                }
                id="standard-basic"
                label="Location"
                variant="standard"
                className="w-100"
              />
            </div>
          </div>
        );
      case 1:
        return (
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
                  setResumeData({ ...resumeData, portfolio: e.target.value })
                }
                id="standard-basic"
                label="portfolio Link"
                variant="standard"
                className="w-100"
              />
            </div>
          </div>
        );
      case 2:
        return (
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
                  setResumeData({ ...resumeData, university: e.target.value })
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
        );

      case 3:
        return (
          <div>
            <h3>Skill</h3>
            <p>
              Our AI will genrate skills & summary according to your job role.
              Click <b>AI SKILL & SUMMARY</b> button to proceed
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  // Manage focus when the active step changes.
  React.useEffect(() => {
    const previousActiveStep = previousActiveStepRef.current;
    previousActiveStepRef.current = activeStep;

    if (activeStep === steps.length) {
      // If the user has completed all steps and hits "Finish", focus the "Reset" button.
      resetButtonRef.current.focus();
      return;
    }
    if (activeStep === 0 && previousActiveStep === steps.length) {
      // If the user has completed all steps and hits "Reset", focus the "Next" button.
      nextButtonRef.current.focus();
      return;
    }
  }, [activeStep]);

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button ref={resetButtonRef} onClick={addResume}>
              Finish
            </Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box>{renderStepArrayContent(activeStep)}</Box>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            {activeStep === steps.length - 1 ? (
              <Button onClick={genrateAi}>Generate Skill & Summary</Button>
            ) : (
              <Button onClick={handleNext}>Next</Button>
            )}
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

export default Steps;
