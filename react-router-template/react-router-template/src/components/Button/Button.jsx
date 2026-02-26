import "./Button.css";
import Loader from "../Loader/Loader.jsx";

const Button = ({ value, isLoading, displayTrue, displayFalse, handleLogin }) => {
  // loading state
  if (isLoading) {
    return (
      <button className="login">
        <Loader component={"Login"} />
      </button>
    );
  }

  // normal state
  return (
    <button className="login" onClick={handleLogin}>
      {value ? displayTrue : displayFalse}
    </button>
  );
};

export default Button;