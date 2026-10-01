import React from "react";
import UserHeader from "../components/UserHeader";
import { Link } from "react-router";

function AllBooks() {
  
  return (
    <div>
      <UserHeader />
      <section className="mx-auto mt-6 max-w-6xl px-6">
        {/* Heading */}
        <h1 className="text-center text-2xl font-bold">Collections</h1>

        {/* Search */}
        <div className="mx-auto mt-4 flex w-full max-w-md">
          <input
            type="search"
            placeholder="Search by Title"
            className="w-full border border-gray-200 px-4 py-2 text-sm outline-none focus:border-blue-500"
          />

          <button className="w-24 bg-blue-700 px-4 py-2 text-sm text-white hover:bg-blue-800">
            Search
          </button>
        </div>

        {/* Content */}
        <div className="mt-5 grid grid-cols-1 gap-8 md:grid-cols-[150px_1fr]">
          {/* Filters */}
          <div>
            <h2 className="mb-4 text-lg font-medium">Filters</h2>

            <div className="space-y-3 text-sm text-gray-700">
              <label className="flex items-center gap-2">
                <input type="radio" name="category" />
                Literary Fiction
              </label>

              <label className="flex items-center gap-2">
                <input type="radio" name="category" />
                Philosophy
              </label>

              <label className="flex items-center gap-2">
                <input type="radio" name="category" />
                Romance
              </label>

              <label className="flex items-center gap-2">
                <input type="radio" name="category" />
                Mystery/Thriller
              </label>

              <label className="flex items-center gap-2">
                <input type="radio" name="category" />
                Horror
              </label>

              <label className="flex items-center gap-2">
                <input type="radio" name="category" />
                Auto/Biography
              </label>

              <label className="flex items-center gap-2">
                <input type="radio" name="category" />
                Self-Help
              </label>

              <label className="flex items-center gap-2">
                <input type="radio" name="category" />
                Politics
              </label>
            </div>
          </div>

          {/* Books */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Book 1 */}
            <Link to={"/view/:id/book"}>
              <div className="rounded-sm border border-gray-200 bg-white p-3 text-center shadow-md">
                <img
                  src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974762286/one-piece-vol-111-9781974762286_lg.jpg"
                  alt="The Da Vinci Code"
                  className="mx-auto h-52.2 w-full object-cover"
                />

                <p className="mt-2 text-xs text-blue-600">Dan Brown</p>

                <h3 className="text-sm font-medium">The Da Vinci Code</h3>

                <button className="mt-3 w-full bg-blue-600 py-2 text-xs text-white hover:bg-blue-700">
                  Buy - $13
                </button>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AllBooks;
