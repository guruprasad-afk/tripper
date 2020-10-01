import React from "react";

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  return (
    <section className="login">
      <div className="loginContainer">
        <label>Email</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <p className="errorMsg">{emailError}</p>
        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">
          {hasAccount ? (
            <div>
              <button onClick={handleLogin}>Log In</button>
              <p>
                Dont have an account?
                <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span>
              </p>
            </div>
          ) : (
            <div>
              <button onClick={handleSignup}>Sign Up</button>
              <p>
                Have an Account?
                <span onClick={() => setHasAccount(!hasAccount)}>SignIn</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default Login;
