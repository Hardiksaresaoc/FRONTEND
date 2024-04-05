"use client";
import React, { useState, useEffect } from "react";
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

  const router = useRouter();
  const [cookies, setCookie] = useCookies(["token"]);

  useEffect(() => {
    const token = cookies.token;
    if (token) {
      handleLoginSuccess(token);
    } else {
      return;
    }
  }, []);

  const validateForm = () => {
    let newErrors = {};

    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputBlur = (field) => {
    setTouchedFields((prevTouched) => ({
      ...prevTouched,
      [field]: true,
    }));
  };

  const submithandler = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:3001/auth/login",
        { email, password },
        config
      );
      //
      console.log(data.token);
      if (data === 401) {
        setErrors({
          email: "Email or password is incorrect.",
        });
      } else {
        setCookie("token", data.token);
        handleLoginSuccess(data.token);
      }
    } catch (error) {
      console.error("An error occurred while logging in:", error);
      // Display error message to the user
    }
  };

  const handleLoginSuccess = (token) => {
    const decodedToken = jwtDecode(token);
    if (decodedToken.role === "ADMIN") {
      router.push("/admin");
    } else if (decodedToken.role === "FUNDRAISER") {
      router.push("/fundraiser");
    } else if (decodedToken.role === "NORMAL_USER_ROLE") {
      router.push("/user");
    } else {
      router.push("/");
    }
  };

  return (
    <>
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
                <label>Email</label>
                <div className="email-inside">
                  <i className="fa-regular fa-envelope"></i>
                  <input
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => handleInputBlur("email")}
                    type="email"
                    value={email}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                {touchedFields.email && errors.email && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "14px",
                      marginBottom: "6px",
                    }}
                  >
                    {errors.email}
                  </p>
                )}
              </div>
              <div className="psw">
                <label>Password</label>
                <div className="psw-inside">
                  <i className="fa-solid fa-key"></i>
                  <input
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={() => handleInputBlur("password")}
                    type="password"
                    value={password}
                    placeholder="Enter your password"
                    required
                  />
                </div>
                {touchedFields.password && errors.password && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "14px",
                      marginBottom: "6px",
                    }}
                  >
                    {errors.password}
                  </p>
                )}
              </div>
              <div className="identification">
                <div className="remember">
                  <input type="checkbox" name="remember-me" />
                  <label>Remember&nbsp;me</label>
                </div>
                <div className="forgot">
                  <p>
                    <a href="/forgot">Forgot password?</a>
                  </p>
                </div>
              </div>
              <div className="submit">
                <button
                  type="submit"
                  onClick={submithandler}
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
    </>
  );
};

export default LoginPage;
