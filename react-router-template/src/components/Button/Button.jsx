import Loader from "../Loader/Loader";
import "./Button.css";

const Button = ({ value, displayTrue, displayFalse, isLoading, handleLogin}) => {
  if (isLoading) {
      return (
        <>
          <button className="Login" data-testid="login_button">
            <Loader component={"Login"}/>
          </button>
        </>)
    } else {
    return (
      <>
        <button className="login"
        data-testid="login_button"
        onClick={handleLogin}>
          {value ? displayTrue : displayFalse}</button>
      </>
    );
    }
};

export default Button;
