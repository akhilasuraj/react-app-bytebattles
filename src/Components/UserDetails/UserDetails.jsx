import { useEffect, useState } from "react";
import FormDetails from "../../shared/Components/FormDetails";
import "./user-details.scss";
import { Input, Button } from "reactstrap";
import { UserPageRole } from "../../shared/constants/constants";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "../../features/userSlice";

const UserDetails = ({ mode }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState("");
  const [identitySearchText, setIdentitySearchText] = useState("");

  const userDetails = useSelector((state) => state.user.userDetails);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    switch (mode) {
      case UserPageRole.Approve:
        setTitle("Please verify the identity");
        setIsEdit(false);
        break;
      case UserPageRole.Register:
        setTitle("You are not registered, Please register to the System.");
        setIsEdit(true);
        break;
      case UserPageRole.UserDetails:
        setTitle("You are registered, Here are your details.");
        setIsEdit(false);
        break;
      case UserPageRole.Edit:
        setTitle("");
        setIsEdit(true);
        break;
      default:
        setTitle("");
        setIsEdit(false);
    }
  }, [mode]);

  const registerButtonClickHandler = (e) => {
    e.preventDefault();
    navigate("/userDetails");
  };

  const cancelButtonClickHandler = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const searchButtonClickHandler = (e) => {
    e.preventDefault();
    identitySearchText && navigate(`/identitySearchResult/${identitySearchText}`);
  };

  const transferIdentityButtonClickHandler = (e) => {
    e.preventDefault();
    navigate("/identityTransfer");
  };

  const editButtonClickHandler = (e) => {
    e.preventDefault();
    navigate("/edit");
  };

  const saveEditsButtonClickHandler = (e) => {
    e.preventDefault();
  };

  const onFormDataChange = (e) => {
    dispatch(setUserDetails(e.target.value));
  };

  const identityearchInputHandler = (e) => {
    setIdentitySearchText(e.target.value);
  };

  return (
    <>
      <div className="user-details-component">
        <p className="user-details-title">{title}</p>
        <FormDetails isEdit={isEdit} formData={mode !== UserPageRole.Register ? userDetails : null} onChange={onFormDataChange} />

        {mode === UserPageRole.Register && (
          <div className="form-register-button-container">
            <Button className="form-button cancel-button" onClick={cancelButtonClickHandler}>
              CANCEL
            </Button>
            <Button className="form-button register-button" onClick={registerButtonClickHandler}>
              REGISTER
            </Button>
          </div>
        )}

        {mode === UserPageRole.UserDetails && (
          <>
            <div className="identity-search-container">
              <Input className="search-identity-input" name="secretkey" placeholder="Search Identity" onChange={identityearchInputHandler} value={identitySearchText} />
              <Button className="search-button" onClick={searchButtonClickHandler}>
                <div className="button-text">SEARCH</div>
              </Button>
            </div>
            <div className="user-detail-page-button-container">
              <Button className="button-common" onClick={transferIdentityButtonClickHandler}>
                TRANSFER IDENTITY
              </Button>
              <Button className="button-common" onClick={editButtonClickHandler}>
                EDIT
              </Button>
            </div>
          </>
        )}

        {mode === UserPageRole.Edit && (
          <>
            <div className="user-edit-container">
              <Button className="form-button cancel-button" onClick={cancelButtonClickHandler}>
                CANCEL
              </Button>
              <Button className="form-button edit-button" onClick={saveEditsButtonClickHandler}>
                SAVE
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default UserDetails;
