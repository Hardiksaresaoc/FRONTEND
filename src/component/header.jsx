"use client";
import useAuth from "@/context/auth";
import "./module.header.css";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";

export default function Header({ role, rolename }) {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const router = useRouter();
  // changeble;
  const { user } = useAuth(role);
  const handlelogout = () => {
    removeCookie("token"); // Remove the token cookie
    router.push("/login");
  };
  return (
    <>
      <header>
        <div className="logo">
          <img src="images/ngo-logo.png" alt="Support Our Heroes" />
        </div>
        <nav>
          <ul>
            <li>
              <Link href="Home">Home</Link>
            </li>
            <li>
              <Link href="Projects">Projects</Link>
            </li>
            <li>
              <Link href="About">About</Link>
            </li>
            <li>
              <Link href="Indian Army">Indian Army</Link>
            </li>
            <li>
              <Link href="Letters of Appreciation">
                Letters of Appreciation
              </Link>
            </li>
            <li>
              <Link href="Our FAQs">Our FAQs</Link>
            </li>
            <li>
              <Link href="Contact Us">Contact Us</Link>
            </li>
          </ul>
        </nav>
        {user ? (
          <>
            {/* CHANGETHIS WITH actual user componnet */}
            <h5>
              hello {rolename}
              <span style={{ color: "red ", marginTop: "10px" }}>
                {user.firstName}
                <br />
                <Button onClick={handlelogout}>logout</Button>
              </span>
            </h5>
            <div className="upper-btn">
              <Link href="https://supportourheroes.in/donate-now/">
                <button className="btn-2">Donate</button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="upper-btn">
              <Link href="/login">
                <button className="btn-1">Log in</button>
              </Link>

              <Link href="https://supportourheroes.in/donate-now/">
                <button className="btn-2">Donate</button>
              </Link>
            </div>
          </>
        )}
      </header>
    </>
  );
}
