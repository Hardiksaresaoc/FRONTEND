"use client";
import useAuth from "@/context/auth";
import Header from "@/component/header";
import loading from "../loading";

const AdminPage = () => {
  const { user } = useAuth(["NORMAL_USER_ROLE"]);

  if (!user) {
    return null;
  }
  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      {user && user == "NORMAL_USER_ROLE" ? (
        <div>
          <Header />
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        loading
      )}
    </div>
  );
};

export default AdminPage;
