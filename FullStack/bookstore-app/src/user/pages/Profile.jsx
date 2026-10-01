import React, { useState } from "react";
import UserHeader from "../components/UserHeader";
import { faUser, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

function Profile() {
  const [sellBookStatus, setSellBookStatus] = useState(true);
  const [bookStatus, setBookStatus] = useState(false);
  const [purchaseStatus, setPurchaseStatus] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <UserHeader />

      {/* Profile Header */}
      <div className="relative">
        {/* Blue Cover */}
        <div className="h-50 w-full bg-blue-950"></div>

        {/* White Profile Area */}
        <div className="h-65 w-full bg-white"></div>

        {/* Profile Image */}
        <div className="absolute left-10 top-25 flex h-48 w-48 items-center justify-center rounded-full border-8 border-white bg-white shadow-md">
          <FontAwesomeIcon icon={faUser} className="text-8xl text-gray-500" />
        </div>

        {/* User Information */}
        <div className="absolute left-65 top-52">
          <h1 className="text-2xl font-bold">User Name</h1>

          <p className="mt-2 max-w-xl text-gray-600">
            Book lover | Reading enthusiast | Always looking for my next great
            story.
          </p>
        </div>

        {/* Edit Profile Button */}
        <button className="absolute bottom-8 right-10 flex items-center gap-2 rounded-md bg-blue-900 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-blue-800">
          <FontAwesomeIcon icon={faPenToSquare} />
          Edit Profile
        </button>
      </div>

      <div className="flex items-center justify-center">
        <p
          onClick={() => {
            setSellBookStatus(true);
            setBookStatus(false);
            setPurchaseStatus(false);
          }}
          className={
            sellBookStatus
              ? "text-blue-700 px-3 border-gray-400 border-t border-l rounded-t  border-r"
              : "text-black px-3 border-gray-400 border-b"
          }
        >
          Sell Book
        </p>
        <p
          onClick={() => {
            setSellBookStatus(false);
            setBookStatus(true);
            setPurchaseStatus(false);
          }}
          className={
            bookStatus
              ? "text-blue-700 px-3 border-gray-400 border-t border-l border-r rounded-t "
              : "text-black px-3 border-gray-400 border-b"
          }
        >
          Book Status
        </p>
        <p
          onClick={() => {
            setSellBookStatus(false);
            setBookStatus(false);
            setPurchaseStatus(true);
          }}
          className={
            purchaseStatus
              ? "text-blue-700 px-3 border-gray-400 border-t border-l rounded-t  border-r"
              : "text-black px-3 border-gray-400 border-b "
          }
        >
          Purchase Status
        </p>
      </div>

      {sellBookStatus && (
        <div className="mt-8 mx-2 md:mx-auto w-auto md:w-[70%] rounded-2xl bg-blue-900 p-5 text-white">
          <div className="text-center font-bold">
            <h1 className="text-4xl">Book Details</h1>
          </div>

          <div className="flex items-center justify-center">
            <form className="flex w-full flex-col gap-2 md:flex-row">
              {/* LEFT COLUMN */}
              <div className="flex w-full flex-col md:w-1/2">
                <input
                  type="text"
                  placeholder="Title"
                  className="m-2 rounded bg-white p-2 text-gray-500"
                />

                <input
                  type="text"
                  placeholder="Author"
                  className="m-2 rounded bg-white p-2 text-gray-500"
                />

                <input
                  type="text"
                  placeholder="No. of Pages"
                  className="m-2 rounded bg-white p-2 text-gray-500"
                />

                <input
                  type="text"
                  placeholder="Image URL"
                  className="m-2 rounded bg-white p-2 text-gray-500"
                />

                <input
                  type="text"
                  placeholder="Price"
                  className="m-2 rounded bg-white p-2 text-gray-500"
                />

                <input
                  type="text"
                  placeholder="Discount Price"
                  className="m-2 rounded bg-white p-2 text-gray-500"
                />

                <textarea
                  placeholder="Abstract"
                  className="m-2 rounded bg-white p-2 text-gray-500"
                  rows="3"
                />
              </div>

              {/* RIGHT COLUMN */}
              <div className="flex w-full flex-col md:w-1/2">
                <input
                  type="text"
                  placeholder="Publisher"
                  className="m-2 rounded bg-white p-2 text-gray-500"
                />

                <input
                  type="text"
                  placeholder="Language"
                  className="m-2 rounded bg-white p-2 text-gray-500"
                />

                <input
                  type="text"
                  placeholder="ISBN"
                  className="m-2 rounded bg-white p-2 text-gray-500"
                />

                <input
                  type="text"
                  placeholder="Category"
                  className="m-2 rounded bg-white p-2 text-gray-500"
                />

                <div className="flex items-center justify-center">
                  <label htmlFor="file" className="cursor-pointer">
                    <FontAwesomeIcon icon={faUpload} className="text-8xl" />
                  </label>

                  <input type="file" id="file" className="hidden" />
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
      {bookStatus && (
        <div className="mx-auto mt-8 w-full rounded-2xl p-5 shadow md:w-[70%]">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-[3fr_1fr]">
            {/* Book Details */}
            <div className="flex flex-col px-4">
              <h1 className="text-2xl font-bold">Book Title</h1>

              <h3 className="mt-1 text-lg">Book Author</h3>

              <h3 className="mt-1 text-blue-600">$14.99</h3>

              <p className="mt-2 text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                magni unde distinctio recusandae quas voluptate, impedit
                delectus mollitia. Est deserunt minima amet consectetur tenetur
                optio? Sit eaque doloribus nulla voluptas.
              </p>

              {/* Status + Delete */}
              <div className="mt-auto flex items-center justify-between pt-5">
                {/* Status */}
                <div className="flex items-center gap-3">
                  {/* Pending */}
                  <div className="flex items-center gap-2 rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-700">
                    <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
                    Pending
                  </div>

                  {/* Approved */}
                  <div className="flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                    <span className="h-3 w-3 rounded-full bg-green-500"></span>
                    Approved
                  </div>
                </div>

                {/* Delete */}
                <button className="rounded bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">
                  Delete
                </button>
              </div>
            </div>

            {/* Book Image */}
            <div className="flex items-center justify-center">
              <img
                src="https://i.pinimg.com/736x/b7/ab/78/b7ab78298c893bef49b394824ad14804.jpg"
                alt="Book"
                className="h-48 w-36 rounded object-cover"
              />
            </div>
          </div>
        </div>
      )}
      {purchaseStatus && (
        <div className="mx-auto mt-8 w-full rounded-2xl p-5 shadow md:w-[70%]">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-[3fr_1fr]">
            {/* Book Details */}
            <div className="flex flex-col px-4">
              <h1 className="text-2xl font-bold">Book Title</h1>

              <h3 className="mt-1 text-lg">Book Author</h3>

              <h3 className="mt-1 text-blue-600">$14.99</h3>
             
              <div className="mt-auto flex items-center justify-between pt-5">
                {/* Status */}
                <div className="flex items-center gap-3">
                  {/* sold */}
                  <div className="flex items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-sm text-yellow-700">
                    <span className="h-3 w-3 rounded-full bg-red-500"></span>
                    sold
                  </div>
                </div>
              </div>
            </div>

            {/* Book Image */}
            <div className="flex items-center justify-center">
              <img
                src="https://i.pinimg.com/736x/b7/ab/78/b7ab78298c893bef49b394824ad14804.jpg"
                alt="Book"
                className="h-48 w-36 rounded object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
