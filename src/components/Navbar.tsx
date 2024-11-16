import { IoIosSearch } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mr-10">
      <div>
        <h2 className="text-3xl">Hola Abel</h2>
        <h5 className="text-sm font-light">Bienvenido!</h5>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center border rounded-md py-3 px-4 text-md">
          <input type="text" name="" id="" placeholder="Buscar" className="outline-none" />
          <IoIosSearch />
        </div>
        <div>
          <IoIosNotifications className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
