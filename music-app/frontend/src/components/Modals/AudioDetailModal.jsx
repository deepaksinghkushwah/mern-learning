import PropTypes from "prop-types";
import "./AudioDetailsModal.css";
import { useState } from "react";
const AudioDetailModal = ({ openButtonTitle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <button onClick={handleOpen} id="openModal">
        {openButtonTitle}
      </button>
      <dialog id="modal" className="dialog">
        <button
          onClick={handleClose}
          id="closeModal"
          className="dialog-close-btn"
        >
          Close
        </button>
        {isOpen ? (
          <>
            <p>
              A pop-up modal component made with the native HTML dialog element
              with custom styles.
            </p>
          </>
        ) : null}
      </dialog>
    </div>
  );
};

AudioDetailModal.propTypes = {
  openButtonTitle: PropTypes.string,
};

export default AudioDetailModal;
