import { NavLink, useNavigate, Link, useLocation } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import logo from "../image/primeFlix.png";
import { useEffect, useState } from "react";
import { navigation } from "../constants/Navigation";
function Header() {
  const location = useLocation();
  const removeSpace=location?.search?.slice(3)?.split("%20").join(" ")
  const [searchInput, setSearchInput] = useState(removeSpace);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchInput) {
      navigate(`/search?q=${searchInput}`);
    }
  }, [searchInput]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <header className="fixed top-0 w-full h-16 z-40 bg-neutral-800 bg-opacity-75">
        <div className="container mx-auto px-3 flex items-center h-full">
          <Link to={"/"}>
            <img
            className="rounded-full h-12 bg-black"
              src={logo}
              alt="Logo"
            />
          </Link>

          <nav className="hidden lg:flex items-center ml-6 gap-2">
            {navigation.map((nav, index) => {
              return (
                <NavLink
                  key={nav.label}
                  to={nav.href}
                  className={({ isActive }) =>
                    `px-2 hover:text-neutral-100 ${
                      isActive ? "text-neutral-200" : ""
                    }`
                  }
                >
                  {nav.label}
                </NavLink>
              );
            })}
          </nav>
          <div className="ml-auto flex items-center gap-4 ">
            <div className="flex ">
              <form
                action=""
                className="flex items-center gap-5"
                onSubmit={handleSubmit}
              >
                <input
                  onChange={(e) => setSearchInput(e.target.value)}
                  value={searchInput}
                  type="text"
                  name=""
                  id=""
                  placeholder="Search Movie"
                  className="hidden sm:block  bg-transparent px-4 py-1 "
                />
                <button className="text-2xl text-white hidden sm:block">
                  <CiSearch />
                </button>
              </form>
            </div>
            <div className="h-8 cursor-pointer active:scale-50 transition-all overflow-hidden">
              <FaRegUser className="w-full h-full text-yellow-300" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
