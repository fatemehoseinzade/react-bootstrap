import React from "react";
import "../style.css";

const RoomSelector = ({ item, decCount, addCount, counter }) => {
  return (
    <>
      <div className="counter_box">
        <button onClick={(e) => decCount(item.LABEL, e)}>
          <span>-</span>
        </button>
        <span className="number">{counter[item.LABEL]}</span>
        <button onClick={(e) => addCount(item.LABEL, e)}>
          <span>+</span>
        </button>
      </div>
      <div className="menu_item_label">
        <span>{item.LABEL}</span>
        <img alt="icon" src={item.ICON} style={{ margin: "0 10px" }} />
      </div>
    </>
  );
};

export default RoomSelector;
