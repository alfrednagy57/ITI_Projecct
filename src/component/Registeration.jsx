import React, { useState, useEffect } from "react";
import "../images/logoRegister.jpg";
import "../css/register.css";
import { NavLink, useNavigate } from "react-router-dom";

function Registeration() {
  const [name, setname] = useState();
  const [password, setpassword] = useState();
  const [email, setemail] = useState();
  const [firstName, setfN] = useState();
  const [firstLame, setlN] = useState();
  const [date, setdate] = useState();
  const [errors, setErrors] = useState({});
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate(); // Rename the variable to 'navigate' instead of 'nav'
  
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("Data"));
    if (savedData) {
      setname(savedData.name);
      setpassword(savedData.password);
      setemail(savedData.email);
      setfN(savedData.firstName);
      setlN(savedData.firstLame);
      setlN(savedData.date);
    }
  }, []);

  function validForm() {
    let isValid = true;
    let errors = {};
  
    if (!name) {
      isValid = false;
      errors.name = "Please enter your username.";
    }
  
    if (!password) {
      isValid = false;
      errors.password = "Please enter your password.";
    } else if (password.length <= 10) {
      isValid = false;
      errors.password = "Password must be at least 10 characters long.";
    }
  
    if (!confirmPassword) {
      isValid = false;
      errors.confirmPassword = "Please confirm your password.";
    } else if (confirmPassword !== password) {
      isValid = false;
      errors.confirmPassword = "Passwords do not match.";
    }
  
    if (!email) {
      isValid = false;
      errors.email = "Please enter your email.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      isValid = false;
      errors.email = "Please enter a valid email address.";
    }
  
    setErrors(errors);
    return isValid;
  }
  function handlesubmit(e) {
    e.preventDefault();

    if (validForm()) {
      alert("Form submitted successfully!");
      navigate("/login");
    }

    let FormData = { name, password, email };
   
    
    localStorage.setItem("Data", JSON.stringify(FormData));
    console.log(JSON.parse(localStorage.getItem("Data")));
    let arrayData = [];
    console.log(arrayData);
    arrayData.push(JSON.parse(localStorage.getItem("Data")));
    console.log(arrayData);
    localStorage.setItem("Data", JSON.stringify(arrayData));
  }
  
  return (
    <div className="register container  w-50 p-0 mt-5 shadow-lg">
      <div className="image w-100 position-relative">
        <h2 className="position-absolute fs-1 hhh">registeration</h2>
        <img
          className="w-100 "
          src={require(`../images/logoRegister.jpg`)}
          alt="LogoRegister"
        />
      </div>
      <div className="form mt-4 p-3 mb-3">
        <form method="get" onSubmit={handlesubmit}>
          <div className="row">

          <div className="form-group ">
              <label className="mb-2 text-secondary" htmlFor="inputEmail4">
                First name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputuser4"
                value={firstName || ``}
                placeholder="First name"
                onChange={(e) => setfN(e.target.value)}
              />
            </div>

            <div className="form-group ">
              <label className="mb-2 text-secondary" htmlFor="inputEmail4">
                Last name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputuser4"
                value={firstLame || ``}
                placeholder="Last name"
                onChange={(e) => setlN(e.target.value)}
              />
            </div>

            <div className="form-group ">
              <label className="mb-2 text-secondary" htmlFor="inputEmail4">
                UserName
              </label>
              <input
                type="text"
                className="form-control"
                id="inputuser4"
                value={name || ``}
                placeholder="username"
                onChange={(e) => setname(e.target.value)}
              />
            </div>
            <div className="text-danger error">{errors.name}</div>

            <div className="form-group ">
              <label className="mb-2 text-secondary" htmlFor="inputEmail4">
                date
              </label>
              <input
                type="date"
                className="form-control"
                id="inputuser4"
                value={date || ``}
                onChange={(e) => setdate(e.target.value)}
              />
            </div>

            <div className="form-group ">
              <label className="mt-3 mb-2 text-secondary" htmlFor="inputEmail4">
                Email
              </label>
              <input
                type="email"
                className="form-control "
                id="inputEmail4"
                value={email || ``}
                placeholder="Email"
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div className="text-danger error">{errors.email}</div>
          </div>

          <div className="form-group ">
              <label className="mb-2 text-secondary" htmlFor="inputPassword4">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
                value={password || ``}
                placeholder="Password"
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
            
            <div className="text-danger error">{errors.password}</div>
            <div className="form-group">
            <label className="mb-2 text-secondary" htmlFor="inputConfirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputConfirmPassword"
              value={confirmPassword}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="text-danger error">{errors.confirmPassword}</div>
          </div>
          <button type="submit" className="btn btn-dark mt-4 w-100">
            Register
          </button>
          <div className="text-center mt-2">
          Already have  an account  
          <NavLink className="m-2" to="/login" >Login</NavLink>
          </div>
      
        </form>
      </div>
    </div>
  );
}

export default Registeration;
