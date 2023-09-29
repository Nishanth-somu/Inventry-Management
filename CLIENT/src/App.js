import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './LOGINPAGE/loginpage';
import 'bootstrap/dist/css/bootstrap.css';
import { AdminDash } from './Admindash/admindash';
import { Warehouse } from './Warehouse/warehouse';
import { Product } from './products/product';
import { Annanagar } from './warehouselocation/annanagar';
import { Kotturpuram } from './warehouselocation/kotturpuram';
import { Besantnagar } from './warehouselocation/besantnagar';
import { Thiruvanmiyur } from './warehouselocation/thiruvanmiyur';
import { Adyar } from './warehouselocation/adyar';
import { Getsingle, Sports } from './productdetail/getsingle';
import { Homeappliance } from './productdetail/homeappliance';
import { Stationery } from './productdetail/stationery';
import { Update } from './updateproduct/updateproduct';
import { Addproduct } from './addproduct/addproduct';
import { Dispatch } from './dispatch/dispatch';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/admindash' element={<AdminDash/>} />
          <Route path='/warehouse' element={<Warehouse/>} />
          <Route path='/product' element={<Product/>} />
          <Route path='/annanagar' element={<Annanagar/>} />
          <Route path='/Kotturpuram' element={<Kotturpuram/>} />
          <Route path='/Besantnagar' element={<Besantnagar/>} />
          <Route path='/Thiruvanmiyur' element={<Thiruvanmiyur/>} />
          <Route path='/Adyar' element={<Adyar/>} />
          <Route path='/getsingle/:product_id' element={<Getsingle/>} />
          <Route path='/Homeappliance' element={<Homeappliance/>} />
          <Route path='/stationery' element={<Stationery/>} />
          <Route path='/update/:product_id' element={<Update/>} />
          <Route path='/addproduct' element={<Addproduct/>} />
          <Route path='/dispatch/:product_id' element={<Dispatch/>} />
        </Routes>
      </BrowserRouter>
     

  
     
    </>
  );
}

export default App;
