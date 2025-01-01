import React from "react";
import Image from "next/image";
import closeIcon from "../public/x.svg";

const SignUpModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Sign Up</h2>
          <button className="close-button" onClick={onClose}>
            <Image src={closeIcon} alt="Close" width={24} height={24} />
          </button>
        </div>
        <form>
          <div className="form-row">
            <label>
              First name:
              <input type="text" className="short-input" name="first name" placeholder="your first name" />
            </label>
            <label>
              Last name:
              <input type="text" className="short-input" name="last name" placeholder="your last name" />
            </label>
          </div>
          <label>
            Email:
            <input type="text" name="email" placeholder="input email" />
          </label>
          <label>
            Password:
            <input type="password" name="password" placeholder="input password" />
          </label>
          <button className="signup" type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpModal;