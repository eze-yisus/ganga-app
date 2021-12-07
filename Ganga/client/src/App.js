import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home/home";
import Catalogo from "./Components/Nav/Catalog/catalog";
import Login from "./Components/Nav/User/Login/login";
import SignUp from "./Components/Nav/User/SignUp/singUp";
import Categorias from "./Components/Nav/Categories/categories";
import ProductId from "./Components/ProductoId/productoId";
import LoginSuccess from "./Components/Nav/User/LoginGoogle/loginSuccess";
import CreateProduct from "./Components/CreateProducts/createProducts";
import ShopCart from "./Components/ShoppCart/shoppCart.jsx";
import Panel from "./Components/Panels/Panel/panel";
import Modificar from "./Components/Panels/UserPanel/uInfo";

import { SuccesMp } from "./Components/MercadoPago/successMp";
import { FailMp } from "./Components/MercadoPago/failMp";
import SubAdminForm from "./Components/Panels/AdminPanel/subAdminForm";
import AdminPanelV from "./Components/Panels/VendorPanel/vPanel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path ='/' element={<Home/>}/>
         <Route path ='/:id' element={<ProductId/>}/>
         <Route path ='/catalogo' element={<Catalogo/>}/>
         <Route path ='/ingresar' element={<Login/>}/>
         <Route path ='/registrarme' element={<SignUp/>}/>
         <Route path = '/create' element={<CreateProduct/>}/>
         <Route path ='/categorias/:nombre' element={<Categorias/>}/>
         <Route exact path="/login/success" element={<LoginSuccess />}/>
         <Route exact path="/login/success" element={<LoginSuccess />} />
         <Route path ='/shopCart' element={<ShopCart/>}/>
         <Route path ='/panel' element={<Panel/>}/>
         <Route path='/user/:id' element={<Modificar />} />
         <Route path ='/successMp' element={<SuccesMp/>}/>
         <Route path ='/failMp' element={<FailMp/>}/>
         <Route path="/registrar" element={<SubAdminForm />} />
         <Route exact path="/panelV" element={<AdminPanelV />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
