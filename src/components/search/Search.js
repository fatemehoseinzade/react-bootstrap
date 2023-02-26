import React from "react";
import MyDatePicker from "../shared/datePicker/DatePicker";
import DropMenu from "../shared/dropMenu/DropMenu";
import { constant } from "../utils/Constant";

import "./Search.Style.css";

const Search = () => {
  const { CITY_FIELD, DATE_FIELD } = constant.SEARCH_FIELDS;
  return (
    <div className="input_wrapper">
      <DropMenu
        type="selector"
        items={CITY_FIELD.ITEMS}
        placeholder={CITY_FIELD.PLACE_HOLDER}
      />
      <MyDatePicker language="fa" placeholder={DATE_FIELD.PLACE_HOLDER} />
      <DropMenu type="roomSelector" />
      <button className="search_btn">Search</button>
    </div>
  );
};

export default Search;
