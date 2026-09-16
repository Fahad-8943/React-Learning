import React from "react";
import Header from "../components/Header";
import { FaHeartCircleXmark } from "react-icons/fa6";
import { BiSolidCartAdd } from "react-icons/bi";
import Card from "react-bootstrap/Card";

function Wishlist() {
  return (
    <>
      <Header />
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <Card className="h-100 border-0 shadow-sm rounded-4 overflow-hidden">
              <Card.Img
                variant="top"
                src="holder.js/100px180"
                className="bg-body-tertiary p-3"
              />
              <Card.Body className="d-flex flex-column p-4">
                <Card.Title className="h5 fw-bold">Card Title</Card.Title>
                <Card.Text className="text-secondary">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <div className="d-flex gap-2 mt-auto">
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    aria-label="Remove from wishlist"
                  >
                    <FaHeartCircleXmark size={20} />
                  </button>
                  <button
                    type="button"
                    className="btn btn-success"
                    aria-label="Add to cart"
                  >
                    <BiSolidCartAdd size={20} />
                  </button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wishlist;
