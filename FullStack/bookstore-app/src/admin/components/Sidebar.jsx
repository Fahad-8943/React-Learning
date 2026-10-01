import {
  faBook,
  faGear,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router";

function Sidebar() {
  return (
    <div className="flex h-full min-h-full flex-col items-center justify-start bg-blue-300 px-3 py-20">
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="flex size-35 items-center justify-center rounded-full border-4 border-white bg-black shadow-md">
          <FontAwesomeIcon icon={faUser} className="text-7xl text-white" />
        </div>

        <h3 className="font-black">Bookstore Admin</h3>
      </div>

      <nav className="mt-9 flex flex-col items-center justify-center gap-4 font-bold">
        <Link to="/admin-dashboard">
          <FontAwesomeIcon icon={faHome} /> Home
        </Link>

        <Link to="/admin-resource">
          <FontAwesomeIcon icon={faBook} /> All Books
        </Link>

        <Link to="/admin-settings">
          <FontAwesomeIcon icon={faGear} /> Settings
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;
