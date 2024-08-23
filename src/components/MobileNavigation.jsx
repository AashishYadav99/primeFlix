import { NavLink } from "react-router-dom";
import { mobileNavigation } from "../constants/Navigation";

function MobileNavigation() {
  return (
    <>
      <section className="lg:hidden h-16 bg-black bg-opacity-70 backdrop:blur-2xl bg-neutral-600  bg-opacity-40 fixed bottom-0 w-full z-40">
        <div className="flex items-center justify-between h-full">
          {mobileNavigation.map((nav, index) => {
            return (
              <NavLink
                to={nav.href}
                key={nav.label + "MobileNavigation"}
                className={({ isActive }) =>
                  `px-3 flex h-full items-center flex-col justify-center ${isActive && "text-red-400"} `
                }
              >
                <div className="text-2xl">{nav.icon}</div>
                <p className="text-lg">{nav.label}</p>
              </NavLink>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default MobileNavigation;
