import React, { useEffect, useRef, useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { FaFileDownload } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import Edit from "../components/Edit";
import Preview from "../components/Preview";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { addDownloadHistory, getSingleResume } from "../services/allApi";
import html2canvas from "html2canvas";
import jspdf from "jspdf";

function ViewResume() {
  const [resumeData, setResumeData] = useState({});
  const { id } = useParams();
  // console.log(id);
  useEffect(() => {
    getResumeData();
  }, []);

  const previewRef = useRef(); //current

  const downloadResume = async () => {
    const previewTag = previewRef.current;
    const canvas = await html2canvas(previewTag);
    // convet image url to short url
    canvas.toBlob(async (blob) => {
      // creating object for form data class
      const formData = new FormData();
      formData.append("file", blob);
      formData.append("upload_preset", "my_preset");
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/yubd1hrz/image/upload",
        {
          method: "POST",
          body: formData,
        },
      );
      const data = await res.json();

      const imageUrl = data.secure_url;
      console.log(imageUrl);
      generatePdf(imageUrl);
    });
  };

  const generatePdf = async (imgUrl) => {
    const today = new Date();
    console.log(today);
    const timeStamb = `${today.toLocaleDateString()},${today.toLocaleTimeString()}`;
    console.log(timeStamb);
    const pdf = new jspdf();
    const imageWidth = pdf.internal.pageSize.getWidth();
    const imageHeight = pdf.internal.pageSize.getHeight();
    pdf.addImage(imgUrl, "PNG", 0, 0, imageWidth, imageHeight);
    const downloadDetails = {
      timeStamb,
      resumeImg: imgUrl,
      resumeId: id,
      jobRole: resumeData.job,
    };
    const responce = await addDownloadHistory(downloadDetails);
    console.log(responce);

    pdf.save("resueme.pdf");
    // if(responce)
  };

  const getResumeData = async () => {
    if (id) {
      const responce = await getSingleResume(id);
      // console.log(responce);
      setResumeData(responce.data);
    }
  };

  return (
    <div className="container my-5">
      <div className="row my-5">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <Stack
            direction={"row"}
            sx={{ justifyContent: "center", alignItems: "center", }}
          >
            {/* download */}
            <Button className="btn fs-5 text-danger" onClick={downloadResume}>
              <FaFileDownload />{" "}
            </Button>
            {/* edit */}
            <Edit resumeData={resumeData} setResumeData={setResumeData} />

            {/* history */}
            <Link to={"/history"} className=" fs-5 text-success ms-2">
              <FaHistory />{" "}
            </Link>

            {/* back */}
            <Link to={"/form"} className="fs-5 text-primary ms-3">
              <IoMdArrowBack />{" "}
            </Link>
          </Stack>
          <div ref={previewRef}>
            <Preview resumeData={resumeData} />
          </div>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  );
}

export default ViewResume;
