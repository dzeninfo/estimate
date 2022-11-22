function Login() {
  return (
    <>
      <form className="header__form login-form">
        <div className="login-form__input-box">
          <label className="login-form__lable">
            Username
          </label>
            <input className="login-form__input" type="text" name="username" />
        </div>
        <div className="login-form__input-box">
          <label className="login-form__lable">
            Password
          </label>
            <input className="login-form__input" type="password" name="password" />
        </div>
      </form>
    </>
  );
}

export default Login;
