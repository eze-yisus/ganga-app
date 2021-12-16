import React, { useState, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { getProduct, getUserInfoGoogle  } from "../../Redux/Actions/actions";
import Nav from "../../Nav/NavBar/nav";
import Carousel from "./Carousel/carousel";
import BestSellingBrands from "../BestSellingBrands/bestSellingBrands";
import FooterPage from "../Footer/footer";
import ContactForm from "../ContactForm/contactForm";
import CollagePhotos from "../CollageProducts/collagePhotos";
import MapView from "../ContactForm/Map/map";
import s from "./home.module.css";
import User from "../../Nav/User/user";
import imgSomosGanga from "../../Resources/somosGanga.png";
import { Link } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  const userGoogle = useSelector((state) => state.getInfoGoogle);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    dispatch(getUserInfoGoogle());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const navOpacity = () => {
    if (window.scrollY >= 100) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener("scroll", navOpacity);

  return (
    <div>
      <div className={nav ? s.Nav : s.nav}>
      {userGoogle && userGoogle.login ? 
    <div className="fixed top-5 right-20 z-50 mr-10 w-28">
      <User />
      </div> 
      : null } 
        <Nav />
      </div>
      <div className={s.bghome}>
        <div className={s.bgCarousel}>
          <Carousel />
        </div>
        <div className={s.bgSomosGa}>
        <div className={s.containerSomosGa}>
          <Link to="/catalogo">
            <img className={s.imgSomosGa} src={imgSomosGanga} alt="" />
          </Link>
        </div>
        </div>
        <div>
          <BestSellingBrands />
        </div>
        <div>
          <CollagePhotos />
        </div>
        <div>
          <MapView />
        </div>
        <div>
          <ContactForm />
        </div>
        <div>
          <FooterPage />
        </div>
      </div>
    </div>
  );
}