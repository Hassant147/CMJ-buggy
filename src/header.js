import React, { useEffect } from "react";

function Header() {
  useEffect(() => {
    const toggleNav = () => {
      let navContent = document.getElementById("nav-content");
      navContent.style.zIndex = '50'; // Set z-index to 50
      if (navContent.classList.contains('hidden')) {
        navContent.style.display = 'flex';
        navContent.classList.remove('hidden');
      } else {
        navContent.style.display = 'none';
        navContent.classList.add('hidden');
      }
    };

    document.getElementById('nav-toggle').addEventListener('click', toggleNav);

    return () => {
      document.getElementById('nav-toggle').removeEventListener('click', toggleNav);
    };
  }, []);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-black p-6 fixed w-full z-40 top-0">
     <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img alt="Logo" className="h-12 w-24" src={require('.//media/logo.png')} />
      </div>

      <div className="block lg:hidden">
        <button
          id="nav-toggle"
          className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
        >
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

      <div
        className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden z-50"
        id="nav-content"
      >
        <ul className="list-reset lg:flex justify-end flex-1 items-center text-white">
          <li className="mr-3">
            <a
              className="inline-block py-2 px-7 text-white no-underline hover:text-red-500"
              href="Home.html"
            >
              Home
            </a>
          </li>
          <li className="mr-3">
            <a
              className="inline-block text-white no-underline hover:text-red-500 py-2 px-7"
              href="Tours.html"
            >
              Tours
            </a>
          </li>
          <li className="mr-3">
            <a
              className="inline-block text-white no-underline hover:text-red-500 py-2 px-7"
              href="Media.html"
            >
              Media
            </a>
          </li>
          <li className="mr-3">
            <a
              className="inline-block text-white no-underline hover:text-red-500 py-2 px-7"
              href="AboutUs.html"
            >
              About Us
            </a>
          </li>
          <li className="mr-3">
            <a
              className="inline-block text-white no-underline hover:text-red-500 py-2 px-7"
              href="ContactUs.html"
            >
              Contact Us
            </a>
          </li>
          <li className="mr-3">
            <button className="bg-red-500 px-4 py-2 rounded text-white font-bold ml-4 mt-4 lg:mt-0">
              Book Online
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
