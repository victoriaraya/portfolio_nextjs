import Image from "next/image";
import Link from "next/link";

const ProjectTile = (props) => {
  const project = props.project;

  return (
    <div className="relative text-white group dark:text-gray-100">
      <Link href={`/projects/${project.urlName}`}>
        {project.name.includes("Email") ? (
          <Image
            src={`/images/${project.images[0]}.png`}
            alt={`${project.name}`}
            width={550}
            height={400}
            quality={100}
            className="transition-all duration-200 ease-in-out transform group-hover:scale-95 rounded-sm group-hover:bg-black group-hover:opacity-60 dark:group-hover:bg-gray-800 dark:grayscale dark:brightness-75"
          />
        ) : (
          <video
            autoPlay
            muted
            loop
            className="transition-all duration-200 ease-in-out transform group-hover:scale-95 rounded-sm group-hover:bg-black group-hover:opacity-60 dark:group-hover:bg-gray-800 dark:grayscale dark:brightness-75"
          >
            <source
              src={`/images/${project.imageName}.mp4`}
              type="video/mp4"
              loading="lazy"
            />
          </video>
        )}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-sm">
          <p className="text-2xl font-black dark:text-gray-200">See project</p>
        </div>
      </Link>
      <p className="text-2xl mt-1 sm:mt-2">
        {project.name} - {project.category}
      </p>
    </div>
  );
};

export default ProjectTile;
