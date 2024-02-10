import Icons from "./Icons";
import linkedIn from "../assets/LinkedIn.png";
import facebook from "../assets/facebook.png";
import github from "../assets/GitHub.png";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function NavigationBar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("/home");

  useEffect(() => {
    // Extract the pathname from the location object
    const { pathname } = location;
    // Set the active link based on the current pathname
    setActiveLink(pathname);
  }, [location]);
  const routes = ["/home", "/about", "/tools", "/works", "/contact"];
  return (
    <nav className="divOne bg-dark w-full lg:w-[19.231rem] max-w-[19.231rem] px-[3.125rem] py-[3.75rem]">
      <div className="text-slate-50 h-full flex flex-col justify-between">
        <div className="navigation flex flex-col gap-[7.115rem]">
          <h1 className="font-ibmSerif font-bold text-[1.875rem]">Htk</h1>
          <ul className="flex flex-col gap-[1.25rem] font-ibmSans ">
            {routes.map((route) => (
              <li key={route}>
                <Link
                  to={route}
                  className={
                    activeLink.includes(route) ? "font-bold lineThrough" : ""
                  }
                >
                  {route.toUpperCase().substring(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="icons">
          <ul className="flex flex-col gap-[0.75rem]">
            <li>
              <Icons src={linkedIn} />
            </li>
            <li>
              <Icons src={github} />
            </li>
            <li>
              <Icons src={facebook} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
