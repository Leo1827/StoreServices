import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { openModal } from "../store/slices/modal/modalSlice";
import IconList from "./IconList";
import { Menu as MenuIcon, Search, Bell, Briefcase } from "lucide-react";
import { useState } from "react";

const Menu = (): JSX.Element => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const openRegisterModal = (): void => {
    dispatch(openModal({ modal: "register-step1", data: [] }));
  };

  const openLoginModal = (): void => {
    dispatch(openModal({ modal: "login-modal", data: [] }));
  };

  return (
    <nav className="w-full bg-[#FCFCFA] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-3">
        {/* --- LOGO --- */}
        <Link to="/" className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 250 100"
            className="w-18 h-8 text-gray-800"
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="18" y="34" width="84" height="62" rx="8" />
            <path d="M34 34c0-11 8-18 22-18s22 7 22 18" />
            <path d="M45 62h30" />
          </svg>
          <span className="mx-8 absolute">DeUna</span>
        </Link>

        {/* --- BOTÓN PUBLICAR SERVICIO --- (centro en móvil) */}
        <Link
          to="/home-services"
          className=" sm:block border border-[#F6E9DA] bg-white text-gray-700 font-medium px-4 py-2 rounded-lg shadow-sm hover:bg-[#F6E9DA]/30 transition"
        >
          Consultar servicios
        </Link>

        {/* --- HAMBURGUESA --- */}
        <button
          className="sm:hidden p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setOpen(!open)}
        >
          <MenuIcon className="w-6 h-6 text-gray-700" />
        </button>

        {/* --- DESKTOP MENU --- */}
        <div className="hidden sm:flex items-center gap-10">
          {/* Búsqueda */}
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition">
            <Search className="w-5 h-5" />
            <span className="text-lg font-light">Búsqueda</span>
          </button>

          {/* Notificaciones */}
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition">
            <Bell className="w-5 h-5" />
            <span className="text-lg font-light">Notificaciones</span>
          </button>

          {/* Hazte miembro */}
          <div className="flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-gray-600" />
            <button
              onClick={openRegisterModal}
              className="text-gray-700 hover:text-gray-900 font-light"
            >
              Hazte miembro
            </button>
          </div>

          {/* Acceder */}
          <button
            onClick={openLoginModal}
            className="flex items-center border border-gray-800 rounded px-4 py-2 hover:bg-gray-100 transition"
          >
            <IconList icon="userCircle" color="#000" size="lg" />
            <span className="ml-2 text-gray-800 font-medium">Acceder</span>
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU --- */}
      {open && (
        <div className="sm:hidden flex flex-col items-center gap-4 pb-4 bg-[#F8F4F3] border-t border-gray-200">

          <button className="flex items-center gap-2 text-gray-600">
            <Search className="w-5 h-5" />
            <span className="text-lg font-light">Búsqueda</span>
          </button>

          <button className="flex items-center gap-2 text-gray-600">
            <Bell className="w-5 h-5" />
            <span className="text-lg font-light">Notificaciones</span>
          </button>

          <button
            onClick={openRegisterModal}
            className="text-gray-700 hover:text-gray-900 font-light"
          >
            Hazte miembro
          </button>

          <button
            onClick={openLoginModal}
            className="flex rounded items-center border border-gray-800 px-4 py-2 hover:bg-gray-100 transition"
          >
            <IconList icon="userCircle" color="#000" size="lg" />
            <span className="ml-2 text-gray-800 font-medium">Acceder</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Menu;
