"use client";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { jwtDecode } from "jwt-decode";
// import { Cookies } from "react-cookie";

// const useAuth = (allowedRoles) => {
//   const router = useRouter();
//   const [user, setUser] = useState(null);
//   const cookies = new Cookies();

//   useEffect(() => {
//     const token = cookies.get("token");

//     if (!token) {
//       router.push("/login");
//       return;
//     }

//     const decodedToken = jwtDecode(token);

//     if (!decodedToken || !decodedToken.role) {
//       router.replace("/login");
//       return;
//     }

//     // Check if allowedRoles is defined and not empty before using includes
//     if (
//       allowedRoles &&
//       allowedRoles.length > 0 &&
//       !allowedRoles.includes(decodedToken.role)
//     ) {
//       router.replace("/unauthorized");
//       return;
//     }

//     setUser(decodedToken);
//   }, []);

//   return { user };
// };

// export default useAuth;
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import { Cookies } from "react-cookie";

const useAuth = (allowedRoles) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const cookies = new Cookies();

  useEffect(() => {
    const token = cookies.get("token");

    if (!token) {
      router.push("/login");
      return;
    }

    const decodedToken = jwtDecode(token);

    if (!decodedToken || !decodedToken.role) {
      router.replace("/login");
      return;
    }

    // Check if allowedRoles is defined and not empty before using includes
    if (
      allowedRoles &&
      allowedRoles.length > 0 &&
      !allowedRoles.includes(decodedToken.role)
    ) {
      router.replace("/unauthorized");
      return;
    }

    // Check if the token has expired
    const currentTime = Date.now() / 1000; // Convert to seconds
    if (decodedToken.exp && decodedToken.exp < currentTime) {
      cookies.remove("token"); // Remove expired token
      setUser(null);
      router.push("/login");
      return;
    }

    // Set a timer to automatically delete the token after 15 minutes
    const timer = setTimeout(() => {
      cookies.remove("token"); // Remove token after 15 minutes
      setUser(null);
      router.reload();
      router.push("/login");
    }, 15 * 60 * 1000); // 15 minutes in milliseconds

    // Cleanup function to clear the timer on unmount or token change
    return () => clearTimeout(timer);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { user };
};

export default useAuth;
