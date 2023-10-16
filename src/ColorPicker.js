import React, { useState } from 'react';

const ColorPicker = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [showColorList, setShowColorList] = useState(false);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColorList(false);
  };

  return (
    <div className="color-picker">
      <div className="color-box">
        <h1>Pick a color</h1>
        <button onClick={() => setShowColorList(!showColorList)}>Pick a color</button>
        {showColorList && (
          <div className="color-options">
            {colors.map((color, index) => (
              <div
                key={index}
                className="color-option"
                style={{ backgroundColor: color }}
                onClick={() => handleColorClick(color)}
              ></div>
            ))}
          </div>
        )}
        {selectedColor && (
          <div
            className="selected-color"
            style={{
              backgroundColor: selectedColor,
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
              padding: '10px',
              borderRadius: '5px',
              margin: '10px'
            }}
          >
            You have picked: {selectedColor}
          </div>
        )}
      </div>
    </div>
  );
};

export default ColorPicker;
