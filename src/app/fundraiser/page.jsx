import React from "react";
import "./style.css";
export default function Page() {
  return (
    <>
      <div className="container">
        <div className="banner">
          <div className="imgarea">
            <img
              src="/images/fundraisal.png"
              alt="Banner"
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div className="resolution">
          <div className="goal">
            <div className="outer-circle">
              <div className="in-circle">
                <p className="p">(50%)</p>
                <p className="pp">
                  <i className="fa-solid fa-indian-rupee-sign r"></i>
                  1,500
                  <br />
                  <span className="p">
                    of
                    <i className="fa-solid fa-indian-rupee-sign pe"></i>
                    3000
                  </span>
                  goal
                </p>
              </div>
            </div>
          </div>
          <div className="aboutmy">
            <h1>About My Resolution</h1>
            <p>
              Habitant nisl luctus feugiat integer amet sagittis tincidunt. Id
              ac malesuada molestie in etiam ac. Ac erat viverra metus ut augue
              adipiscing ornare vitae. Non consectetur at sit ultrices feugiat
              sit suscipit malesuada. Sit vel vel odio pretium nunc eget
              habitasse dui. Viverra sit suspendisse volutpat et risus.
            </p>
            <a href="#">
              <button type="button" className="ctaBtn">
                <i className="fa-solid fa-share-nodes"></i>Share
              </button>
            </a>
            <a href="#">
              <button type="button" className="ctaBtn filled">
                Contribute
              </button>
            </a>
          </div>
        </div>
      </div>
      <aside>
        <div className="mystory">
          <ul>
            <li>
              <a href="#" className="active">
                <button type="button" className="ctaBtn active">
                  My Story
                </button>
              </a>
            </li>
            <li>
              <a href="#">
                <button type="button" className="ctaBtn">
                  Gallery
                </button>
              </a>
            </li>
          </ul>
        </div>
        <div className="our">
          <div className="story">
            <p>
              Habitant nisl luctus feugiat integer amet sagittis tincidunt. Id
              ac malesuada molestie in etiam ac. Ac erat viverra metus ut augue
              adipiscing ornare vitae. Non consectetur at sit ultrices feugiat
              sit suscipit malesuada. Sit vel vel odio pretium nunc eget
              habitasse dui. Viverra sit suspendisse volutpat et risus. Sit vel
              vel odio pretium nunc eget habitasse dui. Viverra sit suspendisse
              volutpat et risus. Sit vel vel odio pretium nunc eget habitasse
              dui. Viverra sit suspendisse volutpat et risus.
            </p>
            <h2>Money raised for</h2>
            <p>
              Habitant nisl luctus feugiat integer amet sagittis tincidunt. Id
              ac malesuada molestie in etiam ac. Ac erat viverra metus ut augue
              adipiscing ornare vitae. Non consectetur at sit ultrices feugiat
              sit suscipit malesuada. Sit vel vel odio pretium nunc eget
              habitasse dui. Viverra sit suspendisse volutpat et risus. Sit vel
              vel odio pretium nunc eget habitasse dui. Viverra sit suspendisse
              volutpat et risus. Sit vel vel odio pretium nunc eget habitasse
              dui. Viverra sit suspendisse volutpat et risus.
            </p>
          </div>
          <div className="supporters">
            <div className="ters">
              <h3>Our Supporters</h3>
              <p className="support">
                <i className="fa-sharp fa-solid fa-play triangle"></i>
                Jaivik Dharamsingh Pandey
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
