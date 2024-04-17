import React from "react";
import "./report.css";

export default function page() {
  return (
    <>
      <section>
        <div className="main">
          <div className="leftSection">
            <div className="content">
              <h1>Heroes Who Shielded Us, Let's Shield Their Future.</h1>
              <p>
                Creating a society where every family of our defence
                <br /> martyrs & veterans is self-dependent and can live a<br />
                healthy life like us.
              </p>
            </div>
          </div>
          <div className="rightSection">
            <div className="imgArea">
              <img
                src="/images/FrontImage.png"
                alt="Soldiers"
                height="300"
                width="100"
              />
            </div>
          </div>
        </div>
        <div className="lowerPart">
          <p>
            Fundraising Page Link: <a href="#">http://xyz.123/ngo-123</a>
          </p>
        </div>
      </section>
      <aside>
        <div className="leftAside">
          <div className="container">
            <a href="#">
              <p>
                <img
                  src="/images/dashboard.png"
                  alt="dashboard"
                  className="sidebarImg"
                  height="16"
                  width="16"
                />
                Dashboard
              </p>
            </a>
            <a href="#">
              <p>
                <img
                  src="/images/circle.png"
                  alt="fundraiser"
                  className="sidebarImg"
                  height="16"
                  width="16"
                />
                Fundraiser
              </p>
            </a>
            <a href="#">
              <p>
                <i className="fa-solid fa-image asideIcon"></i>Photos
              </p>
            </a>
            <a href="#">
              <p className="active">
                <img
                  src="/images/table.png"
                  alt="Report"
                  className="sidebarImg"
                  height="16"
                  width="16"
                />
                Donations Report
              </p>
            </a>
          </div>
        </div>

        <div className="rightAside">
          <h1>Donation Report</h1>
          <form>
            <div className="upperForm">
              <span>
                <span>FromDate</span>
                <br />
                <input type="date" name="fromDate" id="fromDate" />
              </span>
              <span>
                <span>ToDate</span>
                <br />
                <input type="date" name="ToDate" id="ToDate" />
              </span>
              <span>
                <span>Donation Id</span>
                <br />
                <input type="text" name="donationId" id="donationId" />
              </span>
              <span>
                <label htmlFor="browser">Payment Options</label>
                <br />
                <input list="browsers" name="browser" id="browser" />
                <datalist id="browsers">
                  <option value="Edge" />
                  <option value="Firefox" />
                  <option value="Chrome" />
                  <option value="Opera" />
                  <option value="Safari" />
                </datalist>
              </span>
            </div>
            <div className="lowerForm">
              <p>
                <label htmlFor="paymentStatus">Payment Status</label>
                <br />
                <input
                  list="paymentStatusOptions"
                  name="paymentStatus"
                  id="paymentStatus"
                />
                <datalist id="paymentStatusOptions">
                  <option value="Success" />
                  <option value="Failed" />
                  <option value="Pending" />
                </datalist>
              </p>
              <button type="button" className="formsearchButton">
                <a href="#">
                  <i className="fa-solid fa-magnifying-glass"></i> Search
                </a>
              </button>
            </div>
          </form>
          <button type="button" className="downloadExcel">
            <i className="fa-solid fa-file-excel"></i> Download Excel
          </button>
          <table>
            <thead>
              <tr>
                <th>Donation Id</th>
                <th>Donation Date</th>
                <th>Donor Details</th>
                <th>Fundraiser Details</th>
                <th>Amount</th>
                <th>Payment Option</th>
                <th>Payment Status</th>
                <th>Certificate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>04 April 2024</td>
                <td>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nostrum sequi quidem temporibus veritatis nulla minus mollitia
                  illum saepe, adipisci a quibusdam doloribus consequuntur
                  aperiam tempore possimus assumenda quo nam dolorem!
                </td>
                <td></td>
                <td>10,000</td>
                <td>Office</td>
                <td>Success</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </aside>
    </>
  );
}
