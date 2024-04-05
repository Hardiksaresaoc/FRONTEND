"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Header from "@/component/header";
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState({
    email: false,
    password: false,
  });

  return (
    <>
      <body>
        <div className="main">
          <Header />
          <section>
            <div className="left">
              <form>
                <div className="form-img">
                  <img src="images/login-forn.png" alt="form-image" />
                </div>
                <h2>Log In</h2>
                <div className="email">
                  <label htmlFor="email">Email</label>
                  <div className="email-inside">
                    <i className="fa-regular fa-envelope"></i>
                    <input
                      name="email"
                      // onChange={(e) => setEmail(e.target.value)}
                      // onBlur={() => handleInputBlur("email")}
                      type="email"
                      value={email}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  {/* {touchedFields.email && errors.email && (
                    <p
                      style={{
                        color: "red",
                        fontSize: "14px",
                        marginBottom: "6px",
                      }}
                    >
                      {errors.email}
                    </p>
                  )} */}
                </div>
                <div className="psw">
                  <label htmlFor="password">Password</label>
                  <div className="psw-inside">
                    <i className="fa-solid fa-key"></i>
                    <input
                      name="password"
                      // onChange={(e) => setPassword(e.target.value)}
                      // onBlur={() => handleInputBlur("password")}
                      // type="password"
                      // value={password}
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  {/* {touchedFields.password && errors.password && (
                    <p
                      style={{
                        color: "red",
                        fontSize: "14px",
                        marginBottom: "6px",
                      }}
                    >
                      {errors.password}
                    </p>
                  )} */}
                </div>
                <div className="identification">
                  <div className="remember">
                    <input type="checkbox" name="remember-me" />
                    <label htmlFor="remember me">Remember&nbsp;me</label>
                  </div>
                  <div className="forgot">
                    <p>
                      <a href="Forgot password">Forgot password?</a>
                    </p>
                  </div>
                </div>
                <div className="submit">
                  <button
                    type="submit"
                    // onClick={submithandler}
                    className="submit"
                  >
                    Log In
                  </button>
                </div>
              </form>
            </div>
            <div className="right">
              <h1>Empower Fundraising Heroes: Your Appeal Sparks Change!</h1>
              <div className="help-img">
                <img src="images/login-image.png" alt="Help Each Other" />
              </div>
            </div>
          </section>
        </div>
      </body>
    </>
  );
};

export default LoginPage;
