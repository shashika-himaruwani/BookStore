import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { ShopCategory } from './Pages/ShopCategory';
import { Shop } from './Pages/Shop';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { LoginSignUp } from './Pages/LoginSignUp';
import Footer from './Components/Footer/Footer';
import adult_banner from './Components/Assets/adult_image.png';
import children_banner from './Components/Assets/children_image.png';
import student_banner from './Components/Assets/student_image.png'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>}></Route>
        <Route path='/adults' element={<ShopCategory banner={adult_banner}category="adults"/>}></Route>
        <Route path='/children' element={<ShopCategory banner={children_banner} category="children"/>}></Route>
        <Route path='/students' element={<ShopCategory banner={student_banner} category="students"/>}></Route>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product />}/>
        </Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/login' element={<LoginSignUp/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
