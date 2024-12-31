import React from "react";
import Image from "next/image";
import closeIcon from "../../public/x.svg";

const SignInModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Login</h2>
          <button className="close-button" onClick={onClose}>
            <Image src={closeIcon} alt="Close" width={24} height={24} />
          </button>
        </div>
        <form>
          <label>
            Email:
            <input type="text" name="email" placeholder="input email" />
          </label>
          <label>
            Password:
            <input type="password" name="password" placeholder="input password" />
          </label>
          <button type="submit">Sign In</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SignInModal;