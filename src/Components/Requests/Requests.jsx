import "./requests.scss";

const Requests = () => {
  return (
    <div className="requests-page-container">
      <div className="requests-page-title">Requests</div>
      <div className="requests-list">
        {Array.from({ length: 3 }).map((_, index) => (
          <div className="request-card">Approval request by Sandy Gomez</div>
        ))}
      </div>
    </div>
  );
};

export default Requests;
