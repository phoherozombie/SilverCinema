"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.svg";
import userProf from "../../public/user.svg";
import dropdown from "../../public/dropdown.svg";
import SignUpModal from "../SignupModal";
import LoginModal from "../LoginModal";
import "../../styles/styles.css";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
  
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  
    const handleUserLoggedIn = () => {
      setIsLoggedIn(true);
      setUser(localStorage.getItem("user"));
    };
  
    window.addEventListener("userLoggedIn", handleUserLoggedIn);
  
    return () => {
      window.removeEventListener("userLoggedIn", handleUserLoggedIn);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const [modalsActive, setModalsActive] = useState({
    login: false,
    signup: false,
  });

  const toggleModal = (modalName) => {
    setModalsActive((prevState) => ({
      ...prevState,
      [modalName]: !prevState[modalName], // Toggle the modal's state
    }));
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Image src={logo} alt="Logo" width={50} height={50} />
        <h1>SILVER CINEMA</h1>
      </div>
      <ul className="navbar-links">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/showtimes">Showtimes</Link>
        </li>
        <li>
          <Link href="/about-us">About Us</Link>
        </li>
      </ul>
      <div className="navbar-profile">
        {isLoggedIn ? (
          <>
            <Link href="/user-profile">
              <Image src={userProf} alt="User Profile" width={30} height={30} />
            </Link>
            <button className="dropdown-button" onClick={toggleDropdown}>
              <Image src={dropdown} alt="Dropdown" width={30} height={30} />
            </button>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <button
                  onClick={() => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("user");
                    setIsLoggedIn(false);
                    setUser(null);
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
          </>
        ) : (
          <>
            <button className="access-service-button">Access Service</button>
            <button className="dropdown-button" onClick={toggleDropdown}>
              <Image src={dropdown} alt="Dropdown" width={30} height={30} />
            </button>
            
            {dropdownOpen && (
              <div className="dropdown-menu">
                <button onClick={() => toggleModal("login")}>Sign In</button>
                <button onClick={() => toggleModal("signup")}>Sign Up</button>
              </div>
            )}
          </>
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
