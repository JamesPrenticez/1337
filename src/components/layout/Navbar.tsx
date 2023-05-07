import React, { type ReactElement } from "react";
import { project, pages } from "../../constants"
import { Link } from "react-router-dom";
// import { NavLink, useLocation } from "react-router-dom"

const Navbar = (): ReactElement => {
  // const currentLocation = useLocation()

  return (
    <div className="flex min-h-[5rem] bg-major text-minor font-semibold">
      <div className="flex justify-between items-center max-w-7xl w-full mx-auto">
        <h1 className="text-2xl ">{project.name.toUpperCase()}</h1>

        <div className="flex space-x-2 cursor-pointer">
          {pages.map((page) => (
            <Link key={page.name} to={page.url}>
              <p className="hover:text-action">
                {page.name.toUpperCase()}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
