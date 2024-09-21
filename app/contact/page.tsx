const Contact = () => {
  return (
    <div className="min-h-screen w-screen mt-0 pt-2 sm:pt-9 pb-3 sm:pb-0 bg-[#b291a4] overflow-hidden dark:bg-[#4a3f47]">
      <div className="grid grid-cols-1 md:grid-cols-[.75fr_1fr] sm:gap-3 h-full w-full">
        <div className="flex flex-col text-center md:text-start pt-6 sm:pt-0 md:pl-10 lg:pl-20 px-8 md:px-0 self-center text-white text-3xl w-full md:w-[400px] md:animate-slide-right-delay dark:text-gray-200">
          <p className="w-full">
            Feel free to email me at{" "}
            <a
              href="mailto:victoriaraya111@gmail.com"
              className="hover:[text-shadow:1px_1px_3px_white] hover:dark:[text-shadow:2px_2px_2px_rgba(0,0,0,0.8)]"
            >
              victoriaraya111@gmail.com
            </a>{" "}
            or fill out the contact form here
          </p>
        </div>
        <div className="flex justify-center pt-3 lg:pr-20 font-gruppo md:animate-slide-left">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSe63cxuBDykG4HpceyeBNRvYYaBUptjsvzAaRHgXl2eNCZZdw/viewform?embedded=true"
            width="100%"
            height="620"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            className="dark:grayscale dark:brightness-75"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
