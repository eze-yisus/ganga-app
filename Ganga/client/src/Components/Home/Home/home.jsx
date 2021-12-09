import React, { useState, useEffect } from "react";
import { useDispatch/*, useSelector */} from "react-redux";
import { getProduct } from "../../Redux/Actions/actions";
import Nav from "../../Nav/NavBar/nav";
import Carousel from "./Carousel/carousel";
import BestSellingBrands from "../BestSellingBrands/bestSellingBrands";
import FooterPage from "../Footer/footer";
import ContactForm from "../ContactForm/contactForm";
import CollagePhotos from "../CollageProducts/collagePhotos";
// import Newsletter from "../NewsLetter/newsletter";
// import Map from "../ContactForm/map";
import s from "./home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  // const allProduct = useSelector((state) => state.product);

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
      <div className={s.bghome}>
        <div className={s.bgCarousel}>
          <Carousel />
        </div>
        <div>
          <BestSellingBrands />
        </div>
        <div>
          <CollagePhotos />
        </div>
        {/* <div>
          <Newsletter />
        </div> */}
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
