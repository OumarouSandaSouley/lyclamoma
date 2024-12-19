import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const navlinks = [
  {
    title: "Accueil",
    href: "/",
  },
  {
    title: "Etablissement",
    href: "/about",
    sublinks: [
      {
        title: "General",
        link: "#general",
      },
      {
        title: "Vie scolaire",
        link: "#vie-scolaire",
      },
      {
        title: "Le lycée en images",
        link: "#lycee-images",
      },
    ],
  },
  {
    title: "Examens officiels",
    href: "/examens",
  },
  {
    title: "Actualités",
    href: "/actualites",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);

  const toggleDropdown = (title) => {
    if (activeDropdown === title) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(title);
    }
  };

  return (
    <header className="w-full bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex-shrink-0">
            <img
              src="/logo.png"
              alt="Logo lycée classique"
              className="h-12 w-auto"
            />
          </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navlinks.map((navlink) => (
                <div key={navlink.title} className="relative group">
                  <button
                    onClick={() => toggleDropdown(navlink.title)}
                    className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                  >
                    {navlink.title}
                    {navlink.sublinks && (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    )}
                  </button>
                  {navlink.sublinks && activeDropdown === navlink.title && (
                    <div className="absolute z-10 left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        {navlink.sublinks.map((sublink) => (
                          <Link
                            key={sublink.title}
                            to={sublink.link}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                          >
                            {sublink.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <Link
              to="/dashboard/parents"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Espace Parent
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navlinks.map((navlink) => (
              <div key={navlink.title}>
                <button
                  onClick={() => toggleDropdown(navlink.title)}
                  className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                >
                  {navlink.title}
                  {navlink.sublinks && (
                    <ChevronDown className="ml-1 h-4 w-4 inline" />
                  )}
                </button>
                {navlink.sublinks && activeDropdown === navlink.title && (
                  <div className="pl-4">
                    {navlink.sublinks.map((sublink) => (
                      <Link
                        key={sublink.title}
                        to={sublink.link}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {sublink.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-2">
              <Link
                to="/dashboard/parents"
                className="block text-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Espace Parent
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
