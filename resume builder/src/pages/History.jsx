import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { MdDelete } from "react-icons/md";
import {
  deleteDownloadHistoryAPI,
  getDownloadedResumeAPI,
} from "../services/allApi";
import { Link } from "react-router-dom";

function History() {
  const [downloads, setDownloads] = useState([]);
  useEffect(() => {
    getDownloadedResume();
  }, []);
  const getDownloadedResume = async () => {
    const responce = await getDownloadedResumeAPI();
    // console.log(responce.data);
    setDownloads(responce.data);
  };

  const removeHistory = async (id) => {
    const responce = await deleteDownloadHistoryAPI(id);
    console.log(responce);
    getDownloadedResume();
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <div>
        <h1>Downloaded Resume</h1>
        <Link
          to={"/"}
          style={{ marginTop: "-40px", marginRight: "20px" }}
          className="float-end"
        >
          Back
        </Link>
      </div>
      <Box component="section" className="container-fluid">
        <div className="row">
          {downloads?.length > 0 ? (
            downloads?.map((download) => (
              <div className="col-md-4">
                <Paper elevation={3} sx={{ my: 5, p: 5, textAlign: "center" }}>
                  <div className="">
                    <div className="d-flex gap-2 align-items-center justify-content-between">
                      <h6>review at :{download.timeStamb}</h6>
                      <button
                        className="btn text-danger"
                        onClick={() => removeHistory(download.id)}
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </div>
                  <div>
                    {
                      <Link to={`/resume/${download.resumeId}/view`}>
                        <img
                          src={download.resumeImg}
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                    }
                  </div>
                </Paper>
              </div>
            ))
          ) : (
            <p className="text-center text-danger ">NO Resume Downloaded yet</p>
          )}
        </div>
      </Box>
    </div>
  );
}

export default History;
