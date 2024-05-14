import * as React from "react";
import { useEffect, useState } from "react";
import Logo from "../../assets/LA-Logos/LAL-2.png";

function ResponsiveAppBar() {
  const [auth, setAuth] = useState(false);

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, []);

  return (
    <nav
      className="flex items-center justify-between flex-wrap px-6"
      style={{ background: "rgb(145 199 213 / 64%)" }}
    >
      <div
        className="flex items-center flex-shrink-0 text-white mr-6"
        style={{ width: "9rem", height: "5rem", paddingTop: "1rem" }}
      >
        <a href="/">
          <img src={Logo} alt="" width={"100%"} />
        </a>
      </div>
      <div className="block hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="block flex-grow flex items-center w-auto">
        <div className="text-sm mx-auto">
          <a
            href="#responsive-header"
            className="block mt-4 inline-block mt-0 text-black hover:text-white mx-8"
            style={{ fontWeight: 700 }}
          >
            Home
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 inline-block mt-0 text-black hover:text-white mx-8"
            style={{ fontWeight: 700 }}
          >
            Features
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 inline-block mt-0 text-black hover:text-white mx-8"
            style={{ fontWeight: 700 }}
          >
            Pricing
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 inline-block mt-0 text-black hover:text-white mx-8"
            style={{ fontWeight: 700 }}
          >
            Demo Call
          </a>
        </div>
        <div className="w-full md:w-auto">
          {auth ? (
            <a
              href="#"
              className="section-button"
              style={{ padding: "5px 15px", fontSize: 15, fontWeight: 600 }}
              onClick={() => {
                localStorage.clear();
                setAuth(false);
              }}
            >
              Log Out
            </a>
          ) : (
            <a
              href="/register"
              className="section-button"
              style={{ padding: "5px 15px", fontSize: 15, fontWeight: 600 }}
            >
              Join Us
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}
export default ResponsiveAppBar;
