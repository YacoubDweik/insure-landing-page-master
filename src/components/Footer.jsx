function Footer() {
  return (
    <footer className="bg-light text-primary relative py-24 text-center font-bold md:text-left">
      <picture className="image" aria-hidden="true">
        <source
          media="(min-width: 768px)"
          srcSet={`${import.meta.env.BASE_URL}/images/bg-pattern-footer-desktop.svg`}
        />
        <img
          className="absolute top-0 left-0 w-full md:w-3/4 lg:w-1/2 xl:w-1/4"
          src={`${import.meta.env.BASE_URL}/images/bg-pattern-footer-mobile.svg`}
          alt=""
        />
      </picture>
      <div className="relative z-1 container space-y-10">
        <div className="space-y-6 md:flex md:items-center md:justify-between">
          <a
            className="inline-block"
            href="#"
            aria-label="Click here to go to the home page of Insure"
          >
            <img
              src={`${import.meta.env.BASE_URL}/images/logo.svg`}
              alt="Insure logo"
            />
          </a>
          <ul className="flex items-center justify-center gap-3">
            <li>
              <a
                className="transition-all duration-300 hover:brightness-1"
                href="#"
              >
                <img
                  src={`${import.meta.env.BASE_URL}/images/icon-facebook.svg`}
                  alt="Facebook"
                />
              </a>
            </li>
            <li>
              <a
                className="transition-all duration-300 hover:brightness-1"
                href="#"
              >
                <img
                  src={`${import.meta.env.BASE_URL}/images/icon-twitter.svg`}
                  alt="Twitter"
                />
              </a>
            </li>
            <li>
              <a
                className="transition-all duration-300 hover:brightness-1"
                href="#"
              >
                <img
                  src={`${import.meta.env.BASE_URL}/images/icon-pinterest.svg`}
                  alt="Pinetrest"
                />
              </a>
            </li>
            <li>
              <a
                className="transition-all duration-300 hover:brightness-1"
                href="#"
              >
                <img
                  src={`${import.meta.env.BASE_URL}/images/icon-instagram.svg`}
                  alt="Instagram"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-dark-gray mx-auto h-0.5 w-full opacity-25"></div>
        <nav className="body space-y-6 uppercase md:flex md:w-3/4 md:items-start md:justify-between">
          <div>
            <strong className="text-dark-gray mb-6 block text-lg">
              Our company
            </strong>
            <ul className="space-y-2">
              <li>
                <a className="hover:underline" href="#">
                  How we work
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Why Insure?
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  View plans
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Reviews
                </a>
              </li>
            </ul>
          </div>
          <div>
            <strong className="text-dark-gray mb-6 block text-lg">
              Help me
            </strong>
            <ul className="space-y-2">
              <li>
                <a className="hover:underline" href="#">
                  FAQ
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Terms of use
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Privacy policy
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
          <div>
            <strong className="text-dark-gray mb-6 block text-lg">
              Contact
            </strong>
            <ul className="space-y-2">
              <li>
                <a className="hover:underline" href="#">
                  Sales
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Support
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Live chat
                </a>
              </li>
            </ul>
          </div>
          <div>
            <strong className="text-dark-gray mb-6 block text-lg">
              Others
            </strong>
            <ul className="space-y-2">
              <li>
                <a className="hover:underline" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Press
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Licenses
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
