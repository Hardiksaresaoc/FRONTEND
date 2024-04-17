import "./module.update.css";
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
                <br />
                martyrs & veterans is self-dependent and can live a<br />
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
              <p className="active">
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
              <p>
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
          <h1>Update Fundraiser Page</h1>
          <form>
            <div className="mainCol">
              <div className="firstCol">
                <label htmlFor="FundraisingTarget">
                  Fundraising Target (INR)
                  <span>*</span>
                  <br />
                  <input
                    type="number"
                    name="FundraisingTarget"
                    id="FundraisingTarget"
                  />
                </label>
                <label htmlFor="MyStory">
                  About My Resolution <span>*</span>
                  <br />
                  <textarea
                    name="MyStory"
                    id="MyStory"
                    cols="30"
                    rows="10"
                  ></textarea>
                </label>
              </div>
              <div className="secondCol">
                <label htmlFor="MyStory" className="aboutMe">
                  My Story *<br />
                  <textarea
                    name="MyStory"
                    id="MyStory"
                    cols="30"
                    rows="16"
                  ></textarea>
                </label>
              </div>
            </div>
            <div className="thirdCol">
              <label htmlFor="MoneyRaised">
                Money Raised For *<br />
                <textarea
                  name="MoneyRaised"
                  id="MoneyRaised"
                  cols="30"
                  rows="5"
                ></textarea>
              </label>
            </div>
            <div className="submitButton">
              <button type="submit" className="formButton">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </aside>
    </>
  );
}
