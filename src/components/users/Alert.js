const Alert = ({ alert }) => {
  return (
    alert.msg !== null &&
    alert.type !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle" /> {alert.msg}
      </div>
    )
  );
};

export default Alert;
