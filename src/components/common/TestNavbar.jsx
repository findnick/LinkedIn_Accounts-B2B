import * as React from "react";
import { useEffect, useState } from "react";
import logo from "../../assets/LA-Logos/LAL-2-updated.png";

const TestNavbar = () => {
  const [auth, setAuth] = useState(false);
  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, []);
  const btnMeta = auth
    ? {
        href: "#",
        onClick: () => {
          localStorage.clear();
          setAuth(false);
        },
        text: "Log Out",
      }
    : {
        href: "/register",
        onClick: "",
        text: "Join Us",
      };
  const linkList = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Features",
      url: "#price-table",
    },
    {
      title: "Pricing",
      url: "#packages",
    },
    {
      title: "Demo Call",
      url: "#demo-call",
    },
  ];
  return (
    <nav className="p-5 flex items-center justify-between break-normal">
      <div className="flex">
        <a href="/"><img src={logo} alt="" className="h-10 inline" /></a>
        <button className="md:hidden nav-button flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white" name="menu" onClick={(e) => {
            console.log(e.currentTarget.name);
            let list = document.querySelector('ul');

            e.currentTarget.name === 'menu' ? (e.currentTarget.name = "close", list.classList.add('top-[80px]'), list.classList.add('opacity-100')) : (e.currentTarget.name = "menu", list.classList.remove('top-[80px]'), list.classList.remove('opacity-100'));
        }}>
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
      <ul className="bg-inherit md:bg-transparent z-[1] md:z-auto absolute md:static w-full left-0 md:w-auto mx-auto md:flex md:items-center mb-4 md:mb-0 py-4 md:py-0 opacity-0 md:opacity-100 top-[-400px] transition-all ease in duration-200">
        {linkList.map((link, index) => {
          return (
            <li key={index} className="mx-4 my-1 md:my-0">
              <a href={link.url} className="text-lg duration-100">
                {link.title}
              </a>
            </li>
          );
        })}
      </ul>
      <a
        href="#packages"
        className="section-button"
      >
        Join Us
      </a>
    </nav>
  );
};

export default TestNavbar;
