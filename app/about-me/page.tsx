import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="min-h-screen w-full pt-2 sm:pt-6 text-white grid grid-cols-1 md:grid-cols-2 sm:gap-2 dark:bg-[#4a3f47] dark:text-gray-200">
      <p className="order-2 md:order-1 pb-4 sm:pb-2 p-2 sm:p-20 md:pl-20 md:pt-10 text-[23px] justify-self-center text-center md:-mt-2 md:-mr-6 bg-slate-300 bg-opacity-35 dark:bg-[#62565f] dark:bg-opacity-40">
        I'm a self-taught developer from California. After years of teaching
        English online while living a nomadic lifestyle, I desired to find a
        career I'd love that would allow me to support myself financially.
        Inspired by an HTML class I remembered loving as a child, I decided to
        explore software development. After over a year of dedicated learning, I
        am confident I've found my passion.
        <br />
        <br />I specialize in frontend development with React and Next.js, and
        I'm also skilled in API design and working with databases. I'm eager to
        start my career somewhere I can grow and contribute positively! In my
        free time I love working out, connecting with nature, dancing, writing
        and traveling.
      </p>
      <div className="order-1 pt-14 md:pt-24 md:pr-2 pb-12 md:pb-0 md:order-2">
        <div className="relative flex items-center justify-center">
          <Image
            src="/images/me.png"
            alt="Victoria"
            width={300}
            height={300}
            className="rounded-full w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] dark:grayscale"
          />
          {/* <img
              src={me}
              alt="Victoria"
              loading="lazy"
              className="rounded-full w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] dark:grayscale"
            /> */}
          <svg
            className="absolute w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] animate-spin-slow"
            viewBox="0 0 300 300"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="text-path"
              d="M 150, 150 m -120, 0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0"
              fill="none"
            />
            <text className="text-[14px] fill-current text-white dark:text-gray-200">
              <textPath href="#text-path" startOffset="50%" textAnchor="middle">
                She has the drive that will inspire others and push us forward
                ・ Her enthusiasm will bring fresh energy to our team ・
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
