"use client";
import { Cookies } from "react-cookie";
import Header from "@/component/header";
import useAuth from "@/context/auth";
import axios from "axios";
import { useEffect, useState } from "react";

const Admin = () => {
  const { user } = useAuth("ADMIN"); // Example allowed roles
  const [token, setToken] = useState(""); // Initialize token with an empty string
  const cookies = new Cookies();
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const data = cookies.get("token");
    setToken(data || ""); // Set token to an empty string if data is undefined
  }, []);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const viewAllUser = async () => {
    try {
      const userdata = await axios.get(
        "http://localhost:3001/admin/user",
        config
      );
      setUserData(userdata.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  const deleteUser = async (id) => {
    try {
      await axios.delete(
        `http://localhost:3001/admin/user/delete/${id}`,
        config
      );
      setUserData(userData.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  return (
    <>
      {/* <Header rolename={"Admin"} role={"ADMIN"} /> */}
      <h1>Admin Page</h1>
      {user && (
        <div>
          <h2>
            {user.firstName} {user.lastName}
            {user.profle || "hello"}
          </h2>
          <button onClick={viewAllUser}>View All User</button>
          <div className="user-cards">
            {userData.map((user) => (
              <div key={user.id} className="user-card">
                <h3>
                  {user.firstName} {user.lastName}
                </h3>
                <p>Email: {user.email}</p>
                <p>Role: {user.role}</p>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Admin;
