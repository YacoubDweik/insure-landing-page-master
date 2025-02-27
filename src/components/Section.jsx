function Section(props) {
  return (
    <>
      {props.name == "intro" && (
        <section
          className={`${props.name} from-primary bg-gradient-to-b from-100% to-transparent to-100% md:relative md:pb-[5%] xl:from-80% xl:to-80% xl:pb-0`}
        >
          <div className="px-0 md:container md:flex md:flex-row-reverse md:items-start md:justify-between md:pt-32">
            <picture
              className="shrink-0 self-stretch md:w-1/2"
              aria-hidden="true"
            >
              <source
                media="(min-width: 768px)"
                srcSet={`${import.meta.env.BASE_URL}/images/image-intro-desktop.jpg`}
              />
              <img
                className="h-full w-full object-cover"
                src={`${import.meta.env.BASE_URL}/images/image-intro-mobile.jpg`}
                alt=""
              />
            </picture>
            <div className="relative z-0 container space-y-6 py-16 text-center text-white md:static md:space-y-8 md:py-0 md:text-left">
              <div className="bg-dark-gray mb-12 hidden h-0.5 w-1/4 md:block"></div>
              <h1 className="font-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                Humanizing your insurance.
              </h1>
              <p className="text-light md:text-xl">
                Get your life insurance coverage easier and faster. We blend our
                expertise and technology to help you find the plan that’s right
                for you. Ensure you and your loved ones are protected.
              </p>
              <a
                className="text-light hover:bg-light hover:text-primary mx-auto block w-fit border-2 px-6 py-3 font-bold tracking-wider uppercase transition-all duration-200 md:mx-0"
                href="#"
              >
                View plans
              </a>
              <picture className="image" aria-hidden="true">
                <source
                  media="(min-width: 768px)"
                  srcSet={`${import.meta.env.BASE_URL}/images/bg-pattern-intro-left-desktop.svg`}
                />
                <img
                  className="absolute top-0 left-0 -z-1 md:top-auto md:bottom-0 md:w-32 md:translate-y-1/4 lg:w-52 xl:w-64"
                  src={`${import.meta.env.BASE_URL}/images/bg-pattern-intro-left-mobile.svg`}
                  alt=""
                />
              </picture>
              <picture className="image" aria-hidden="true">
                <source
                  media="(min-width: 768px)"
                  srcSet={`${import.meta.env.BASE_URL}/images/bg-pattern-intro-right-desktop.svg`}
                />
                <img
                  className="absolute right-0 bottom-0 -z-1 translate-y-1/2 md:top-0 md:bottom-auto md:w-1/4 md:max-w-lg md:translate-y-0"
                  src={`${import.meta.env.BASE_URL}/images/bg-pattern-intro-right-mobile.svg`}
                  alt=""
                />
              </picture>
            </div>
          </div>
        </section>
      )}

      {props.name == "features" && (
        <section className={`${props.name} my-24 text-center md:text-left`}>
          <div className="container">
            <div className="bg-dark-gray mx-auto mb-12 h-0.5 w-1/2 opacity-25 md:mx-0 md:w-1/4"></div>
            <h2 className="sr-only">What makes Insure special</h2>
            <strong className="font-title text-4xl font-normal">
              We’re different
            </strong>
            <ul className="my-16 space-y-8 md:flex md:items-start md:justify-between md:gap-3 lg:gap-6 xl:gap-32">
              <li className="flex flex-col items-center justify-center gap-4 md:items-start">
                <img
                  src={`${import.meta.env.BASE_URL}/images/icon-snappy-process.svg`}
                  alt=""
                />
                <h3 className="font-title text-2xl font-normal">
                  Snappy Process
                </h3>
                <p className="text-dark-gray">
                  Our application process can be completed in minutes, not
                  hours. Don’t get stuck filling in tedious forms.
                </p>
              </li>
              <li className="flex flex-col items-center justify-center gap-4 md:items-start">
                <img
                  src={`${import.meta.env.BASE_URL}/images/icon-affordable-prices.svg`}
                  alt=""
                />
                <h3 className="font-title text-2xl font-normal">
                  Affordable Prices
                </h3>
                <p className="text-dark-gray">
                  We don’t want you worrying about high monthly costs. Our
                  prices may be low, but we still offer the best coverage
                  possible.
                </p>
              </li>
              <li className="flex flex-col items-center justify-center gap-4 md:items-start">
                <img
                  src={`${import.meta.env.BASE_URL}/images/icon-people-first.svg`}
                  alt=""
                />
                <h3 className="font-title text-2xl font-normal">
                  People First
                </h3>
                <p className="text-dark-gray">
                  Our plans aren’t full of conditions and clauses to prevent
                  payouts. We make sure you’re covered when you need it.
                </p>
              </li>
            </ul>
          </div>
        </section>
      )}

      {props.name == "cta" && (
        <section
          className={`${props.name} text-light container my-24 text-center md:text-left`}
        >
          <div className="bg-primary relative container overflow-hidden px-6 py-12 md:px-12">
            <div className="relative z-1 md:flex md:items-center md:justify-between">
              <h2 className="sr-only">Find out more about Insure</h2>
              <h3 className="font-title mb-8 text-4xl font-normal md:w-1/2 md:text-5xl">
                Find out more about how we work
              </h3>
              <a
                className="hover:bg-light hover:text-primary text-light mx-auto block w-fit border-2 px-6 py-3 font-bold tracking-wider uppercase transition-all duration-200 md:mx-0"
                href="#"
              >
                How we work
              </a>
            </div>
            <picture className="image" aria-hidden="true">
              <source
                media="(min-width: 768px)"
                srcSet={`${import.meta.env.BASE_URL}/images/bg-pattern-how-we-work-desktop.svg`}
              />
              <img
                className="absolute -top-8 -right-1 md:top-0 md:right-0 md:h-full"
                src={`${import.meta.env.BASE_URL}/images/bg-pattern-how-we-work-mobile.svg`}
                alt=""
              />
            </picture>
          </div>
        </section>
      )}
    </>
  );
}

export default Section;
