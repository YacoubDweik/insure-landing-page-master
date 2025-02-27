import { useState } from "react";

function Header() {
  const [isActive, setIsActive] = useState(false);
  return (
    <header className="bg-white">
      <div className="container flex min-h-[10vh] items-center justify-between">
        <a href="#" aria-label="Click here to go to the home page of Insure">
          <img
            src={`${import.meta.env.BASE_URL}/images/logo.svg`}
            alt="Insure logo"
          />
        </a>
        <div>
          <button
            className="cursor-pointer md:hidden"
            aria-label={
              !isActive
                ? "Click here to open the navigation menu"
                : "Click here to close the navigation menu"
            }
            aria-controls="nav"
            aria-expanded={isActive}
            onClick={() => setIsActive((prev) => !prev)}
          >
            {!isActive ? (
              <img
                src={`${import.meta.env.BASE_URL}/images/icon-hamburger.svg`}
                alt="hamburger icon"
              />
            ) : (
              <img
                src={`${import.meta.env.BASE_URL}/images/icon-close.svg`}
                alt="close icon"
              />
            )}
          </button>
          {/* Desktop Navigation */}
          <nav className="text-dark-gray hidden font-bold uppercase md:flex">
            <ul className="flex items-center justify-center gap-3.5 lg:gap-8">
              <li>
                <a
                  className="hover:text-primary transition-all duration-300"
                  href="#"
                >
                  How we work
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-all duration-300"
                  href="#"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-all duration-300"
                  href="#"
                >
                  Account
                </a>
              </li>
              <li>
                <a
                  className="hover:bg-primary hover:text-light mx-auto border-2 px-6 py-3 tracking-wider transition-all duration-200"
                  href="#"
                >
                  View plans
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav
        id="nav"
        aria-label="Navigation menu"
        className={` ${!isActive ? "hidden" : "block"} bg-primary text-light relative min-h-[90vh] w-full pt-12 text-center text-xl font-bold uppercase md:hidden`}
      >
        <ul role="menu" className="container space-y-6">
          <li role="none">
            <a
              role="menuitem"
              className="hover:text-dark-gray transition-all duration-300"
              href="#"
            >
              How we work
            </a>
          </li>
          <li role="none">
            <a
              role="menuitem"
              className="hover:text-dark-gray transition-all duration-300"
              href="#"
            >
              Blog
            </a>
          </li>
          <li role="none">
            <a
              role="menuitem"
              className="hover:text-dark-gray transition-all duration-300"
              href="#"
            >
              Account
            </a>
          </li>
          <li role="none">
            <a
              role="menuitem"
              className="hover:bg-light hover:text-primary mx-auto block border-2 px-6 py-3 tracking-wider transition-all duration-200"
              href="#"
            >
              View plans
            </a>
          </li>
        </ul>
        <img
          className="absolute bottom-0 left-0 w-full"
          src={`${import.meta.env.BASE_URL}/images/bg-pattern-mobile-nav.svg`}
          alt=""
        />
      </nav>
    </header>
  );
}

export default Header;
