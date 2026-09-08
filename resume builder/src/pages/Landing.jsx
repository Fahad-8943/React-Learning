import React from "react";
import hero from "../assets/image.png";
import image from "../assets/rightImage.jpg";
import photo from "../assets/photo.webp";
import { Link } from "react-router-dom";
function Landing() {
  return (
    <div>
      <section
        style={{
          position: "relative",
          minHeight: "500px",
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "70%",
            padding: "30px",
            textAlign: "center",
            background: "rgba(255, 255, 255, 0.5)",
            borderRadius: "12px",
            zIndex: 10,
          }}
        >
          <div>
            <h1>Designed to get hired</h1>
            <p>Your skills , your story , your next jop -- all in one</p>
            <button
              style={{
                background: "#083B4C",
                borderRadius: ".5rem",
                padding: ".8rem",
              }}
            >
              <Link
                to={'/resume'}
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Make Your Resume
              </Link>
            </button>
          </div>
        </div>
      </section>
      <section className="mb-3 container">
        <h1 style={{ textAlign: "center" }}>tools</h1>
        <div className="row">
          <div className="col-12 col-md-6">
            <h3 className="fw-bold">Resume</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repudiandae, molestiae!
            </p>
            <h3 className="fw-bold">CV</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repudiandae, molestiae!
            </p>
            <h3 className="fw-bold">Jobs</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repudiandae, molestiae!
            </p>
            <h3 className="fw-bold">application</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repudiandae, molestiae!
            </p>
          </div>
          <div className="col-12 col-md-6">
            <img src={image} alt="" />
          </div>
        </div>
      </section>
      <section
        style={{
          position: "relative",
          minHeight: "500px",
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      ></section>
      <section className="m-3">
        <h1 className="text-center mb-5">testimony</h1>
        <div className="row justify-content-center">
          <div className="col-12 col-md-5">
            <h2>Trusted By Proffesionals WorldWide</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo sint
              alias doloribus cumque reiciendis non optio quasi. Modi totam
              dignissimos harum illo ipsam repellat sit, quo eligendi voluptatum
              numquam neque. Vitae atque inventore eum neque amet qui
            </p>
            <p>
              necessitatibus provident itaque deserunt maxime recusandae, esse
              illo eveniet veniam ipsum sequi eius reprehenderit facere!
              Aspernatur debitis vero alias provident nostrum voluptatibus,
              omnis enim iure, sit libero rerum ratione distinctio ab tempore
              ducimus dolores laboriosam molestias eveniet aliquid perferendis
              assumenda voluptatum aliquam? Quidem possimus doloribus excepturi.
            </p>
            Aliquid
            <p>
              ignissimos dolor, ipsum ipsam quo voluptatibus nihil quibusdam
              voluptates numquam. Cum consequuntur nobis earum consectetur
              tempora, hic nulla a voluptatum neque dolore fuga, tenetur
              molestias eligendi ipsam cupiditate delectus reprehenderit? Saepe
              magnam natus tempora assumenda hic ratione voluptatibus corporis
            </p>
          </div>
          <div className="col-12 col-md-5 ">
            <div className="row">
              <div className="col-md-3">
                <img
                  src={photo}
                  alt="feedback users"
                  style={{ width: "100%", margin: ".4rem" }}
                />
              </div>
              <div className="col-md-3">
                <img
                  src={photo}
                  alt="feedback users"
                  style={{ width: "100%", margin: ".4rem" }}
                />
              </div>
              <div className="col-md-3">
                <img
                  src={photo}
                  alt="feedback users"
                  style={{ width: "100%", margin: ".4rem" }}
                />
              </div>
              <div className="col-md-3">
                <img
                  src={photo}
                  alt="feedback users"
                  style={{ width: "100%", margin: ".4rem" }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <img
                  src={photo}
                  alt="feedback users"
                  style={{ width: "100%", margin: ".4rem" }}
                />
              </div>
              <div className="col-md-3">
                <img
                  src={photo}
                  alt="feedback users"
                  style={{ width: "100%", margin: ".4rem" }}
                />
              </div>
              <div className="col-md-3">
                <img
                  src={photo}
                  alt="feedback users"
                  style={{ width: "100%", margin: ".4rem" }}
                />
              </div>
              <div className="col-md-3">
                <img
                  src={photo}
                  alt="feedback users"
                  style={{ width: "100%", margin: ".4rem" }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <img
                  src={photo}
                  alt="feedback users"
                  style={{ width: "100%", margin: ".4rem" }}
                />
              </div>
              <div className="col-md-3">
                <img
                  src={photo}
                  alt="feedback users"
                  style={{ width: "100%", margin: ".4rem" }}
                />
              </div>
              <div className="col-md-3">
                <img
                  src={photo}
                  alt="feedback users"
                  style={{ width: "100%", margin: ".4rem" }}
                />
              </div>
              <div className="col-md-3">
                <img
                  src={photo}
                  alt="feedback users"
                  style={{ width: "100%", margin: ".4rem" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
