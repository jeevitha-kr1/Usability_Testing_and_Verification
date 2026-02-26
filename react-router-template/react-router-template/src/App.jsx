import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Button from "./components/Button/Button.jsx";
import { useState } from "react";

const App = () => {
  const [loggedIn, setLogin] = useState(false);
  const[loading,setloading] = useState(false);

  const handleLogin = () => {
    setloading(true);

    //dummy api call to show loading state
    setTimeout(() => {
      setLogin(!loggedIn);   
      setloading(false);
    }, 2000);
  };
  return (
    <div data-testid="App" className="App">
      <nav data-testid="main_nav">
        <h1 data-testid="brandName">The Clothing Company</h1>
        <NavLink data-testid="Home_Link" to="/">
          Home
        </NavLink>
        <NavLink data-testid="About_Link" to="/about">
          About
        </NavLink>
        <NavLink data-testid="Product_Link" to="/products">
          Products
        </NavLink>
        <Button 
        value={loggedIn} 
        isLoading={loading} 
        displayTrue={"Logout"}
        displayFalse={"Login"}
        handleLogin={handleLogin}
        />

      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
