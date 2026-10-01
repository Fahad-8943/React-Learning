import React, { useState } from "react";
import AdminHeader from "../components/AdminHeader";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";


function Resource() {
  const [bookList, setBookList] = useState(true);
  const [userList, setUserList] = useState(false);

  const books = [
    {
      id: 1,
      title: "The Da Vinci Code",
      author: "Dan Brown",
      price: "13",
      image:
        "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974762286/one-piece-vol-111-9781974762286_lg.jpg",
    },
  ];

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      {/* HEADER */}
      <div className="shrink-0">
        <AdminHeader />
      </div>

      {/* DASHBOARD BODY */}
      <div className="flex min-h-0 flex-1 flex-col md:flex-row">
        {/* SIDEBAR */}
        <aside className="shrink-0 md:h-full md:w-1/6">
          <Sidebar />
        </aside>

        {/* MAIN CONTENT */}
        <main className="min-h-0 min-w-0 flex-1 overflow-y-auto">
          {/* TABS */}
          <div className="mt-5 flex items-center justify-center">
            <p
              onClick={() => {
                setUserList(false);
                setBookList(true);
              }}
              className={
                bookList
                  ? "cursor-pointer rounded-t border-l border-r border-t border-gray-400 px-3 text-blue-700"
                  : "cursor-pointer border-b border-gray-400 px-3 text-black"
              }
            >
              Book List
            </p>

            <p
              onClick={() => {
                setUserList(true);
                setBookList(false);
              }}
              className={
                userList
                  ? "cursor-pointer rounded-t border-l border-r border-t border-gray-400 px-3 text-blue-700"
                  : "cursor-pointer border-b border-gray-400 px-3 text-black"
              }
            >
              User List
            </p>
          </div>

          {/* BOOK LIST */}
          {bookList && (
            <section className="mx-auto my-6 w-full max-w-6xl px-4 sm:px-6">
              <h1 className="text-center text-2xl font-bold">Book List</h1>

              {/* BOOK GRID */}
              <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
                {books.map((book) => (
                  <div
                    key={book.id}
                    className="rounded-sm border border-gray-200 bg-white p-3 text-center shadow-md"
                  >
                    {/* BOOK DETAILS */}
                    <Link to={`/view/${book.id}/book`}>
                      <img
                        src={book.image}
                        alt={book.title}
                        className="mx-auto h-52 w-full object-cover"
                      />

                      <p className="mt-2 text-xs text-blue-600">
                        {book.author}
                      </p>

                      <h3 className="text-sm font-medium">{book.title}</h3>

                      <p className="text-blue-500">$ {book.price}</p>
                    </Link>

                    {/* APPROVE BUTTON */}
                    <button
                      type="button"
                      className="mt-3 w-full bg-blue-600 py-2 text-xs text-white hover:bg-blue-700"
                    >
                      Approve
                    </button>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* USER LIST */}
          {userList && (
            <section className="mx-auto my-6 w-full max-w-6xl px-4 sm:px-6">
              <h1 className="text-center text-2xl font-bold">All Users</h1>

              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {/* User 1 */}
                <div className="rounded border border-gray-200 bg-white p-4 shadow-md">
                  <div className="flex items-center gap-4">
                    <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-gray-300">
                      <FontAwesomeIcon
                        icon={faUser}
                        className="text-3xl text-gray-500"
                      />
                    </div>

                    <div>
                      <h3 className="font-bold">Jennifer Sue</h3>
                      <p className="text-sm text-gray-500">
                        jennifer@gmail.com
                      </p>
                    </div>
                  </div>
                </div>

                {/* User 2 */}
                <div className="rounded border border-gray-200 bg-white p-4 shadow-md">
                  <div className="flex items-center gap-4">
                    <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-gray-300">
                      <FontAwesomeIcon
                        icon={faUser}
                        className="text-3xl text-gray-500"
                      />
                    </div>

                    <div>
                      <h3 className="font-bold">Jennifer Sue</h3>
                      <p className="text-sm text-gray-500">
                        jennifer@gmail.com
                      </p>
                    </div>
                  </div>
                </div>

                {/* User 3 */}
                <div className="rounded border border-gray-200 bg-white p-4 shadow-md">
                  <div className="flex items-center gap-4">
                    <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-gray-300">
                      <FontAwesomeIcon
                        icon={faUser}
                        className="text-3xl text-gray-500"
                      />
                    </div>

                    <div>
                      <h3 className="font-bold">Jennifer Sue</h3>
                      <p className="text-sm text-gray-500">
                        jennifer@gmail.com
                      </p>
                    </div>
                  </div>
                </div>

                {/* User 4 */}
                <div className="rounded border border-gray-200 bg-white p-4 shadow-md">
                  <div className="flex items-center gap-4">
                    <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-gray-300">
                      <FontAwesomeIcon
                        icon={faUser}
                        className="text-3xl text-gray-500"
                      />
                    </div>

                    <div>
                      <h3 className="font-bold">Jennifer Sue</h3>
                      <p className="text-sm text-gray-500">
                        jennifer@gmail.com
                      </p>
                    </div>
                  </div>
                </div>

                {/* User 5 */}
                <div className="rounded border border-gray-200 bg-white p-4 shadow-md">
                  <div className="flex items-center gap-4">
                    <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-gray-300">
                      <FontAwesomeIcon
                        icon={faUser}
                        className="text-3xl text-gray-500"
                      />
                    </div>

                    <div>
                      <h3 className="font-bold">Jennifer Sue</h3>
                      <p className="text-sm text-gray-500">
                        jennifer@gmail.com
                      </p>
                    </div>
                  </div>
                </div>

                {/* User 6 */}
                <div className="rounded border border-gray-200 bg-white p-4 shadow-md">
                  <div className="flex items-center gap-4">
                    <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-gray-300">
                      <FontAwesomeIcon
                        icon={faUser}
                        className="text-3xl text-gray-500"
                      />
                    </div>

                    <div>
                      <h3 className="font-bold">Jennifer Sue</h3>
                      <p className="text-sm text-gray-500">
                        jennifer@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}

export default Resource;
