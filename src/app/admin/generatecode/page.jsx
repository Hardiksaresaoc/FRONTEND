"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useAuth from "@/context/auth";
import Sidebar from "../../../component/sidebar";
import { Cookies } from "react-cookie";
import axios from "axios";

const GeneratePage = () => {
  const cookies = new Cookies();
  const router = useRouter();
  const { user } = useAuth(["ADMIN"]);
  const [email, setEmail] = useState("");
  const [firstName, setName] = useState("");
  const [token, settoken] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const data = cookies.get("token");
    settoken(data); // Set token to an empty string if data is undefined
  }, []);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "http://localhost:3001/admin/generate",
        {
          email,
          firstName,
        },
        config
      );
      console.log("Response data:", response.status); // Log response data
      if (!response.status == 201) {
        throw new Error("Failed to generate.");
      }
      router.push("/success");
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Sidebar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "40vh",
          width: "70vw",
        }}
      >
        <h1>Generate Fundraiser</h1>
        <form
          style={{ padding: "10px", margin: "10px" }}
          onSubmit={handleSubmit}
        >
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            Name:
            <input
              type="text"
              value={firstName}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
          <button type="submit" disabled={loading}>
            {loading ? "Loading..." : "Generate Token"}
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default GeneratePage;
