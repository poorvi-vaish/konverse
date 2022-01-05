import React from "react";
import peppertype from "../../assets/peppertype.svg";
import "./MainScreen.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const MainScreen = () => {
  return (
    <div>
      <img className='logo' src={peppertype} alt="logo" />
      <div className="mainScreen">
        <p className="hello">Hi Siva 👋</p>
        <h1>Welcome to Peppertype.ai</h1>
        <p>
          Congratulations on taking your first step towards vreating content the
          modern way!
        </p>
        <br />
        <p>
          Help us tailor an amazing experience for you by answering these three
          questions
        </p>
        <br />
        <Stack spacing={2} direction="row">
          <Button
            style={{
              backgroundColor: "#f9fafb",
              color: "#b0aac2",
              fontWeight: "bold",
            }}
          >
            Skip for now
          </Button>
          <Button
            style={{
              backgroundColor: "#6800ff",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            Continue
          </Button>
        </Stack>
        <p className="demo">
          Get the most out of it -{" "}
          <a className="demo demo2" href="#1">
            Book a live demo
          </a>
        </p>
      </div>
    </div>
  );
};

export default MainScreen;
