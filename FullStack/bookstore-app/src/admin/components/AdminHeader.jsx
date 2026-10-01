import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function AdminHeader() {
  return (
    <>
      <div className="grid grid-cols-2 p-3">
        <div className="flex items-center">
          <img src="https://bookstore-wine-nu.vercel.app/logo.png" alt="" />
          <h1 className="text-3xl font-bold ms-3 ">BOOKSTORE</h1>
        </div>

        <div className="md:flex justify-end gap-5 items-center hidden">
          <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
          <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
          <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
          <Link className="border border-black rounded py-2 px-3">
            {" "}
            <FontAwesomeIcon icon={faUser} /> Logout
          </Link>
        </div>
      </div>
      <div className="flex w-full bg-black text-white">
        <marquee behavior="Scroll" direction="">
          Welcome, Admin You're all set to manage and monitor the system. Let's
          get to work!
        </marquee>
      </div>
    </>
  );
}

export default AdminHeader;
