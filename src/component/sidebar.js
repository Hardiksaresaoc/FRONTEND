"use client";
import { usePathname, useRouter } from "next/navigation";
// import "../fundraiser/fundraiser-dashboad/module.fundraiser.css";
import "@/app/fundraiser/dashboard/module.dashboard.css";
export default function Sidebar() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <>
      <div className="leftSection">
        <div className="tab">
          <a href="generatecode">
            <button
              type="submit"
              className={`tabButton ${
                pathname === "/admin/generatecode" ? "active" : ""
              }`}
            >
              <i className="fa-regular fa-circle mainCircle"></i> Generate
            </button>
          </a>
          <a href="fundraisers">
            <button
              type="submit"
              className={`tabButton ${
                pathname === "/admin/fundraisers" ? "active" : ""
              }`}
            >
              <i className="fa-regular fa-circle mainCircle"></i> Fundraisers
            </button>
          </a>
          <a href="adddonation">
            <button
              type="submit"
              className={`tabButton ${
                pathname === "/admin/adddonation" ? "active" : ""
              }`}
            >
              <i className="fa-regular fa-circle mainCircle"></i> Donation
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
