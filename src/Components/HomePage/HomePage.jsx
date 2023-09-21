import { Input, Button } from "reactstrap";
import "./home-page.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const HomePage = () => {
  const [secretKey, setsecretKey] = useState("");

  const navigate = useNavigate();

  const secretKeyInputHandler = (e) => {
    setsecretKey(e.target.value);
  };

  const nextButtonClickHandler = () => {
    navigate(secretKey ? "userDetails" : "register");
  };
  return (
    <div className="home-page-container">
      <Input className="input-secret-key" name="secretkey" placeholder="Enter Secret Key" onChange={secretKeyInputHandler} />
      <Button className="next-button" onClick={nextButtonClickHandler}>
        <div className="button-text">
          NEXT
        </div>
      </Button>
    </div>
  );
};

export default HomePage;
