import React from 'react';

const ColorPickerButton = ({ selectedColor, onClick }) => {
  return (
    <button className="color-picker-button" onClick={onClick}>
      {selectedColor ? `Selected Color: ${selectedColor}` : 'Pick a Color'}
    </button>
  );
};

export default ColorPickerButton;
