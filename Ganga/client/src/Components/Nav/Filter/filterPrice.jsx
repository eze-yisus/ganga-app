import React, { useState } from "react";
import { filterPriceByRange } from "../../Redux/Actions/actions";
import { useDispatch } from "react-redux";
import "./filterPrice.css";

export default function FilterPrice() {
  const dispatch = useDispatch();
  const [, setCurrentPage] = useState(1);
  const [input, setInput] = useState({
    price1: "",
    price2: "",
    });

    function handleInput(e) {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
    }
    
  
    function handleSubmit(e) {
      e.preventDefault();
      dispatch(filterPriceByRange(input));
      setCurrentPage(1);
      setInput({
        price1: "",
        price2: "",
    });
    }
    
  return (
    <div className="inputContainer">
      <div className="conPriceMin">
        <input
         className="inputPrice"
          type="number"
          min="1000"
          name="price1"
          value={input.price1}
          placeholder="precio mínimo de..."
          onChange={handleInput}
        />
      </div>
      <h3 className="has">hasta</h3>
      <div className="conPriceMax">
        <input
         className="inputPrice"
          type="number"
          min="1000"
          name="price2"
          value={input.price2}
          placeholder="precio máximo de..."
          onChange={handleInput}
        />
      </div>
      <div className="conFil">
        <button className="fil" type="submit" onClick={handleSubmit}>
          Filtra ahora
        </button>
      </div>
    </div>
  );
}
