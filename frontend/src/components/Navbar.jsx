import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import makhana from "../assets/Untitled-1.png";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between py-5 font-medium bg-white px-8 rounded-2xl">
        <Link to="/">
          <div className="font-bold text-2xl">TAMAKHANA</div>
        </Link>

        <nav className="hidden md:flex space-x-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `rounded-full px-4 py-1 text-sm transition-all ${
                isActive
                  ? "bg-black text-white"
                  : "bg-white border border-gray-200"
              }`
            }
          >
            HOME
          </NavLink>

          <NavLink
            to="/collection"
            className={({ isActive }) =>
              `rounded-full px-4 py-1 text-sm transition-all ${
                isActive
                  ? "bg-black text-white"
                  : "bg-white border border-gray-200"
              }`
            }
          >
            COLLECTION
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `rounded-full px-4 py-1 text-sm transition-all ${
                isActive
                  ? "bg-black text-white"
                  : "bg-white border border-gray-200"
              }`
            }
          >
            ABOUT
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `rounded-full px-4 py-1 text-sm transition-all ${
                isActive
                  ? "bg-black text-white"
                  : "bg-white border border-gray-200"
              }`
            }
          >
            CONTACT
          </NavLink>
        </nav>

        <div className="flex items-center gap-6">
          <img
            onClick={() => {
              setShowSearch(true);
              navigate("/collection");
            }}
            src={assets.search_icon}
            className="w-5 cursor-pointer"
            alt=""
          />

          <div className="group relative">
            <img
              onClick={() => (token ? null : navigate("/login"))}
              className="w-5 cursor-pointer"
              src={assets.profile_icon}
              alt=""
            />
            {token && (
              <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                  <p className="cursor-pointer hover:text-black">My Profile</p>
                  <p
                    onClick={() => navigate("/orders")}
                    className="cursor-pointer hover:text-black"
                  >
                    Orders
                  </p>
                  <p
                    onClick={logout}
                    className="cursor-pointer hover:text-black"
                  >
                    Logout
                  </p>
                </div>
              </div>
            )}
          </div>
          <Link to="/cart" className="relative">
            <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              {getCartCount()}
            </p>
          </Link>
          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            className="w-5 cursor-pointer sm:hidden"
            alt=""
          />
        </div>
      </div>

      {/* Sidebar menu for small screens */}
      {visible && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50"
          onClick={() => setVisible(false)}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 bg-white transition-transform transform ${
          visible ? "translate-x-0" : "translate-x-full"
        } w-64 shadow-lg`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img
              className="h-4 rotate-180"
              src={assets.dropdown_icon}
              alt=""
            />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
