import React from "react";

export default function Categorias() {

const categorias = [
    
    {Nombre: 'Tecnologia', Id:'1'}, 
    {Nombre: 'Electrodomesticos', Id:'2'}, 
    {Nombre: "Deportes",id:'3'}, 
    {Nombre: 'Informatica', Id:'4'}, 
    {Nombre: 'Moda', Id:'5'}, 
    {Nombre: "Juegos",id:'6'}, 
    {Nombre: 'Bebes', Id:'7'}, 
    {Nombre: 'Repuestos', Id:'8'}, 
    {Nombre: "Accesorios",id:'9'}, 
    {Nombre: 'Decoración', Id:'10'}, 
    {Nombre: 'Educación', Id:'11'}, 
    {Nombre: "Niños",id:'12'}, 
   
]

function handelFilterCat(){

}

  return (
    <div>
     <select  onChange={handelFilterCat}>
          {
              categorias.map((el, i) => {
                  return (
                  <>
                  <option key={"marca" + 1} value ={el.Id}>{el.Nombre}</option>
                  </>
                  )
              })
          }
      </select>
    </div>
  );
}
