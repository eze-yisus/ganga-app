import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./newsletter.css";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { postNewsletter } from "./../../Redux/Actions/actions";

export default function Newsletter() {
  const dispatch = useDispatch();
  let newsletter = document.getElementById("hola");

  useEffect(() => {
    dispatch(postNewsletter());
  }, [dispatch]);

  const [input, setInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let prueba = {
      email: input,
    };
    dispatch(postNewsletter(prueba));
    newsletter.innerHTML = "Gracias por tu suscripción!";
  };

  return (
    <div className="NewsletterContainer">
      <Box sx={{ width: "80%" }}>
        <Typography variant="h4">
          <p className="NewsletterTitle">Newsletter</p>
        </Typography>
        <Typography variant="h5">
          <p className="NewsletterSubTitle">
            Regístrate y obten de primera mano nuestras promociones y entérate antes de los
            nuevos productos.
          </p>
        </Typography>

        <div className="FormNewsLetter">
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              name="email"
              type="email"
              className="NewsletterInput"
              placeholder="Email"
              onChange={(e) => handleChange(e)}
            />
            <input
              className="ButtonNewsletter hvr-grow-shadow"
              type="submit"
              name="email"
              value="Registrarme"
            ></input>
            <p id="hola" style={{ color: "red", fontSize: "12px" }}></p>
          </form>
        </div>
      </Box>
    </div>
  );
}
