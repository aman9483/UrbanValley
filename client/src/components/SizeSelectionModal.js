import React from "react";
import Modal from "react-modal";

const SizeSelectionModal = ({ isOpen, onClose, sizes, onSizeSelect }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} ariaHideApp={false} className="modal">
      <h2 className="text-xl font-semibold">Select Size</h2>
      <div className="mt-4">
        {sizes.map((size) => (
          <div key={size} className="flex items-center">
            <input
              type="radio"
              id={size}
              name="size"
              value={size}
              onChange={() => onSizeSelect(size)}
            />
            <label htmlFor={size} className="ml-2">
              {size}
            </label>
          </div>
        ))}
      </div>
      <button onClick={onClose} className="mt-4 p-2 bg-blue-500 text-white rounded">
        Confirm
      </button>
    </Modal>
  );
};

export default SizeSelectionModal;
