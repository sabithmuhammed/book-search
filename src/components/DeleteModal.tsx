// src/components/DeleteModal.tsx
import React from 'react';

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message: string;
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title = 'Confirm Delete',
  message,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        {/* Body */}
        <div className="p-4">
          <p>{message}</p>
        </div>

        {/* Footer */}
        <div className="flex justify-end p-4 border-t space-x-2">
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
