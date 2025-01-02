"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import userProf from "../../public/user.svg";
import dropdown from "../../public/dropdown.svg";
import SignUpModal from "../modals/SignupModal";
import LoginModal from "../modals/LoginModal";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modalsActive, setModalsActive] = useState({
    login: false,
    signup: false,
  });

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleModal = (modalName: "login" | "signup") => {
    setModalsActive((prevState) => ({
      ...prevState,
      [modalName]: !prevState[modalName],
    }));
  };

  return (
    <nav className="bg-primary text-white px-4 py-4 flex items-center justify-between text-lg fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="flex items-center space-x-4">
        <Link href="/" legacyBehavior>
          <a className="footer-logo-container flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="footer-logo-icon w-15 h-15"
              viewBox="0 0 512 512"
            >
              <path
                d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="32"
              />
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
                d="M360 94.59V296M443.13 212.87L296 360M417.41 360H216M299.13 443.13l-144-144M152 416V216M68.87 299.13l144-144M94.59 152H288M212.87 68.87L360 216"
              />
            </svg>
            <h1 className="footer-logo-text text-[25px] font-semibold">SilverScreen</h1>
          </a>
        </Link>
      </div>

      <ul className="flex space-x-6 items-center ml-4">
        <li>
          <Link
            href="/"
            className="text-white text-[20px] font-normal rounded-lg px-4 py-2 transition-all duration-300 ease-in hover:bg-red-500"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/showtimes"
            className="text-white text-[20px] font-normal rounded-lg px-4 py-2 transition-all duration-300 ease-in hover:bg-red-500"
          >
            Showtimes
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-white text-[20px] font-normal rounded-lg px-4 py-2 transition-all duration-300 ease-in hover:bg-red-500"
          >
            About Us
          </Link>
        </li>
      </ul>

      <div className="flex items-center space-x-3 relative">
        <Link href="/customer_info">
          <Image
            src={userProf}
            alt="User Profile"
            width={35}
            height={35}
            className="cursor-pointer"
          />
        </Link>
        <button onClick={toggleDropdown} className="flex items-center">
          <Image src={dropdown} alt="Dropdown" width={30} height={30} />
        </button>
        {dropdownOpen && (
          <div className="absolute top-14 right-0 bg-white text-black rounded-lg shadow-lg flex flex-col min-w-[150px]">
            <button
              onClick={() => toggleModal("signup")}
              className="text-gray-800 px-4 py-2 text-lg flex justify-center items-center hover:bg-red-500 hover:text-white rounded-lg transition-colors duration-300"
            >
              Sign Up
            </button>
            <button
              onClick={() => toggleModal("login")}
              className="text-gray-800 px-4 py-2 text-lg flex justify-center items-center hover:bg-red-500 hover:text-white rounded-lg transition-colors duration-300"
            >
              Sign In
            </button>
          </div>
        )}
      </div>

      {modalsActive.login && (
        <LoginModal onClose={() => toggleModal("login")} />
      )}
      {modalsActive.signup && (
        <SignUpModal onClose={() => toggleModal("signup")} />
      )}
    </nav>
  );
};

export default Navbar;
