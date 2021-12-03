import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../Redux/Actions/actions";
import Nav from "../../Nav/NavBar/nav";
import Carousel from "./Carousel/carousel";
import FooterPage from "../Footer/footer";
import ContactForm from "../ContactForm/contactForm";
// import Map from "../ContactForm/map";
import s from "./home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const allProduct = useSelector((state) => state.product);
  console.log(allProduct);

  const [nav, setNav] = useState(false);
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const navOpacity = () => {
    if (window.scrollY >= 200) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener("scroll", navOpacity);

  return (
    <div>
      <div className={nav ? s.Nav : s.nav}>
        <Nav />
      </div>
      <div className={s.bgHome}>
        <div>
          <Carousel />
        </div>
        <div>
          {/* <Map /> */}
          <ContactForm />
        </div>
        <div>
          <FooterPage />
        </div>
      </div>
    </div>
  );
}
