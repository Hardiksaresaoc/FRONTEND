"use client";
import { useState, useEffect } from "react";
import { redirect, useRouter } from "next/navigation";
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
    if (!allowedRoles.includes(decodedToken.role)) {
      router.replace("/unauthorized");
      return;
    }

    setUser(decodedToken);
  }, []);

  // const logout = () => {
  // cookies.remove("token");
  // setUser(null);
  // router.push("/login");
  // };
  return { user };
};

export default useAuth;
