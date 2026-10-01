import React, { useEffect, useState } from "react";
import UserHeader from "../components/UserHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCamera,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router";

function ViewBook() {
  const [showImages, setShowImages] = useState(false);
  useEffect(() => {
    console.log(showImages);
  });

  return (
    <div>
      <UserHeader />
      <section className="mx-auto mt-5 w-full max-w-6xl px-4">
        {/* Book Card */}
        <div className="grid grid-cols-1 gap-6 border border-gray-200 bg-white p-5 shadow-md md:grid-cols-3">
          {/* Book Image */}
          <div className="flex items-start justify-center">
            <img
              src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974762286/one-piece-vol-111-9781974762286_lg.jpg"
              alt="The Da Vinci Code"
              className="h-80 w-55 object-cover"
            />
          </div>

          {/* Book Details */}
          <div className="md:col-span-2">
            {/* Title + Eye */}
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold">
                Ikigai: The Japanese Secret to a Long and Happy Life
              </h1>

              <button onClick={() => setShowImages(true)}>
                <FontAwesomeIcon icon={faEye} className="text-gray-400" />
              </button>
            </div>

            {/* Author */}
            <p className="mt-1 text-sm text-blue-600">
              - Hector Garcia, Francesc Miralles
            </p>

            {/* Book Information */}
            <div className="mt-6 grid grid-cols-1 gap-4 text-sm sm:grid-cols-3">
              {/* Column 1 */}
              <div>
                <p>
                  <span className="font-semibold">Publisher:</span> Penguin Life
                </p>

                <p className="mt-2">
                  <span className="font-semibold">Seller Mail:</span>{" "}
                  sample@gmail.com
                </p>
              </div>

              {/* Column 2 */}
              <div>
                <p>
                  <span className="font-semibold">Language:</span> English
                </p>

                <p className="mt-2">
                  <span className="font-semibold">Real Price:</span> $15
                </p>
              </div>

              {/* Column 3 */}
              <div>
                <p>
                  <span className="font-semibold">No. of Pages:</span> 206
                </p>

                <p className="mt-2">
                  <span className="font-semibold">ISBN:</span> 9780143130727
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="mt-6 text-sm leading-relaxed text-gray-700">
              Ikigai is a Japanese concept that combines the words "iki" and
              "gai" and explores the idea of finding purpose and meaning in
              everyday life. The book explains how discovering your ikigai can
              lead to a longer, happier and more meaningful life. It explores
              Japanese culture, lifestyle, relationships, purpose and the habits
              that contribute to happiness and longevity.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex justify-end gap-4">
              <Link to={"/all-books"}>
                <button className="flex items-center gap-2 rounded bg-indigo-500 px-5 py-2 text-sm text-white hover:bg-indigo-600">
                  <FontAwesomeIcon icon={faArrowLeft} />
                  Back
                </button>
              </Link>

              <button className="rounded bg-green-600 px-5 py-2 text-sm text-white hover:bg-green-700">
                Buy $13
              </button>
            </div>
          </div>
        </div>
      </section>
      {showImages && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setShowImages(false)}
        >
          <div
            className="relative w-full max-w-2xl overflow-hidden rounded bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-slate-800 px-4 py-3 text-white">
              <h3 className="font-semibold">Book Photos</h3>

              <button
                onClick={() => setShowImages(false)}
                className="text-lg hover:text-red-400"
              >
                ✕
              </button>
            </div>

            {/* Description */}
            <div className="flex items-center gap-2 px-4 py-3 text-sm text-blue-700">
              <FontAwesomeIcon icon={faCamera} />

              <p>Camera click of the book on the hand of seller</p>
            </div>

            {/* Book Images */}
            <div className="grid max-h-125 overflow-y-auto grid-cols-1 gap-4 p-6 sm:grid-cols-2">
              <div className="flex items-center justify-center rounded border bg-gray-50 p-3">
                <img
                  src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974762286/one-piece-vol-111-9781974762286_lg.jpg"
                  alt="Book preview 1"
                  className="h-64 w-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center rounded border bg-gray-50 p-3">
                <img
                  src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974762286/one-piece-vol-111-9781974762286_lg.jpg"
                  alt="Book preview 1"
                  className="h-64 w-full object-contain"
                />
              </div>
              
             

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewBook;
