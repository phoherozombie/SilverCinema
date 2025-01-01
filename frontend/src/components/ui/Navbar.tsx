"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.svg";
import userProf from "../../public/user.svg";
import dropdown from "../../public/dropdown.svg";
import SignUpModal from "../SignupModal";
import SignInModal from "../LoginModal";
import "../../styles/styles.css";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const openSignUpModal = () => {
    setIsSignUpOpen(true);
    setDropdownOpen(false);
  };

  const openSignInModal = () => {
    setIsSignInOpen(true);
    setDropdownOpen(false);
  };

  const closeSignUpModal = () => {
    setIsSignUpOpen(false);
  };

  const closeSignInModal = () => {
    setIsSignInOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Image src={logo} alt="Logo" width={50} height={50} />
        <h1>SILVER CINEMA</h1>
      </div>
      <ul className="navbar-links">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/showtimes">Showtimes</Link></li>
        <li><Link href="/about-us">About Us</Link></li>
      </ul>
      <div className="navbar-profile">
        <Link href="/user-profile">
          <Image src={userProf} alt="User Profile" width={30} height={30} />
        </Link>
        <button className="dropdown-button" onClick={toggleDropdown}>
          <Image src={dropdown} alt="Dropdown" width={30} height={30} />
        </button>
        {dropdownOpen && (
          <div className="dropdown-menu">
            <button onClick={openSignUpModal}>Sign Up</button>
            <button onClick={openSignInModal}>Sign In</button>
          </div>
        )}
      </div>
      <SignUpModal isOpen={isSignUpOpen} onClose={closeSignUpModal} />
      <SignInModal isOpen={isSignInOpen} onClose={closeSignInModal} />
    </nav>
  );
};

export default Navbar;