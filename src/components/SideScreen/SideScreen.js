import React from "react";
import Button from "@mui/material/Button";
import "./SideScreen.css";

const SideScreen = () => {
  return (
    <div>
      <p className="sideScreen">
        A few clicks away from an awesome writing experience
      </p>
      <div className='object'>
        <div className="oval one">
        </div>
        <div className="oval two">
          </div>
          <p className="middleContent ">
            <span>50k+</span> Peppertypers <br />
            trust us with their content
          </p>
      </div>
      <Button
          style={{
              backgroundColor: "#5f00ed",
              color: "#fff",
              fontWeight: "bold",
              borderRadius: "30px 0px 30px 30px",
              width: "35%",
              margin: "35% 0 3% 60% ",
              display: "flex",
              justifyContent: "space-evenly"
            }}
          >
           <img className='question' src="https://img.icons8.com/ios/50/000000/help.png" alt='' /> 
           <p style={{margin:"0"}}>Need Help?</p>
          </Button>
    </div>
  );
};

export default SideScreen;
