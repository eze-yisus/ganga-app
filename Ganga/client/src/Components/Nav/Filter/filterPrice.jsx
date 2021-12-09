import React, {useState} from "react";
import {filterPriceByRange} from '../../Redux/Actions/actions'
import { useDispatch } from 'react-redux';



export default function FilterPrice() {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [price1, setPrice1]= useState("")
    const [price2, setPrice2]= useState("")

    function handleInput1(e) {
        setPrice1(e.target.value)
        console.log(e.target.value)
    }
    function handleInput2(e) {
        setPrice2(e.target.value)
        console.log(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(filterPriceByRange(price1, price2));
        setPrice1(" ")
        setPrice2(" ")
        setCurrentPage(1);
    }
    return (
        <div>
            <input
                type="Number"
                placeholder="Precio minimo"
                onChange={handleInput1}
            />
            <p>hasta</p>
            <input
                type="Number"
                placeholder="Precio Maximo"
            onChange={handleInput2}
            />
            <button type="submit" onClick={handleSubmit}>Filtrar</button>

        </div>
    )
}