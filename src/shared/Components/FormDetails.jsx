import "./form-details.scss";
import { Label, Input, Col, Row } from "reactstrap";

const FormDetails = ({ isEdit, formData, onChange }) => {
  const formInputHandler = (e) => {
    onChange({
      target: {
        value: { ...formData, [e.target.name]: e.target.value },
      },
    });
  };

  return (
    <div className="form-input-fields">
      <Row className="data-row">
        <Col className="label-col">
          <Label className="label">First Name</Label>
        </Col>
        <Col className="input-col">
          <Input className={`input-field ${!isEdit ? "view-mode" : ""}`} onChange={formInputHandler} name="firstName" disabled={!isEdit} value={formData?.firstName} />
          {/* <FormFeedback valid>Sweet! that name is available</FormFeedback> */}
        </Col>
      </Row>
      <Row className="data-row">
        <Col className="label-col">
          <Label className="label">Last Name</Label>
        </Col>
        <Col className="input-col">
          <Input className={`input-field ${!isEdit ? "view-mode" : ""}`} onChange={formInputHandler} name="lastName" disabled={!isEdit} value={formData?.lastName} />
        </Col>
      </Row>
      <Row className="data-row">
        <Col className="label-col">
          <Label className="label">Address</Label>
        </Col>
        <Col className="input-col">
          <Input className={`input-field ${!isEdit ? "view-mode" : ""}`} onChange={formInputHandler} name="address" disabled={!isEdit} value={formData?.address} />
        </Col>
      </Row>
      <Row className="data-row">
        <Col className="label-col">
          <Label className="label">Birth Date</Label>
        </Col>
        <Col className="input-col">
          <Input className={`input-field ${!isEdit ? "view-mode" : ""}`} onChange={formInputHandler} name="birthDate" disabled={!isEdit} value={formData?.birthDate} />
        </Col>
      </Row>
      <Row className="data-row">
        <Col className="label-col">
          <Label className="label">Email</Label>
        </Col>
        <Col className="input-col">
          <Input className={`input-field ${!isEdit ? "view-mode" : ""}`} onChange={formInputHandler} name="email" disabled={!isEdit} value={formData?.email} />
        </Col>
      </Row>
      <Row className="data-row">
        <Col className="label-col">
          <Label className="label">Bublic Address</Label>
        </Col>
        <Col className="input-col">
          <Input className={`input-field ${!isEdit ? "view-mode" : ""}`} onChange={formInputHandler} name="publicAddress" disabled={!isEdit} value={formData?.publicAddress} />
        </Col>
      </Row>
      <Row className="data-row">
        <Col className="label-col">
          <Label className="label">Gender</Label>
        </Col>
        <Col className="input-col">
          <Input className={`input-field ${!isEdit ? "view-mode" : ""}`} onChange={formInputHandler} name="gender" disabled={!isEdit} value={formData?.gender} />
        </Col>
      </Row>
      <Row className="data-row">
        <Col className="label-col">
          <Label className="label">Image Url</Label>
        </Col>
        <Col className="input-col">
          <Input className={`input-field ${!isEdit ? "view-mode" : ""}`} onChange={formInputHandler} name="imageUrl" disabled={!isEdit} value={formData?.imageUrl} />
        </Col>
      </Row>
    </div>
  );
};

export default FormDetails;
