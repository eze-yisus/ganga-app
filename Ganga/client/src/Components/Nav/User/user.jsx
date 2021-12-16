import React from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import {logout} from "../../Redux/Actions/actions"
import Avatar from "@mui/material/Avatar";

export default function User() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const infoUser= useSelector((state) => state.getInfoGoogle);

  function handleLogout(e) {
    e.preventDefault();
    dispatch(logout());
    // history.push("/");
    navigate("/");
    // window.location.reload()
  }

  return (
    <Menu>
      <Menu.Button>
        <Avatar  src={infoUser.image} />
      </Menu.Button>

     
      <Menu.Items className="origin-top-right absolute shadow-lg ring-4 ring-white -ml-9 ring-opacity-20 p-3 bg-white">

        <div>
          <Menu.Item className="py-2 px-2">
            {({ active }) => (
              <div>
                <a
                  href="/panel"
                  className={`${active ? "opacity-100 " : "opacity-60"}`}
                >
                  Mis Datos
                </a>
              </div>
            )}
          </Menu.Item>
        </div>

        <div>
          <Menu.Item className="py-2">
            {({ active }) => (
              <div>
                <button
                  onClick={handleLogout}
                  className={`${active ? "opacity-100" : "opacity-60"}`}
                >
                  Cerrar sesión
                </button>
              </div>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  );
}
