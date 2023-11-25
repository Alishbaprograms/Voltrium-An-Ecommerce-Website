import './App.css';
import { Navbar } from './Componenets/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './Componenets/Pages/Shop';
import ShopCategory from './Componenets/Pages/ShopCategory';
import Product from './Componenets/Pages/Product';
import Cart from './Componenets/Pages/Cart';
import LogInSignUp from './Componenets/Pages/LogInSignUp';

function App() {
  return (
    <div>

      <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Shop/>}/> 
        <Route path='/arduino' element={<ShopCategory category="arduino"/>}/> 
        <Route path='/suppliers' element={<ShopCategory category="suppliers"/>}/> 
        <Route path='/componenets' element={<ShopCategory category="componenets"/>}/> 

        <Route path="product" element={<Product/>}>
          <Route path=":productId" element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LogInSignUp/>}/>  
      </Routes>      
      </BrowserRouter>
        
    </div>
  );
}

export default App;
