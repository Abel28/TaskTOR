import React from "react";
import { FcRuler } from "react-icons/fc";

interface ProjectProps {
  title: string;
  tasks: number;
}

const ProjectItem: React.FC<ProjectProps> = ({title, tasks}) => {
  return (
    <div className="flex w-full items-center gap-3 text-white bg-gradient-to-r from-[#003161] to-green-500 px-5 py-5 rounded-md">
        <FcRuler className="text-4xl" />
        <div className="">
          <h1 className="text-lg font-bold">{title}</h1>
          <h5 className="text-sm">{tasks} Tareas</h5>
        </div>
      </div>
  )
}

export default ProjectItem
