import "./dashboard.css";
export default function Dashboard() {
  return (
    <>
      <section>
        <div class="main">
          <div class="leftSection">
            <div class="content">
              <h1>Heroes Who Shielded Us, Let's Shield Their Future.</h1>
              <p>
                Creating a society where every family of our defence
                <br /> martyrs & veterans is self-dependent and can live a<br />
                healthy life like us.
              </p>
            </div>
          </div>
          <div class="rightSection">
            <div class="imgArea">
              <img
                src="/images/FrontImage.png"
                alt="Soldiers"
                height="300"
                width="100"
              />
            </div>
          </div>
        </div>
        <div class="lowerPart">
          <p>
            Fundraising Page Link: <a href="#">http://xyz.123/ngo-123</a>
          </p>
        </div>
      </section>
      <aside>
        <div class="leftAside">
          <div class="container">
            <a href="#">
              <p class="active">
                <img
                  src="/images/dashboard.png"
                  alt="dashboard"
                  class="sidebarImg"
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
                  class="sidebarImg"
                  height="16"
                  width="16"
                />
                Fundraiser
              </p>
            </a>
            <a href="#">
              <p>
                <i class="fa-solid fa-image asideIcon"></i>Photos
              </p>
            </a>
            <a href="#">
              <p>
                <img
                  src="/images/table.png"
                  alt="Report"
                  class="sidebarImg"
                  height="16"
                  width="16"
                />
                Donations Report
              </p>
            </a>
          </div>
        </div>
        <div class="rightAside">
          <div class="upperPortion">
            <h2>Welcome to your Support our Heroes Account!</h2>
          </div>
          <div class="lowerPortion">
            <div class="donors">
              <div class="totalRaise">
                <p>
                  <i class="fa-solid fa-coins"></i>Total Amount Raised
                </p>
                <p class="amtMoney">&#8377; 4,84,100</p>
              </div>
              <div class="totalDonors">
                <p>
                  <i class="fa-solid fa-hand-holding-heart"></i>No. of Donors
                </p>
                <p class="no-donor">20</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
