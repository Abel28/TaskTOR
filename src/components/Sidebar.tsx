import { RxDashboard } from "react-icons/rx";
import { MdCalendarToday } from "react-icons/md";
import { MdAddTask } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {

    const selectedStyleItem = "text-blue-600 font-bold"

    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    const handleItemClick = (item: string) => {
        setSelectedItem(item);
    }


  return (
    <div className="min-h-screen w-1/4 flex flex-col">
      <div className="flex ml-5 mt-10">
        <h1 className="text-2xl">Task</h1>
        <h1 className="text-2xl text-[#000B58] font-bold">TOR</h1>
      </div>
      <div className="flex flex-col mt-10 ml-5 gap-3 text-gray-900 font-medium">
        <Link
          className={`flex items-center gap-4 text-md py-2 ${selectedItem === "dashboard" && selectedStyleItem }`}
          to={"/"}
          onClick={() => handleItemClick("dashboard")}
        >
          <RxDashboard className="text-xl" />
          <p>Dashboard</p>
        </Link>
        <Link
          className={`flex items-center gap-4 text-md py-2 ${selectedItem === "tasks" && selectedStyleItem }`}
          to="/tasks"
          onClick={() => handleItemClick("tasks")}
        >
          <MdAddTask className="text-xl" />
          <p>Tareas</p>
        </Link>
        <Link
          className={`flex items-center gap-4 text-md py-2 ${selectedItem === "calendar" && selectedStyleItem }`}
          to="/calendar"
          onClick={() => handleItemClick("calendar")}
        >
          <MdCalendarToday className="text-xl" />
          <p>Calendario</p>
        </Link>
        <a
          className={`flex items-center gap-4 text-md py-2 ${selectedItem === "logout" && selectedStyleItem }`}
          href="#"
          onClick={() => handleItemClick("logout")}
        >
          <FiLogOut className="text-xl" />
          <p>Cerrar Sesión</p>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
