"use client";
import React, { useState, useEffect } from "react";

const fetchData = async () => {
  const id = Math.ceil(Math.random() * 60);
  try {
    const response = await fetch(
      `https://66085aefa2a5dd477b1460e8.mockapi.io/fapi/ngo/percentage/${id}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data.total;
  } catch (error) {
    console.error("Error fetching data:", error);
    return 0;
  }
};

const CircularProgressBar = ({ total, raised }) => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData().then((total) => {
      setProgress(total);
      setIsLoading(false);
    });
  }, []);
  const circleStyle = {
    strokeDasharray: `100`,
    strokeDashoffset: `${100 - Math.min(progress, 100)}`,
  };

  return (
    <div className="circular">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <svg viewBox="0 0 100 100">
            <circle className="inner" cx="50" cy="50" r="40" />
            <circle
              className="bar"
              cx="50"
              cy="50"
              r="40"
              style={circleStyle}
            />
          </svg>
          <div className="numb">{progress}%</div>
        </>
      )}
    </div>
  );
};

// import useAuth from "../../AUTH/auth";

const HomePage = () => {
  return (
    <div className="container">
      <CircularProgressBar />
    </div>
  );
};
// export default HomePage;
import useAuth from "@/context/auth";
import Header from "@/component/header";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import Loading from "../loading";

const MyComponent = () => {
  const { user } = useAuth("FUNDRAISER"); // Example allowed roles
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  const handleLogout = () => {
    // logout();
    removeCookie("token"); // Remove the token cookie
    router.push("/login"); //
  };

  return (
    <div>
      {user ? (
        <div>
          <Header role={"FUNDRAISER"} />
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default MyComponent;

// export default withauth(HomePage);
