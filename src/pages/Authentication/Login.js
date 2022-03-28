import "./Authentication.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/data/AuthContext";
import { getCartItem } from "../../utils/getCartItem";
import { useCart } from "../../context/data/CartContext";
import { getWishlistItem } from "../../utils";
import { useWishlist } from "../../context/data/WishlistContext";

const Login = () => {
  const navigate = useNavigate();
  const { cartDispatch } = useCart();
  const { wishlistDispatch } = useWishlist();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const guestUser = {
    email: "aazam.hudda@gmail.com",
    password: "aazam123",
  };

  const guestCredentialClickHandler = (event) => {
    event.preventDefault();
    setUser({ email: guestUser.email, password: guestUser.password });
  };

  const { authDispatch } = useAuth();
  const loginFieldChangeHandler = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  const loginFormSubmitHandler = async (event) => {
    event.preventDefault();
    if (user.email != "" && user.password != "") {
      try {
        const response = await axios.post("/api/auth/login", user);
        if (response.status === 200) {
          localStorage.setItem("token", response.data.encodedToken);
          localStorage.setItem("user", JSON.stringify(response.data.foundUser));
          authDispatch({
            type: "LOGIN",
            payload: {
              user: response.data.foundUser,
              token: response.data.encodedToken,
            },
          });
          getCartItem(response.data.encodedToken, cartDispatch);
          getWishlistItem(response.data.encodedToken, wishlistDispatch);
          navigate("/");
        } else if (response.status === 201) {
          alert("wrong password");
        } else if (response.status === 404) {
          alert("Email not found");
        } else if (response.status === 500) {
          alert("Server Failed");
        }
      } catch (error) {
        alert(error);
      }
    } else {
      alert("ALL INPUT FIELDS ARE MANDATORY");
    }
  };
  return (
    <div className="auth-container">
      <section className="auth-card">
        <h2 className="auth-title">Login</h2>
        <form className="auth-main">
          <div className="input-group">
            <label htmlFor="email" className="input-label">
              Username
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="test@gmail.com"
              className="input"
              value={user.email}
              required
              onChange={loginFieldChangeHandler}
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
              value={user.password}
              name="password"
              required
              onChange={loginFieldChangeHandler}
            />
          </div>
          <div className="box-link-wrapper">
            <div className="checkbox">
              <input id="remember-me" name="remember-me" type="checkbox" />
              <label htmlFor="remember-me">Remember-me</label>
            </div>

            <div className="forgot-link">
              <a href="#">Forgot Your Password?</a>
            </div>
          </div>
          <button
            className="btn btn-primary auth-btn"
            onClick={loginFormSubmitHandler}
          >
            Login
          </button>
          <button
            className="btn btn-primary guest-btn"
            onClick={guestCredentialClickHandler}
          >
            Guest Credentials
          </button>
          <div className="auth-link-wrapper">
            <Link to="/signup">Create New Account</Link>
          </div>
        </form>
      </section>
    </div>
  );
};

export { Login };
