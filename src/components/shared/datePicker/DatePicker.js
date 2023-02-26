import React from "react";
import DatePicker from "react-multi-date-picker";
// import persian from "react-date-object/calendars/persian";
// import persian_fa from "react-date-object/locales/persian_fa";
// import transition from "react-element-popper/animations/transition";
// import "react-multi-date-picker/styles/colors/purple.css";

const MyDatePicker = ({ language, placeholder }) => {
  return (
    <div>
      <DatePicker
        style={{
          height: "50px",
          // width: "auto",
          outline: "none",
          borderRadius: "3px",
          fontSize: "14px",
          padding: "3px 10px",
          border: "1px solid #d3d3d3",
        }}
        // className="purple"
        placeholder={placeholder}
        inputClass="custom-input"
        numberOfMonths={2}
        disableMonthPicker
        disableYearPicker
        // animations={[transition({ duration: 800, from: 35 })]}
        range
        // calendar={persian}
        // locale={persian_fa}
        calendarPosition="bottom-right"
      />
    </div>
  );
};

export default MyDatePicker;
