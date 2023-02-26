import React from "react";

const TextField = ({ onMouseEnter, onMouseLeave, className, placeholder }) => {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        className="input"
        onMouseDown={onMouseEnter}
      />
    </div>
  );
};

export default TextField;
