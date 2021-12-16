import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserInfoGoogle } from "../Redux/Actions/actions";
import { SuccessLogicMp } from "./successLogicMp";


export function SuccesMp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserInfoGoogle());
  }, [dispatch]);

  const User = useSelector((state) => state.getInfoGoogle);
  const cart = User.Cart;
  let prod = 0,
    sum = 0;

  const volver = () => {
    navigate("/catalogo");
  };

  return (

    <div class="flex justify-center my-6">
      <div class="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
        <div class="flex-1">
          <th class="w-full text-sm lg:text-base" cellspacing="0">
            <button
              onClick={volver}
              class="flex justify-center w-full px-4 py-2 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-red-500 focus:shadow-outline focus:outline-none"
            >
              <span class="ml-2 mt-5px">VOLVER</span>
            </button>
          </th>
          <div class="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center">
                 
                      <span class="ml-2 mt-5px">
                        RESUMEN DE TU COMPRA
                      </span>
                    </div>
          <table class="w-full text-sm lg:text-base" cellspacing="0">
            <thead>
              <tr class="h-12 uppercase">
                <th class="hidden md:table-cell"></th>
                <th class="text-left">Producto</th>
                <th class="lg:text-right text-center pl-5 lg:pl-0">
                  <span class="lg:hidden" title="Quantity">
                    Cant
                  </span>
                  <span class="hidden lg:inline">Cant</span>
                </th>
                <th class="hidden text-right md:table-cell">Precio U.</th>
                <th class="text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              {/* LA ETIQUETA DE AQUI ABAJO DEBERIAMOS MAPEAR PARA MOSTRAR LOS ITEMS DEL CARRITO */}
              {
                cart?.length !== 0
                  ? cart?.map((el) => (
                      <tr key={el.id}>
                        <td class="hidden pb-4 md:table-cell">
                          <img
                            src={el.image}
                            class="w-20 rounded"
                            alt="Thumbnail"
                          />
                        </td>
                        <td>
                          <p class="mb-2 md:ml-4">{el.name}</p>
                        </td>
                        <td class="justify-center md:justify-end md:flex mt-6">
                          <div class="w-20 h-10">
                            <div class="relative flex flex-row w-full h-8">
                              {el.quantity}
                            </div>
                          </div>
                        </td>
                        <td class="hidden text-right md:table-cell">
                          <span class="text-sm lg:text-base font-medium">
                            $ {el.price}
                          </span>
                        </td>
                        <td class="text-right">
                          <span class="text-sm lg:text-base font-medium">
                            {(prod = el.price * el.quantity)}
                          </span>
                          {((sum = sum + prod), console.log(""))}
                        </td>
                      </tr>
                    ))
                  : ""
              }
            </tbody>
          </table>
          {/* <hr class="pb-6 mt-6"> */}

          <div class="my-4 mt-6 -mx-2 lg:flex">

            <div class="lg:px-2 lg:w-full">

              <div class="p-4">

                <div class="flex justify-between pt-4 border-b">
                  <div class="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                    Total
                  </div>
                  <div class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                    {/* total = subtotal + envio */}$ {sum}
                  </div>
                </div>

              </div>
            </div>
          </div>
          {/* </hr> */}
        </div>
      </div>
      {User.login && <SuccessLogicMp sum={sum} user={User} />}
    </div>
  );
}
