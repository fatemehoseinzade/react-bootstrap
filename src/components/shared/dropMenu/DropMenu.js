import React, { useEffect, useState } from "react";
import { constant } from "../../utils/Constant";
import TextField from "../textField/TextField";
import "../style.css";
import RoomSelector from "./RoomSelector";

const DropMenu = ({ type, placeholder, items }) => {
  const [counter, setCounter] = useState({
    Adult: 1,
    Children: 0,
    Rooms: 0,
  });
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [options, setOptions] = useState([]);
  const [city, setCity] = useState("");

  useEffect(() => {
    if (type === "selector") {
      setOptions(items);
    } else {
      setOptions(constant.SEARCH_FIELDS.ROOM_TYPE_FIELD.ITEMS);
    }
  }, []);
  const openMenu = () => {
    setOpenMenu(!isOpenMenu);
  };
  const closeMenu = () => {
    setOpenMenu(false);
  };
  const addCount = (name, event) => {
    setCounter({ ...counter, [name]: counter[name] + 1 });
  };

  const decCount = (name, event) => {
    if (counter[name] > 0) {
      setCounter({ ...counter, [name]: counter[name] - 1 });
    }
  };
  const selectCity = (e) => {
    setCity(e.target.textContent);
    setOpenMenu(false);
  };
  return (
    <div className="collapse">
      <TextField
        className="menu_input"
        onMouseEnter={openMenu}
        onMouseLeave={closeMenu}
        placeholder={
          type === "roomSelector"
            ? `${counter.Adult} Adults, ${counter.Children} Children, ${counter.Rooms} Rooms`
            : city !== ""
            ? city
            : placeholder
        }
      />
      {isOpenMenu && (
        <ul className="menu">
          {options?.map((item) => (
            <li className="menu_item" key={item.ID}>
              {type === "roomSelector" ? (
                <RoomSelector
                  isOpenMenu={isOpenMenu}
                  addCount={addCount}
                  decCount={decCount}
                  closeMenu={closeMenu}
                  counter={counter}
                  item={item}
                />
              ) : (
                <div className="item" onClick={selectCity}>
                  <p>{item.LABEL}</p>
                </div>
              )}
            </li>
          ))}
          {type === "roomSelector" && (
            <button className="confirm_btn" onClick={closeMenu}>
              confirm
            </button>
          )}
        </ul>
      )}
    </div>
  );
};

export default DropMenu;
