"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import React from "react";
import { HashLoader } from "react-spinners";
import "../../styles/styles.css";
import { fetchTheatres } from "../../utils/api/theatres";
import SignUpModal from "../modals/SignupModal";
import LoginModal from "../modals/LoginModal";

const Footer = () => {
  const [theatres, setTheatres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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

  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchData = async () => {
      try {
        const data = await fetchTheatres(); // Fetch theatres from the backend
        setTheatres(data); // Set theatres data to state
      } catch (error) {
        console.error("Failed to fetch theatres", error);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }

    const handleUserLoggedIn = () => {
      setIsLoggedIn(true);
    };

    window.addEventListener("userLoggedIn", handleUserLoggedIn);

    fetchData();

    return () => {
      window.removeEventListener("userLoggedIn", handleUserLoggedIn);
    };
  }, []);

  return (
    <section className="section-footer container">
      <Link href="/" legacyBehavior>
        <a className="footer-logo-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="footer-logo-icon"
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
          <h1 className="footer-logo-text">SilverScreen</h1>
        </a>
      </Link>

      {isLoggedIn ? (
        <></>
      ) : (
        <>
          {" "}
          <div className="footer-link-container foot-reg">
            <button
              className="footer-btn"
              onClick={() => toggleModal("signup")}
            >
              Create account
            </button>
          </div>
          <div className="footer-link-container">
            <button className="footer-btn" onClick={() => toggleModal("login")}>
              Sign in
            </button>
          </div>
        </>
      )}

      <div className="footer-link-container">
        <Link href="/about-us" className="footer-link">
          About us
        </Link>
      </div>

      <h3 className="footer-heading">Our Theatres</h3>

      <p className="copyright">
        Copyright &copy; 2024 by LMAO, Inc. This work is licensed under the
        terms of the{" "}
        <a href="https://www.gnu.org/licenses/gpl-3.0.html">
          GNU General Public License, version 3 or later (GPL-3.0-or-later)
        </a>
        .
      </p>

      <div className="footer-address-container">
        {loading ? (
          <HashLoader color="#eb3656" />
        ) : (
          theatres.map((theatre) => (
            <div key={theatre.id} className="theatre-item">
              <h4>{theatre.name}</h4>
            </div>
          ))
        )}
      </div>
      {modalsActive.login && (
        <LoginModal onClose={() => toggleModal("login")} />
      )}
      {modalsActive.signup && (
        <SignUpModal onClose={() => toggleModal("signup")} />
      )}
    </section>
  );
};

export default Footer;
