import "./module.image.css";
export default function page() {
  return (
    <>
      <>
        <header className="header">
          {/* left content logo*/}
          <div className="left">
            <img
              src="/images/dashboard.png"
              alt="WEBSITE LOGO"
              height="85px"
              width="100%"
            />
          </div>
          {/* mid content navbar*/}
          <div className="mid">
            <ul className="nav">
              <li>
                <a href="#" className="navLink active">
                  Home
                </a>
              </li>
              <div className="dropdown">
                <li>
                  <a href="#" className="navLink">
                    Project <i className="fa-solid fa-caret-down drop" />
                  </a>
                </li>
                <div className="dropdown-content">
                  <a href="#">Project PITHU</a>
                  <a href="#">Project SEHAT</a>
                  <a href="#">Project SAKSHAM</a>
                  <a href="#">Project SASHAKT</a>
                  <a href="#">Project INSANIYAT</a>
                </div>
              </div>
              <div className="dropdown">
                <li>
                  <a href="#" className="navLink">
                    About
                    <i className="fa-solid fa-caret-down drop" />
                  </a>
                </li>
                <div className="dropdown-content">
                  <a href="#">Vision &amp; Mission</a>
                  <a href="#">Team</a>
                  <a href="#">Letters of Appreciation</a>
                  <a href="#">Legal Status</a>
                  <a href="#">TAX EXEMPTION DONATION FAQS</a>
                </div>
              </div>
              <li>
                <a href="#" className="navLink">
                  Our FAQs
                </a>
              </li>
              <li>
                <a href="#" className="navLink">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          {/*right content button*/}
          <div className="rightmain">
            <div className="right">
              <button type="button" className="ctaBtn">
                Donate
              </button>
            </div>
            <div className="profileimg">
              <button type="button" className="profilebutton">
                <img src="/images/dashboard.png" width={40} height={40} />
                <div className="custom-dropdown">
                  <div className="selected-option">
                    <i className="fa-solid fa-angle-up fa-rotate-180" />
                  </div>
                  <ul className="dropdown-options">
                    <li data-value="option1">log out</li>
                  </ul>
                </div>
              </button>
            </div>
          </div>
        </header>
        {/* hr row */}
        <hr />
        {/*start fundraising man link page*/}
        <section className="backgroundwrapper">
          <div className="pagelink">
            <p>
              Fundraising Page Link:<a href="#"> http://xyz.123/ngo-123</a>
            </p>
          </div>
          <div className="inform">
            <h1>Heroes Who Shielded Us, Let's Shield Their Future.</h1>
            <p>
              Creating a society where every family of our defence
              <br />
              martyrs &amp; veterans is self-dependent and can live a <br />
              healthy life like us.
            </p>
          </div>
          <div className="heroimg">
            <img src="/images/dashboard.png" />
          </div>
        </section>
        {/*slid bar for fichar*/}
        <section className="photowrapper">
          <div className="barmenu">
            <div className="dashboard">
              <p>
                <img src="img\menu.png" width="100%" height="100%" />
                <a href="#" className="Dashboard">
                  Dashboard
                </a>
              </p>
            </div>
            <div className="fungraiser">
              <p>
                <img src="img\info.png" width="100%" height="100%" />
                <a href="#" className="Fungraiser">
                  Fungraiser
                </a>
              </p>
            </div>
            <div className="photo active">
              <p>
                <img src="img\photo.png" width="100%" height="100%" />
                <a href="#" className="Photos">
                  Photos
                </a>
              </p>
            </div>
            <div className="report">
              <p>
                <img
                  src="img\dashboard-interface (1).png"
                  width="100%"
                  height="100%"
                />
                <a href="#" className="Donations">
                  Donations<b>Report</b>
                </a>
              </p>
            </div>
          </div>
          {/*start img uplodar*/}
          <div className="imgwrapper">
            <div className="imgcount">
              <p>
                Photos (21)
                <a href="#">
                  <button onclick="thisFileUpload();" className="ctaBtn">
                    <input type="file" id="file" style={{ display: "none" }} />
                    <i className="fa-solid fa-arrow-up-from-bracket" />
                    Upload Photo
                  </button>
                </a>
              </p>
            </div>
            <div className="row">
              <div className="col">
                <button type="button" className="delete">
                  <i className="fa-solid fa-trash" />
                </button>
                <img src="img\logo.png" />
              </div>
              <div className="col 1">
                <button type="button" className="delete">
                  <i className="fa-solid fa-trash" />
                </button>
                <img src="img\logo.png" />
              </div>
              <div className="col 2">
                <button type="button" className="delete">
                  <i className="fa-solid fa-trash" />
                </button>
                <img src="/images/dashboard.png" />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button type="button" className="delete">
                  <i className="fa-solid fa-trash" />
                </button>
                <img src="img\logo.png" />
              </div>
              <div className="col 1">
                <button type="button" className="delete">
                  <i className="fa-solid fa-trash" />
                </button>
                <img src="/images/dashboard.png" />
              </div>
              <div className="col 2">
                <button type="button" className="delete">
                  <i className="fa-solid fa-trash" />
                </button>
                <img src="img\logo.png" />
              </div>
            </div>
          </div>
        </section>
        {/*start dropdown function*/}
      </>
    </>
  );
}
