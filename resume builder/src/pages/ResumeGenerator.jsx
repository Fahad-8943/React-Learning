import { IoDocumentText } from "react-icons/io5";
import { FaDownload } from "react-icons/fa6";
import { Link } from "react-router-dom";

function ResumeGenerator() {
  return (
    <div className="container-fluid" style={{ marginTop: "100px" }}>
      <h2>create a job winning resume in minutes</h2>
      <div
        style={{ height: "80vh", placeContent: "center" }}
        className="row gap-5"
      >
        <div
          className="col-4 border shadow p-5"
          style={{
            height: "60vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.5rem",
          }}
        >
          <IoDocumentText style={{ color: "blue", fontSize: "2rem" }} />
          <h3>Add Your Information</h3>
          <p>Add pre-written examples to each section</p>
          <p className="fs-4 fw-bold">Step 1</p>
        </div>

        <div
          className="col-4 border shadow p-5"
          style={{
            height: "60vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.5rem",
          }}
        >
          <FaDownload style={{ color: "red", fontSize: "2rem" }} />
          <h3>Download your Resume</h3>
          <p>Download and start applying</p>
          <p className="fs-4 fw-bold">Step 2</p>
        </div>
      </div>
      <div style={{ padding: "1rem", textAlign: "center" }}>
        <Link
          to={"/form"}
          style={{
            textDecoration: "none",
            color: "white",
            background: "black",
            padding: "1rem",
          }}
        >
          Let's Start
        </Link>
      </div>
    </div>
  );
}

export default ResumeGenerator;
