import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { allReviews } from "../../Redux/Actions/actions";

export default function VendorSalesList({ user, orders, users }) {
  const Reviews = useSelector((state) => state.allReviews);
  const userReviews = Reviews.filter((review) => review.userId === user.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allReviews());
  }, [dispatch]);

  for (var i = 0; i < orders.length; i++) {
    for (var j = 0; j < orders[i].productInfo.length; j++) {
      orders[i].productInfo[j].date = orders[i].createdAt.slice(0, 10);
      orders[i].productInfo[j].user = orders[i].userId;
      orders[i].productInfo[j].total =
        orders[i].productInfo[j].quantity * orders[i].productInfo[j].price;
    }
  }

  let sales = orders.map((o) => o.productInfo).flat();
  sales = sales.filter((s) => s.owner === user.id);

  const columns = [
    { field: "id", headerName: "id", width: 30 },
    { field: "Usuario", headerName: "Usuario", width: 130 },
    { field: "Correo", headerName: "Correo", width: 150 },
    { field: "Producto", headerName: "Producto", width: 180 },
    { field: "Cantidad", headerName: "Cantidad", type: "number", width: 90 },
    { field: "Total", headerName: "Total", type: "number", width: 100 },
    { field: "Fecha", headerName: "Fecha", width: 100 },
  ];

  const rows = sales?.map((s) => {
    let comprador = users.filter((u) => u.id === s.user);
    comprador = comprador[0];

    let user = comprador.name + " " + comprador.surname;
    let mail = comprador.mail;
    return {
      Usuario: user,
      Correo: mail,
      Producto: s.name,
      Cantidad: s.quantity,
      Total: "$ " + s.total,
      Fecha: s.date,
      id: s.id,
    };
  });

  return (
    <div>
      <div>
        <h4 className="text-5xl text-center font-light pt-10 pb-12">Ventas</h4>
        <div className="h-80 mb-20">
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            // checkboxSelection
          />
        </div>
      </div>
      <div>
        {userReviews?.map((review) => {
          console.log("soy el review mapeado: ", review);
          if (review.qualificacion === 1) {
            review.qualificacion = "⭐";
          } else if (review.qualificacion === 2) {
            review.qualificacion = "⭐⭐";
          } else if (review.qualificacion === 3) {
            review.qualificacion = "⭐⭐⭐";
          } else if (review.qualificacion === 4) {
            review.qualificacion = "⭐⭐⭐⭐";
          } else if (review.qualificacion === 5) {
            review.qualificacion = "⭐⭐⭐⭐⭐";
          } else if (review.qualificacion === 6) {
            review.qualificacion = "⭐⭐⭐⭐⭐⭐";
          } else if (review.qualificacion === 7) {
            review.qualificacion = "⭐⭐⭐⭐⭐⭐⭐";
          } else if (review.qualificacion === 8) {
            review.qualificacion = "⭐⭐⭐⭐⭐⭐⭐⭐";
          } else if (review.qualificacion === 9) {
            review.qualificacion = "⭐⭐⭐⭐⭐⭐⭐⭐⭐";
          } else if (review.qualificacion === 10) {
            review.qualificacion = "⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐";
          }

          return (
            <div
              className="border-2 border-gray-500 w-80 text-center p-2 m-4 inline-block rounded"
              key={review.id}
            >
              <h6 className="text-base p-2">
                {" "}
                <span className="text-xs">comentario: </span>
                <br /> " {review.description} "{" "}
              </h6>

              <h4 className="text-2xl p-2"> {review.qualificacion}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}
