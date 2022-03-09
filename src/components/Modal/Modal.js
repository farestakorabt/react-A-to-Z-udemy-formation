import React, { useState } from "react";
import "./modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);
  
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button className="btn-modal" onClick={toggleModal}>
        Open
      </button>
      {modal && (
        <div className="overlay">
          <div className="modal">
            <div className="modal-content">
              <h2>Hello modale</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ratione similique labore repellendus exercitationem doloribus
                doloremque asperiores repudiandae cumque enim aliquid.
              </p>
              <button className="close-modal" onClick={toggleModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
