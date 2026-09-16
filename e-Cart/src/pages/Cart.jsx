import React from "react";
import Header from "../components/Header";
import { FaTrash } from "react-icons/fa";

function Cart() {
  const product = {
    title: "Classic Watch",
    price: 129.99,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  };

  return (
    <>
      <Header />

      <main className="container py-5">

        {/* Heading */}
        <h1
          className="fw-bold mb-5"
          style={{
            fontSize: "38px",
            color: "#B9A5FF",
          }}
        >
          Cart Summary
        </h1>

        <div className="row g-5">

          {/* Cart Items */}
          <div className="col-12 col-lg-8">

            <div
              className="table-responsive"
              style={{
                backgroundColor: "#362066",
              }}
            >
              <table
                className="table align-middle"
                style={{
                  backgroundColor: "#362066",
                }}
              >

                <thead>
                  <tr>
                    <th
                      className="py-3"
                      style={{ minWidth: "50px" }}
                    >
                      #
                    </th>

                    <th
                      className="py-3"
                      style={{ minWidth: "180px" }}
                    >
                      Title
                    </th>

                    <th
                      className="py-3"
                      style={{ minWidth: "100px" }}
                    >
                      Image
                    </th>

                    <th
                      className="py-3 text-center"
                      style={{ minWidth: "170px" }}
                    >
                      Quantity
                    </th>

                    <th
                      className="py-3"
                      style={{ minWidth: "100px" }}
                    >
                      Price
                    </th>

                    <th
                      className="py-3 text-center"
                      style={{ minWidth: "90px" }}
                    >
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>

                  <tr>

                    {/* Number */}
                    <td className="fw-semibold">
                      1
                    </td>

                    {/* Title */}
                    <td>
                      <span
                        className="fw-semibold"
                        style={{
                          fontSize: "17px",
                        }}
                      >
                        {product.title}
                      </span>
                    </td>

                    {/* Image */}
                    <td>
                      <img
                        src={product.image}
                        alt={product.title}
                        style={{
                          width: "70px",
                          height: "85px",
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                      />
                    </td>

                    {/* Quantity */}
                    <td>
                      <div className="d-flex justify-content-center align-items-center gap-2">

                        <button
                          type="button"
                          className="btn btn-sm"
                          style={{
                            width: "35px",
                            height: "35px",
                            border: "1px solid #362066",
                            color: "#362066",
                            borderRadius: "8px",
                          }}
                        >
                          −
                        </button>

                        <span
                          className="fw-semibold text-center"
                          style={{
                            minWidth: "30px",
                            fontSize: "17px",
                          }}
                        >
                          {product.quantity}
                        </span>

                        <button
                          type="button"
                          className="btn btn-sm"
                          style={{
                            width: "35px",
                            height: "35px",
                            border: "1px solid #362066",
                            color: "#362066",
                            borderRadius: "8px",
                          }}
                        >
                          +
                        </button>

                      </div>
                    </td>

                    {/* Price */}
                    <td>
                      <span
                        className="fw-semibold"
                        style={{
                          color: "#362066",
                          fontSize: "17px",
                        }}
                      >
                        ${product.price.toFixed(2)}
                      </span>
                    </td>

                    {/* Delete */}
                    <td className="text-center">
                      <button
                        type="button"
                        className="btn border-0 bg-transparent p-0"
                        style={{
                          color: "#FF3B5C",
                        }}
                      >
                        <FaTrash size={22} />
                      </button>
                    </td>

                  </tr>

                </tbody>

              </table>

            </div>

          </div>

          {/* Checkout Summary */}
          <div className="col-12 col-lg-4">

            <div
              className="p-4 rounded-4"
              style={{
                backgroundColor: "#362066",
                color: "white",
              }}
            >

              <h2
                className="fw-bold mb-4"
                style={{
                  fontSize: "28px",
                }}
              >
                Checkout
              </h2>

              {/* Total Items */}
              <div className="d-flex justify-content-between mb-3">
                <span
                  style={{
                    fontSize: "17px",
                    color: "#D6D2DE",
                  }}
                >
                  Total Items
                </span>

                <span
                  className="fw-semibold"
                  style={{
                    fontSize: "18px",
                  }}
                >
                  1
                </span>
              </div>

              {/* Total Amount */}
              <div className="d-flex justify-content-between mb-4">
                <span
                  style={{
                    fontSize: "17px",
                    color: "#D6D2DE",
                  }}
                >
                  Total Amount
                </span>

                <span
                  className="fw-bold"
                  style={{
                    fontSize: "22px",
                    color: "#B9A5FF",
                  }}
                >
                  ${product.price.toFixed(2)}
                </span>
              </div>

              {/* Checkout Button */}
              <button
                type="button"
                className="btn w-100 fw-bold"
                style={{
                  backgroundColor: "#35D07F",
                  color: "#29233A",
                  borderRadius: "10px",
                  padding: "13px",
                  fontSize: "18px",
                  border: "none",
                }}
              >
                Checkout
              </button>

            </div>

          </div>

        </div>

      </main>
    </>
  );
}

export default Cart;