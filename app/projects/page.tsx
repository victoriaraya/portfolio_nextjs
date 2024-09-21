import ProjectTile from "@/components/ProjectTile";
import { ProjectList } from "@/components/projects";

const Projects = () => {
  return (
    <div className="min-h-screen w-screen mt-0 pt-4 sm:pt-12 pb-4 sm:pb-8 bg-[#b291a4] text-white grid sm:grid-cols-2 gap-7 sm:gap-9 px-2 sm:px-8 dark:bg-[#4a3f47] dark:text-gray-100">
      {ProjectList.map((project, idx) => (
        <ProjectTile project={project} key={idx} />
      ))}
    </div>
  );
};

export default Projects;
