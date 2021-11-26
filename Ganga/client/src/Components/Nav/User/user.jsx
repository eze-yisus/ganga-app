import React  from "react";
import { Menu } from "@headlessui/react";

import { useDispatch } from "react-redux";
import Avatar from "@mui/material/Avatar";



export default function User() {

  const dispatch = useDispatch();
 

  function handleLogout(e) {
    e.preventDefault();
   // dispatch(logout());
   // history.push("/");
}
   
    return (
        <Menu>
            <Menu.Button>
                <Avatar src="" />
            </Menu.Button>

            <Menu.Items className="origin-top-right absolute right-0 shadow-lg ring-4 ring-white  ring-opacity-20 mr-2 mt-2 p-2 bg-white">
                <div >
                    <Menu.Item className="py-2">
                        {({ active }) => (
                          <div>
                            <a
                                href="/registrarme"
                                className={`${active ? "opacity-100 " : "opacity-60"}`}
                            >
                                Crear cuenta
                            </a>
                          </div>
                        )}
                    </Menu.Item>
                </div>
                <div>
                    <Menu.Item className="py-2">
                        {({ active }) => (
                          <div>
                            <a
                                href="/ingresar"
                                className={`${active ? "opacity-100 " : "opacity-60"}`}
                            >
                                Iniciar sesión
                            </a>
                          </div>
                        )}
                    </Menu.Item>
                </div>
    
                    <div >
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