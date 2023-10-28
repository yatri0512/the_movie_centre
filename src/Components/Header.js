import React from "react";
import { Videocam } from "@mui/icons-material";
import "../Styles/header.css";
const Header = () => {
   return (
      <>
         <div className="header">
            <Videocam style={{fontSize: "30px"}} /> &nbsp;&nbsp; 
            <h1>The Movie Centre</h1>
         </div>
      </>
   );
};

export default Header;
