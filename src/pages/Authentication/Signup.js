import "./Authentication.css";
import axios from "axios";
import { useAuth } from "../../context/data/AuthContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const Navigate = useNavigate();
  const { authDispatch } = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const signupInputChangeHandler = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  const signupFormSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/auth/signup", user);
      if (response.status === 201) {
        localStorage.setItem("token", response.data.encodedToken);
        localStorage.setItem("user", JSON.stringify(response.data.createdUser));
        authDispatch({
          type: "SIGNUP",
          payload: {
            user: response.data.createdUser,
            token: response.data.encodedToken,
          },
        });
        setUser({
          email: "",
          password: "",
          firstName: "",
          lastName: "",
        });
        Navigate("/");
      } else if (response.status === 422) {
        throw new Error("User already exists");
      } else if (response.status === 500) {
        throw new Error("Server Error");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="auth-container">
      <section className="auth-card">
        <h2 className="auth-title">Signup</h2>
        <form action="" method="post">
          <div className="auth-main">
            <div className="input-group">
              <label htmlFor="firstname" className="input-label">
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                placeholder="first name"
                className="input"
                name="firstName"
                required
                value={user.firstName}
                onChange={signupInputChangeHandler}
              />
            </div>
            <div className="input-group">
              <label htmlFor="lastname" className="input-label">
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                placeholder="last name"
                className="input"
                name="lastName"
                required
                value={user.lastName}
                onChange={signupInputChangeHandler}
              />
            </div>
            <div className="input-group">
              <label htmlFor="email" className="input-label">
                Email Address
              </label>
              <input
                type="text"
                id="email"
                placeholder="test@gmail.com"
                className="input"
                name="email"
                required
                value={user.email}
                onChange={signupInputChangeHandler}
              />
            </div>
            <div className="input-group">
              <label htmlFor="password" className="input-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="*********"
                className="input"
                name="password"
                required
                value={user.password}
                onChange={signupInputChangeHandler}
              />
            </div>
            <div className="box-link-wrapper">
              <div className="checkbox">
                <input id="remember-me" name="remember-me" type="checkbox" />
                <label htmlFor="remember-me">
                  I accept all terms & condition
                </label>
              </div>
            </div>
            <button
              className="btn btn-primary auth-btn"
              onClick={signupFormSubmitHandler}
            >
              Create New Account
            </button>
            <div className="auth-link-wrapper">
              <a href="../login/login.html" className="create-link">
                Already Have An Account
              </a>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export { Signup };
