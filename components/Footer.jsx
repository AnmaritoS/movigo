function Footer() {
  return (
    <>
      <footer className="text-gray-600 bg-[#1b1b1b]">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex sm:flex-row flex-col justify-center items-center md:text-left text-center order-first text-sm lg:text-base space-y-4 sm:space-y-0">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
              <h2 className="title-font font-medium text-white tracking-widest mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-0 ">
                <li>
                  <a className="text-white hover:text-gray-500 cursor-pointer">
                    Now Playing
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-500 cursor-pointer">
                    Upcoming
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-500 cursor-pointer">
                    Top Rated
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-500 cursor-pointer">
                    Blogs
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-0">
                <li>
                  <a className="text-white hover:text-gray-500 cursor-pointer">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-500 cursor-pointer">
                    Community/Forum
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-500 cursor-pointer">
                    News/Articles
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-500 cursor-pointer">
                    Movie Reviews
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-0">
                <li>
                  <a className="text-white hover:text-gray-500 cursor-pointer">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-500 cursor-pointer">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-500 cursor-pointer">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-500 cursor-pointer">
                    FAQ
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <div className="flex sm:flex-row flex-col xl:flex-nowrap md:flex-wrap flex-wrap justify-center sm:items-end items-center md:justify-start xl:space-y-0 space-y-2 xl:space-x-4 space-x-0">
                <div className="relative w-auto">
                  <input
                    type="text"
                    id="footer-field"
                    name="footer-field"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button className="w-[100px] flex justify-center items-center lg:mt-2 xl:mt-0 flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
                Get emails for latest news
                <br className="lg:block hidden" />
                about movies, and more.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-300">
          <div className="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="2.5em"
                viewBox="0 0 576 512"
                fill="#6366F1"
              >
                <path d="M128 160h320v192H128V160zm400 96c0 26.51 21.49 48 48 48v96c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48v-96c26.51 0 48-21.49 48-48s-21.49-48-48-48v-96c0-26.51 21.49-48 48-48h480c26.51 0 48 21.49 48 48v96c-26.51 0-48 21.49-48 48zm-48-104c0-13.255-10.745-24-24-24H120c-13.255 0-24 10.745-24 24v208c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24V152z" />
              </svg>
              <span className="ml-3 text-xl">MOVIGO</span>
            </a>
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              © 2023 MOVIGO —
              <a
                // href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1 cursor-pointer"
                target="_blank"
              >
                @anmarrahman
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a className="text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
