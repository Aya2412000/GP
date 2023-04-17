import React from "react";
import "./LOGIN.css";
import { useTranslation } from "react-i18next";
export default function LOGIN() {
  const [t, i18n] = useTranslation();

  return (
    <div className="container con">
      <h1> {t("Welcome to Herfa")}</h1>
      <div className="h-Line"></div>
      <div className=" form-container login-form">
        <form className="signProviderForm ">
          <div class="col-md-4 login-input">
            <div className="mb-3">
              <label for="user name" className="form-label">
                {t("user name")}
              </label>

              <input
                type="text"
                className="form-control "
                placeholder="@"
                id="user name"
                aria-label="Username"
                aria-describedby="basic-addon1"
                style={{ width: "270px" }}
                required
              />
            </div>
          </div>

          {/* كلمة المرور */}
          <div class="col-md-4 login-input">
            <div className="mb-3">
              <label for="Password1" className="form-label">
                {t("password")}
              </label>
              <input
                type="password"
                className="form-control "
                id="Password1"
                style={{ width: "270px" }}
                required
              />
            </div>
          </div>

          <button type="submit" className="btn btn-login ">
            {t("Login")}
          </button>
          {/* <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn  btn-login" type="button">
              {t("Login")}
            </button>
          </div> */}
        </form>
      </div>
    </div>
  );
}
