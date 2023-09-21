import { Button, Col, Input, Label, Row } from "reactstrap";
import "./identity-transfer.scss";
import { useNavigate } from "react-router-dom";

const IdentityTransfer = () => {
  const navigate = useNavigate();

  const cancelButtonClickHandler = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="identity-transfer-container">
      <div className="identity-transfer-title">You can give permission to your fellow. Please give seperate user permissions</div>
      <div className="identity-transfer-input-fields">
        <Row className="data-row">
          <Col className="checkbox-col" sm={2}>
            <Input className="checkbox-input" type="checkbox" />
          </Col>
          <Col className="label-col">
            <Label className="checkbox-label">First Name</Label>
          </Col>
        </Row>
        <Row className="data-row">
          <Col className="checkbox-col" sm={2}>
            <Input className="checkbox-input" type="checkbox" />
          </Col>
          <Col className="label-col">
            <Label className="checkbox-label">Last Name</Label>
          </Col>
        </Row>
        <Row className="data-row">
          <Col className="checkbox-col" sm={2}>
            <Input className="checkbox-input" type="checkbox" />
          </Col>
          <Col className="label-col">
            <Label className="checkbox-label">Address</Label>
          </Col>
        </Row>
        <Row className="data-row">
          <Col className="checkbox-col" sm={2}>
            <Input className="checkbox-input" type="checkbox" />
          </Col>
          <Col className="label-col">
            <Label className="checkbox-label">Birth Date</Label>
          </Col>
        </Row>
        <Row className="data-row">
          <Col className="checkbox-col" sm={2}>
            <Input className="checkbox-input" type="checkbox" />
          </Col>
          <Col className="label-col">
            <Label className="checkbox-label">Email</Label>
          </Col>
        </Row>
        <Row className="data-row">
          <Col className="checkbox-col" sm={2}>
            <Input className="checkbox-input" type="checkbox" />
          </Col>
          <Col className="label-col">
            <Label className="checkbox-label">Public Address</Label>
          </Col>
        </Row>
        <Row className="data-row">
          <Col className="checkbox-col" sm={2}>
            <Input className="checkbox-input" type="checkbox" />
          </Col>
          <Col className="label-col">
            <Label className="checkbox-label">Gender</Label>
          </Col>
        </Row>
        <Row className="data-row">
          <Col className="checkbox-col" sm={2}>
            <Input className="checkbox-input" type="checkbox" />
          </Col>
          <Col className="label-col">
            <Label className="checkbox-label">Image Url</Label>
          </Col>
        </Row>
        <Row className="data-row">
          <Col className="botom-input-label-col" sm={3}>
            <Label className="botom-input-label">Sender Public Address</Label>
          </Col>
          <Col className="bottom-input-col">
            <Input className="bottom-input" placeholder="Enter sender's public address" />
          </Col>
        </Row>
        <Row className="data-row">
          <Col className="botom-input-label-col" sm={3}>
            <Label className="botom-input-label">Time Limit</Label>
          </Col>
          <Col className="bottom-input-col">
            <Input className="bottom-input" placeholder="24 hours" />
          </Col>
        </Row>
        <div className="identity-transfer-button-container">
          <Button className="cancel-button" onClick={cancelButtonClickHandler}>
            CANCEL
          </Button>
          <Button className="give-permission-button">GIVE PERMISSION</Button>
        </div>
      </div>
    </div>
  );
};

export default IdentityTransfer;
