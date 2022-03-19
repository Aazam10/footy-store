import "./Authentication.css";
const Login = () => {
  return (
    <div className="auth-container">
      <section className="auth-card">
        <h2 className="auth-title">Login</h2>
        <div className="auth-main">
          <div className="input-group">
            <label for="username" className="input-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="test@gmail.com"
              className="input"
            />
          </div>
          <div className="input-group">
            <label for="password" className="input-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="*********"
              className="input"
            />
          </div>
          <div className="box-link-wrapper">
            <div className="checkbox">
              <input id="remember-me" name="remember-me" type="checkbox" />
              <label for="remember-me">Remember-me</label>
            </div>

            <div className="forgot-link">
              <a href="#">Forgot Your Password?</a>
            </div>
          </div>
          <button className="btn btn-primary auth-btn">
            <a href="#">Login</a>
          </button>
          <div className="auth-link-wrapper">
            <a href="../signup/signup.html" className="create-link">
              Create New Account
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export { Login };
