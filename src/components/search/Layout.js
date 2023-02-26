import React from "react";
import Search from "./Search";
import GolestanPalace from "../assets/pexels-quang-nguyen-vinh-2166711.jpg";

const Layout = () => {
  return (
    <div>
      <div className="background">
        <img
          alt="back"
          src={GolestanPalace}
          style={{ width: "100%", objectFit: "cover" }}
        />
      </div>
      <Search />
    </div>
  );
};

export default Layout;
