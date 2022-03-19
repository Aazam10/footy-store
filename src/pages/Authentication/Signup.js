import "./Authentication.css";

const Signup = () => {
  return (
    <div class="auth-container">
      <section class="auth-card">
        <h2 class="auth-title">Signup</h2>
        <div class="auth-main">
          <div class="input-group">
            <label for="username" class="input-label">
              Email Address
            </label>
            <input
              type="text"
              id="username"
              placeholder="test@gmail.com"
              class="input"
            />
          </div>
          <div class="input-group">
            <label for="password" class="input-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="*********"
              class="input"
            />
          </div>
          <div class="box-link-wrapper">
            <div class="checkbox">
              <input id="remember-me" name="remember-me" type="checkbox" />
              <label for="remember-me">I accept all terms & condition</label>
            </div>
          </div>
          <button class="btn btn-primary auth-btn">
            <a href="#">Create New Account</a>
          </button>
          <div class="auth-link-wrapper">
            <a href="../login/login.html" class="create-link">
              Already Have An Account
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export { Signup };
