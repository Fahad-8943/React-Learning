import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Card from "react-bootstrap/Card";
import { Link } from "react-router";
import { fetchProducts } from "../redux/slice/productSlice";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import Pagination from "../components/Pagination";

function Landing() {
  const { loading, allProducts, error } = useSelector((state) => state.product);
  console.log(loading, allProducts, error);
  const [currentPage, setCurrentPage] = useState(1);
  const cardPerPage = 8;
  const endingIndex = currentPage * cardPerPage;
  const startingIndex = endingIndex - cardPerPage;
  const currentProducts = allProducts.slice(startingIndex, endingIndex);
  const totalPages = Math.ceil(allProducts.length / cardPerPage);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    setCurrentPage(1);
  }, [allProducts]);
  return (
    <>
      <Header inLading={true}></Header>
      {loading ? (
        <div className="text-center my-5 fs-1">
          <Spinner animation="border" variant="secondary" />
        </div>
      ) : (
        <div className="container my-5">
          <div className="row">
            {currentProducts?.length > 0 ? (
              currentProducts?.map((pro) => (
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <Card className="h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                    <Card.Img
                      variant="top"
                      src={pro.thumbnail}
                      className="bg-body-tertiary p-3"
                    />
                    <Card.Body className="d-flex flex-column p-4">
                      <p
                        style={{ textTransform: "capitalize" }}
                        className="text-success fw-bold"
                      >
                        {pro.category}
                      </p>
                      <Card.Title className="h5 fw-bold">
                        {pro.title.slice(0, 15)}
                      </Card.Title>
                      <Card.Text className="text-secondary">
                        {pro.description}
                      </Card.Text>
                      <Link
                        to={`/product/${pro.id}/view`}
                        className="btn btn-success mt-auto"
                      >
                        View More...
                      </Link>
                    </Card.Body>
                  </Card>
                </div>
              ))
            ) : (
              <div className="text-center my-5 fs-1">
                <p>NO PRODUCT FOUND</p>
              </div>
            )}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </>
  );
}

export default Landing;
