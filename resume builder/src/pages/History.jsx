import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { MdDelete } from "react-icons/md";

function History() {
  return (
    <div style={{ marginTop: "100px" }}>
      <Box component="section" className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <Paper elevation={3} sx={{ my: 5, p: 5, textAlign: "center" }}>
              <div className="">
                <div className="d-flex gap-2 align-items-center justify-content-between">
                  <h6>review at : 4/6/2025 , 4:17:17 PM </h6>
                  <button className="btn text-danger">
                    <MdDelete />
                  </button>
                </div>
              </div>
              <div>
                <img src="" alt="" />
              </div>
            </Paper>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default History;
