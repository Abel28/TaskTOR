import { useState } from "react";
import ProyectItem from "../components/ProjectItem";
import TaskItem from "../components/TaskItem";

const Dashboard = () => {
  const [selectedStatus, setSelectedStatus] = useState<string>("working");

  const handleClickStatus = (status: string) => {
    setSelectedStatus(status);
  };

  return (
    <div className="mt-5 flex flex-col mr-10">
      <div className="flex gap-4 overflow-x-auto w-full">
        <ProyectItem title="Proyecto 1" tasks={4} />
      </div>
      <div className="flex mt-10 font-semibold items-center gap-5">
        <h3>Proyectos</h3>
        <hr className="border-t-1 border-slate-300 w-full" />
        <div className="flex gap-2 text-sm font-medium">
          <button
            className={`rounded-lg px-1 py-1 transition-all ${
              selectedStatus === "working"
                ? "text-blue-500"
                : "border-slate-500 border shadow-md"
            }`}
            onClick={() => handleClickStatus("working")}
          >
            Trabajando
          </button>
          <button
            className={`rounded-lg px-1 py-1 transition-all ${
              selectedStatus === "pending"
                ? "text-blue-500"
                : "border-slate-500 border shadow-md"
            }`}
            onClick={() => handleClickStatus("pending")}
          >
            Pendiente
          </button>
        </div>
      </div>
      <div className="mt-6 flex gap-4">
        <TaskItem
          title="Desarrollo Web"
          from="09:45 AM"
          to="07:00 PM"
          progress={60}
        />
        <TaskItem
          title="Estudiar Machine Learning"
          from="09:45 AM"
          to="07:00 PM"
          progress={40}
        />
        <TaskItem
          title="Desarrollo Web"
          from="09:45 AM"
          to="07:00 PM"
          progress={40}
        />
        <TaskItem
          title="Desarrollo Web"
          from="09:45 AM"
          to="07:00 PM"
          progress={40}
        />
      </div>
      <div className="flex flex-col mt-10 font-semibold gap-5">
        <h3>Distribución de tareas</h3>
        <div className="bg-white rounded-2xl flex h-80">
          <div className="flex flex-col gap-10 py-10 pl-10 w-1/5">
            <h3>Proyecto 1</h3>
            <h3>Proyecto 1</h3>
            <h3>Proyecto 1</h3>
            <h3>Proyecto 1</h3>
          </div>
          <div className="flex w-5/6 items-end gap-10 pl-10 pb-5">
            <div className="flex flex-col items-center">
              <div className="bg-gray-200 w-1/12" style={{height: "20vh"}}></div>
              <p>10 AM</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-200 w-1/12" style={{height: "20vh"}}></div>
              <p>10 AM</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-200 w-1/12" style={{height: "20vh"}}></div>
              <p>10 AM</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-200 w-1/12" style={{height: "20vh"}}></div>
              <p>10 AM</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-200 w-1/12" style={{height: "20vh"}}></div>
              <p>10 AM</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-200 w-1/12" style={{height: "20vh"}}></div>
              <p>10 AM</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-200 w-1/12" style={{height: "20vh"}}></div>
              <p>10 AM</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-200 w-1/12" style={{height: "20vh"}}></div>
              <p>10 AM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
