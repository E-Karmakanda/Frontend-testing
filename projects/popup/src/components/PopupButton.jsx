import { useState, useEffect, useRef } from "react";

function PopupButton({ button_text, msg }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
// -element reference-
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
//   --outside click handling--
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && event.target === modalRef.current) {
        closeModal();
      }
    };
    // --binding window clicks--
    if (isModalOpen) {
      window.addEventListener("click", handleOutsideClick);
    } else {
      window.removeEventListener("click", handleOutsideClick);
    }
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isModalOpen]);

  return (
    <>
      <button onClick={openModal} className="button-primary">{button_text}</button>

      {isModalOpen && (
        <div
          className="modal"
          ref={modalRef}
          style={{ display: isModalOpen ? "block" : "none" }}
        >
          <div className="modal__content">
            <span
              className="modal__content__close"
              onClick={closeModal}
              ref={closeButtonRef}
            >
              &times;
            </span>
            <p>{msg}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default PopupButton;
