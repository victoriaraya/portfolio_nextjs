import ProjectTile from "@/components/ProjectTile";
import { ProjectList } from "@/components/ProjectsDoc";

const Projects = () => {
  return (
    <div className="min-h-screen w-screen mt-0 pt-4 sm:pt-12 pb-4 sm:pb-8 bg-[#b291a4] text-white grid sm:grid-cols-2 gap-y-10 gap-x-5 sm:gap-y-20 sm:gap-x-9 lg:gap-x-2 px-2 sm:px-8 dark:bg-[#4a3f47] dark:text-gray-100 mb-5 sm:mb-3 justify-center">
      {ProjectList.map((project, idx) => (
        <ProjectTile project={project} key={idx} />
      ))}
    </div>
  );
};

export default Projects;
