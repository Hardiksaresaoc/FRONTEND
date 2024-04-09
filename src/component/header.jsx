"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { useCookies } from "react-cookie";
import useAuth from "@/context/auth";
import "./module.header.css"; // Assuming this imports your custom styles

export default function Header({ role, rolename }) {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const router = useRouter();
  const { user } = useAuth(role);

  const handleLogout = () => {
    removeCookie("token");
    router.push("/login");
  };

  return (
    <header className="head">
      <div className="logo">
        <img
          src="images/ProjectLogo.png"
          alt="Webpage Logo"
          className="logoImg"
          height="100"
          width="100"
        />
      </div>
      <nav className="headerNav">
        <ul className="headerUL">
          <li className="headerLi">
            <Link legacyBehavior href="/">
              <a className="navlink active">Home</a>
            </Link>
          </li>
          <li className="dropdownLi">
            <div className="dropdown">
              <button className="dropbtn navlink">
                Projects
                <i className="fa fa-caret-down downIcon"></i>
              </button>
              <div className="dropdown-content">
                <a href="#" className="dropdownProject">
                  Project PITHU
                </a>
                <a href="#" className="dropdownProject">
                  Project SEHAT
                </a>
                <a href="#" className="dropdownProject">
                  Project SAKSHAM
                </a>
                <a href="#" className="dropdownProject">
                  Project SASHAKT
                </a>
                <a href="#" className="dropdownProject">
                  Project INSANIYAT
                </a>
              </div>
            </div>
          </li>
          <li className="dropdownLi">
            <div className="dropdown">
              <button className="dropbtn navlink">
                About Us
                <i className="fa fa-caret-down downIcon"></i>
              </button>
              <div className="dropdown-content">
                <a href="#" className="dropdownProject">
                  Vission & Mission
                </a>
                <a href="#" className="dropdownProject">
                  Team
                </a>
                <a href="#" className="dropdownProject">
                  Letters of
                  <br />
                  Appreciation
                </a>
                <a href="#" className="dropdownProject">
                  Legal Status
                </a>
                <a href="#" className="dropdownProject">
                  Tax Exemption
                  <br />
                  Donation FAQs
                </a>
              </div>
            </div>
          </li>
          <li className="headerLi">
            <Link legacyBehavior href="#">
              <a className="navlink">Our FAQs</a>
            </Link>
          </li>
          <li className="headerLi">
            <Link legacyBehavior href="#">
              <a className="navlink">Contact Us</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="headerBtn">
        {user ? (
          <>
            <h5>
              Hello {rolename}
              <span style={{ color: "red", marginTop: "10px" }}>
                {user.firstName}
                <br />
                <Button onClick={handleLogout}>Logout</Button>
              </span>
            </h5>
            <div className="upper-btn">
              <Link
                legacyBehavior
                href="https://supportourheroes.in/donate-now/"
              >
                <button className="innerBtn">Donate</button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <Link legacyBehavior href="/login">
              <button className="innerBtn">Log in</button>
            </Link>
            <Link legacyBehavior href="https://supportourheroes.in/donate-now/">
              <button className="innerBtn filled">Donate</button>
            </Link>
          </>
        )}
        <i className="fa-solid fa-bars headerIcon"></i>
      </div>
    </header>
  );
}
