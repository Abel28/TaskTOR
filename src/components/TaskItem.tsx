import { FaClock } from "react-icons/fa";
import ProgressBar from "./ProgressBar";
import React from "react";

interface TaskItemProps {
    title: string
    from: string
    to: string
    progress: number
}

const TaskItem: React.FC<TaskItemProps> = (props) => {

  return (
    <div className="flex flex-col gap-3 items-center bg-white py-5 px-5 rounded-2xl">
      <div className="flex gap-3 items-center">
        <img src="src/assets/rocket.png" alt="" className="w-1/6" />
        <div>
          <h2>{props.title}</h2>
          <div className="flex items-center gap-2">
            <FaClock />
            <h5 className="font-thin text-sm">{props.from} - {props.to}</h5>
          </div>
        </div>
      </div>
      <div className="flex mt-3 w-full items-center gap-3">
        <ProgressBar progress={props.progress} />
        <p>{props.progress}%</p>
      </div>
    </div>
  );
};

export default TaskItem;
