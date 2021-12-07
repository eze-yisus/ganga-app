import React from "react";

export default function Marcas() {

const marcas = [
    
    {Nombre: 'Nike', Id:'1'}, 
    {Nombre: 'Adidas', Id:'2'}, 
    {Nombre: "Puma",id:'3'}, 
    {Nombre: 'Xiaomi', Id:'4'}, 
    {Nombre: 'Samsung', Id:'5'}, 
    {Nombre: "Iphone",id:'6'}, 
    {Nombre: 'Motorolla', Id:'7'}, 
    {Nombre: 'Hp', Id:'8'}, 
    {Nombre: "Dell",id:'9'}, 
    {Nombre: 'Lenovo', Id:'10'}, 
    {Nombre: 'Apple', Id:'11'}, 
    {Nombre: "Sony",id:'12'}, 
   
]

function handelFilterMarca(){

}

  return (
    <div>
      <select  onChange={handelFilterMarca}>
        <option>Marcas</option>
          {
              marcas.map((el, i) => {
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
