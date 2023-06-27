import React from "react";
import "./modal.css";
const Modal = () => {
  return (
    <div className="modal">
      <div className="modal wrapper ">
        <h1>Modal</h1>

        <div className="modal-input-wrapper">
          <input
            placeholder="ID"
            className="modal-input"
            aria-label="ID"
          ></input>
          <input placeholder="Name" className="modal-input"></input>
          <input placeholder="Description" className="modal-input"></input>
        </div>
        <div className="modal-btn-wrapper">
          <button className="modal-btn">Add</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
