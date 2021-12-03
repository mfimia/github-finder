import PropTypes from "prop-types";

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

Alert.propTypes = {
  msg: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Alert;
