import React from 'react';

interface SubcategoryModalProps {
  subcategory: string;
  details: {
    title: string;
    description: string;
    content: string;
  };
  onClose: () => void;
}

const SubcategoryModal = ({ details, onClose }: SubcategoryModalProps) => {
  return (
    <div className="subcategory-details">
      <div className="details-header">
        <h2 className="details-title">{details.title}</h2>
        <p className="details-description">{details.description}</p>
        <button className="close-button" onClick={onClose}>×</button>
      </div>
      <div dangerouslySetInnerHTML={{ __html: details.content }} />
    </div>
  );
};

export default SubcategoryModal;