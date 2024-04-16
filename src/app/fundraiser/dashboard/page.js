"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import "./module.dashboard.css";

export default function FundraiserPage() {
  const [fundraisers, setFundraisers] = useState([]);
  const [error, setError] = useState(null);
  const [active, setactive] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://661b896f65444945d04faf34.mockapi.io/fundrasier"
        );
        setFundraisers(response.data); // Set the response data to the state
      } catch (error) {
        setError("Error fetching fundraisers. Please try again later.");
        console.error("Error fetching fundraisers:", error);
      }
    };
    fetchData();
  }, []);
  // const handleToggleStatus = async (id) => {
  //   try {
  //     // Create a copy of fundraisers state
  //     const updatedFundraisers = fundraisers.map((fundraiser) =>
  //       fundraiser.id === id
  //         ? { ...fundraiser, status: !fundraiser.status }
  //         : fundraiser
  //     );
  //     // Optimistically update local state
  //     setFundraisers(updatedFundraisers);

  //     // Make API request to update status
  //     await axios.put(
  //       `https://661b896f65444945d04faf34.mockapi.io/fundrasier/${id}`,
  //       {
  //         status: !updatedFundraisers.find((fundraiser) => fundraiser.id === id)
  //           .status,
  //       }
  //     );
  //   } catch (error) {
  //     // Revert back UI toggle state on error
  //     const previousFundraisers = fundraisers.map((fundraiser) =>
  //       fundraiser.id === id
  //         ? { ...fundraiser, status: !fundraiser.status }
  //         : fundraiser
  //     );
  //     setFundraisers(previousFundraisers);

  //     setError("Error updating fundraiser status. Please try again later.");
  //     console.error("Error updating fundraiser status:", error);
  //   }
  // };

  return (
    <>
      <section>
        <div className="leftSection">
          <div className="tab">
            <a href="/generateCode">
              <button type="submit" className="tabButton">
                <i className="fa-regular fa-circle mainCircle"></i> Generate
              </button>
            </a>
            <a href="dashboad/fundraisers">
              <button type="submit" className="tabButton active">
                <i className="fa-regular fa-circle mainCircle"></i> Fundraisers
              </button>
            </a>
            <a href="/AddDonation">
              <button type="submit" className="tabButton">
                <i className="fa-regular fa-circle mainCircle"></i> Donation
              </button>
            </a>
          </div>
        </div>
        {/* <div className="rightSection">
          <h1>Fundraisers</h1>
          {error && (
            <p
              style={{ color: "red", fontSize: "120%", marginBottom: "0.5em" }}
              className="error "
            >
              {error}
            </p>
          )}
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>URL</th>
                <th>Status</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {fundraisers.map((fundraiser) => (
                <tr key={fundraiser.id}>
                  <td>{fundraiser.id}</td>
                  <td>{fundraiser.name}</td>
                  <td>{fundraiser.email}</td>
                  <td>{fundraiser.phoneNumber}</td>
                  <td>{fundraiser.url}</td>
                  <td>
                    <label className="switch">
                      <input
                        type="checkbox"
                        onChange={() => {
                          // Toggle the status locally
                          const updatedStatus = !fundraiser.status;
                          // Update the status in the state
                          setFundraisers((prevFundraisers) =>
                            prevFundraisers.map((item) =>
                              item.id === fundraiser.id
                                ? { ...item, status: updatedStatus }
                                : item
                            )
                          );
                          // Make API request to update status
                          axios.put(
                            `https://661b896f65444945d04faf34.mockapi.io/fundrasier/${fundraiser.id}`,
                            { status: updatedStatus }
                          );
                        }}
                        defaultChecked={fundraiser.status}
                      />
                      <span className="slider round"></span>
                    </label>
                  </td>
                  <td>
                    <a href="#">
                      <i className="fa-solid fa-pen-to-square editText"></i>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}
      </section>
    </>
  );
}
