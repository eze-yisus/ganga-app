import React from "react";
import { Menu } from "@headlessui/react";
import { useDispatch } from "react-redux";
import {logout} from "../../Redux/Actions/actions"
import Avatar from "@mui/material/Avatar";

export default function User() {
  const dispatch = useDispatch();
  // console.log(dispatch);

  function handleLogout(e) {
    e.preventDefault();
    dispatch(logout());
    // history.push("/");
    window.location.reload()
  }

  return (
    <Menu>
      <Menu.Button>
        <Avatar  src="" />
      </Menu.Button>

      <Menu.Items className="origin-top-right absolute right-0 shadow-lg ring-4 ring-white  ring-opacity-20 mr-4 mt-2 p-2 bg-white">
        <div>
          <Menu.Item className="py-2">
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
