import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getUserOrder, setOrderEntregada } from "../../order";
import { Table, Button } from "react-bootstrap";
import { decodeToken } from "../../utils";
import swal from "sweetalert";

const UserOrders = () => {
  const history = useHistory();
  const [userOrders, setUserOrders] = useState();
  const getOrden = async () => {
    const user = decodeToken();
    const order = await getUserOrder(user.username);
    if (order.message) {
      console.log(order.message);
    } else {
      setUserOrders(order);
    }
  };

  useEffect(() => {
    getOrden();
  }, []);

  const handleSet = async (orderId) => {
    await setOrderEntregada(orderId);
    return swal("Se ha notificado que tu orden fue entregada").then(
      function () {
        window.location = "/account";
      }
    );
  };

  return (
    <div>
      <Table striped bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>Precio</th>
            <th>Estado</th>
            <th>Productos</th>
            <th>Fecha</th>
            <th>Detalles</th>
            <th>Envio</th>
          </tr>
        </thead>
        <tbody>
          {userOrders?.map((e) => {
            return (
              <tr>
                <td>{e.id}</td>
                <td>${e.price}</td>

                <td>{e.status.charAt(0).toUpperCase() + e.status.slice(1)}</td>
                <td>
                  {e.products?.map((n) => {
                    return (
                      <span>
                        {n.name.charAt(0).toUpperCase() +
                          n.name.slice(1).toLowerCase() +
                          "-"}
                      </span>
                    );
                  })}
                </td>
                <td>
                  {e.updatedAt?.slice(0, 10).split("-").reverse().join("-")}
                </td>
                <td>
                  <Button
                    variant="outline-dark"
                    onClick={() => {
                      history.push(`/order/${e.id}`);
                    }}
                  >
                    Ver detalles
                  </Button>
                </td>
                <td>
                  {e.info !== "retiro" && e.info !== "entregada" ? (
                    <Button
                      variant="outline-dark"
                      onClick={() => handleSet(e.id)}
                    >
                      Ya me llegó
                    </Button>
                  ) : e.info === "entregada" ? (
                    "Entregada"
                  ) : e.local !== null ? (
                    "Retira por local"
                  ) : (
                    e.address
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default UserOrders;
