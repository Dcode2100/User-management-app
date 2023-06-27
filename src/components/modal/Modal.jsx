import React, { useState } from "react";
import "./modal.css";
const Modal = ({setShowModal, setNewItem, handleAddItem}) => {

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

    function handleCloseModal(){
        setShowModal(false);
    }

    function handleFormSubmit(event){
      event.preventDefault();
      const newItem = {id, name, description};
      setNewItem(newItem);
      handleAddItem();
    }

  return (
    <div className="modal">
      <div className="modal wrapper ">
        <h1>Add Information</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="modal-input-wrapper">
            <input
              placeholder="ID"
              className="modal-input"
              aria-label="ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
            ></input>
            <input placeholder="Name" className="modal-input"
            value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <input placeholder="Description" className="modal-input"
            value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></input>
          </div>
          <div className="modal-btn-wrapper">
            <button type="submit" className="modal-btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
