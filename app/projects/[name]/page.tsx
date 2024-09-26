import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getProject } from "@/components/Projects";
import { GoArrowUpRight } from "react-icons/go";

const ProjectDetails = ({ params }) => {
  const project = getProject(params.name);

  if (!project) {
    redirect("/not-found");
  }

  return (
    <div className="min-h-screen w-screen mt-0 sm:pt-9 px-4 sm:px-6 bg-[#b291a4] text-white text-lg sm:text-2xl flex flex-col dark:bg-[#4a3f47] dark:text-gray-200">
      <p className="flex justify-between z-10 mb-1 sm:-mt-3 -ml-2 sm:-ml-3">
        <Link
          href="/projects"
          className="hover:[text-shadow:1px_1px_3px_white] dark:hover:[text-shadow:1px_1px_3px_black]"
        >
          Go back
        </Link>

        <a
          href={`${project?.url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center gap-1 -mr-2 sm:-mr-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full"
        >
          <GoArrowUpRight className="text-lg sm:text-xl" />
          {project?.url.includes("github") ? "See code" : "See website"}
        </a>
      </p>
      <div className="relative flex flex-col sm:grid sm:grid-cols-2 sm:grid-rows-[0.5fr_0.5fr_1fr] gap-2">
        <div className="relative flex flex-col items-center justify-center sm:col-span-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlnssvgjs="http://svgjs.dev/svgjs"
            viewBox="0 0 800 800"
            width="600"
            height="600"
            opacity="1"
            className="absolute mt-44 sm:mt-32 w-3/4 dark:opacity-80"
          >
            <g
              strokeWidth="2"
              stroke="hsla(0, 0%, 100%, 1.00)"
              fill="none"
              strokeLinecap="round"
              transform="matrix(1,0,0,1,-5,349.4602737426758)"
            >
              <path d="M10,10C31.726190476190478,12.083333333333334,68.75,26.458333333333336,114.28571428571429,20C159.82142857142858,13.541666666666666,180.95238095238096,-21.833333333333332,228.57142857142858,-21C276.1904761904762,-20.166666666666668,295.2380952380953,20.25,342.8571428571429,24C390.4761904761905,27.75,409.5238095238095,-5.916666666666667,457.14285714285717,-3C504.7619047619048,-0.08333333333333304,523.8095238095239,40.291666666666664,571.4285714285714,38C619.047619047619,35.708333333333336,638.0952380952382,-13.166666666666666,685.7142857142858,-14C733.3333333333334,-14.833333333333334,776.1904761904761,24,800,34"></path>
              <path
                d="M10,10C31.726190476190478,12.083333333333334,68.75,26.458333333333336,114.28571428571429,20C159.82142857142858,13.541666666666666,180.95238095238096,-21.833333333333332,228.57142857142858,-21C276.1904761904762,-20.166666666666668,295.2380952380953,20.25,342.8571428571429,24C390.4761904761905,27.75,409.5238095238095,-5.916666666666667,457.14285714285717,-3C504.7619047619048,-0.08333333333333304,523.8095238095239,40.291666666666664,571.4285714285714,38C619.047619047619,35.708333333333336,638.0952380952382,-13.166666666666666,685.7142857142858,-14C733.3333333333334,-14.833333333333334,776.1904761904761,24,800,34"
                transform="matrix(1,0,0,1,0,28)"
              ></path>
              <path
                d="M10,10C31.726190476190478,12.083333333333334,68.75,26.458333333333336,114.28571428571429,20C159.82142857142858,13.541666666666666,180.95238095238096,-21.833333333333332,228.57142857142858,-21C276.1904761904762,-20.166666666666668,295.2380952380953,20.25,342.8571428571429,24C390.4761904761905,27.75,409.5238095238095,-5.916666666666667,457.14285714285717,-3C504.7619047619048,-0.08333333333333304,523.8095238095239,40.291666666666664,571.4285714285714,38C619.047619047619,35.708333333333336,638.0952380952382,-13.166666666666666,685.7142857142858,-14C733.3333333333334,-14.833333333333334,776.1904761904761,24,800,34"
                transform="matrix(1,0,0,1,0,14)"
              ></path>
            </g>
            <defs>
              <linearGradient
                gradientTransform="rotate(270)"
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
                id="sssquiggly-grad"
              >
                <stop
                  stopColor="hsl(206, 75%, 49%)"
                  stopOpacity="1"
                  offset="0%"
                ></stop>
                <stop
                  stopColor="hsl(331, 90%, 56%)"
                  stopOpacity="1"
                  offset="100%"
                ></stop>
              </linearGradient>
            </defs>
          </svg>
          <h1 className="absolute text-5xl text-center sm:text-8xl mt-14 sm:-mt-24 [text-shadow:2px_2px_3px_black] dark:[text-shadow:2px_2px_2px_rgba(0,0,0,0.8)]">
            {project?.name}
          </h1>
        </div>
        <div className="flex flex-col pt-24 sm:pt-10 items-center sm:col-span-2 pb-3 sm:pb-5">
          <span className="pb-2">Tools used:</span>
          <span className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {project?.technologies.map((tech) => (
              <span
                className="bg-slate-300 bg-opacity-35 rounded-md p-1 dark:bg-opacity-25"
                key={tech}
              >
                {tech}
              </span>
            ))}
          </span>
        </div>
        <p className="col-span-2 p-3 shadow-[1px_1px_7px_7px_white] rounded-xl mt-8 mx-2 sm:mx-10 text-center dark:shadow-[1px_1px_7px_7px_gray]">
          {project?.description}
        </p>
      </div>
      <div className="flex flex-wrap gap-4 pt-10 sm:pt-14 pb-3 sm:px-5">
        {project?.name.includes("Email")
          ? null
          : project.images.map((image, idx) =>
              idx == 0 ? null : (
                <Image
                  src={`/images/${image}.png`}
                  alt={`${project.name} page`}
                  key={idx}
                  width={950}
                  height={600}
                  quality={100}
                  className="rounded-sm border-2 border-white sm:w-full dark:border-gray-600 dark:grayscale dark:brightness-75"
                />
              )
            )}
      </div>
    </div>
  );
};

export default ProjectDetails;
