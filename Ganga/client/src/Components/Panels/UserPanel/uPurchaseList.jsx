import React from 'react'

export default function PurchaseList({orders}) {

for (var i = 0; i < orders.length; i++) {
    for (var j = 0; j < orders[i].productInfo.length; j++) {
        orders[i].productInfo[j].date = orders[i].createdAt.slice(0,10)
        orders[i].productInfo[j].total = orders[i].productInfo[j].quantity * orders[i].productInfo[j].price
    }
}


let Products = orders.map(o => o.productInfo);
let products = Products.flat()
console.log(products, "p")

    return (
        <div>

        { products.map(p => {
        
            return (
            <div className="inline-block text-center p-5">
        <h1>{p.name}</h1>
        <img className="w-60 h-60 text-center" src={p.image} alt={`imagen de ${p.name}`} />
        <h4>{p.description}</h4>
        <h6>{p.date}</h6>
        <h2>${p.price} </h2>
        <h5>{p.quantity === 1 ? null: p.quantity + " unidades"}</h5>
        <h1> {p.total === p.price ? null :"total =  $" + p.total}</h1>
        </div>

            )
        })
        }
        </div>
    )
}
