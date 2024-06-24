import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-between shadow-lg">
      <div className="text-white shadow-lg text-xl font-bold">Digitrone</div>
      <div className="flex items-center rounded-md shadow-md overflow-hidden">
        <input
          type="text"
          placeholder="Recherchez un événement..."
          className="p-2 flex-grow outline-none text-sm w-60"
        />
        <div className="p-2 bg-gray-700 flex items-center justify-center">
          <FontAwesomeIcon icon={faSearch} className="text-white w-5 h-5" />
        </div>
      </div>
      <div className="flex space-x-4 text-white text-sm font-medium">
        <Link href="#">Organiser un évènement</Link>
        <Link href="#">Contact</Link>
        <Link href="#">Se connecter</Link>
      </div>
    </nav>
  );
};

export default Navbar;
