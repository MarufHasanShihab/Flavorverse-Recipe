import PropTypes from "prop-types";

const Button = ({
  isDisabled,
  btnType,
  containerStyle,
  title,
  rightIcon,
  handleClick,
}) => {
  return (
    <button
      disabled={isDisabled ?? false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyle}`}
      onClick={handleClick}>
      <span className="flex-1">{title}</span>
      {rightIcon && <div className="relative w-6 h-6">{rightIcon}</div>}
    </button>
  );
};

Button.propTypes = {
  isDisabled: PropTypes.bool,
  btnType: PropTypes.string,
  title: PropTypes.string,
  containerStyle: PropTypes.string,
  rightIcon: PropTypes.string,
  handleClick: PropTypes.func
};
export default Button;
