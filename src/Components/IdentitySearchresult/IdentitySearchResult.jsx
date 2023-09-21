import { Button } from "reactstrap";
import FormDetails from "../../shared/Components/FormDetails";
import "./identity-search-result.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const IdentitySearchResult = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const userDetails = useSelector((state) => state.user.userDetails);

  const closeButtonClickhandler = (e) => {
    e.preventDefault();
    navigate("/userDetails");
  };

  return (
    <div className="identity-search-result-container">
      <div className="popup-background">
        <p className="popup-title">Here are your details for public address : {id}</p>
        <FormDetails formData={userDetails} />
        <div className="button-container">
          <Button className="close-button" onClick={closeButtonClickhandler}>
            CLOSE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IdentitySearchResult;
