
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Components/Home';
import Cart from './Components/Cart';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import NewProduct from './Components/admin/management/NewProduct';
import AdminLogin from './Components/admin/AdminLogin';
import UserLogin from './Components/user/UserLogin';
import Shipment from './Components/checkout/Shipment';
import AdminPanel from './Components/admin/AdminPanel';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
            <Route index path='/' element={<UserLogin/>}/>
            <Route index path='/index' element={<Home/>}/>
            <Route  path='/cart/:id' element={<Cart/>}/>
            <Route  path='/new' element={<NewProduct/>}/>
            <Route  path='/adminlogin' element={<AdminLogin/>}/>
            <Route  path='/shipment' element={<Shipment/>}/>
            <Route  path='/panel' element={<AdminPanel/>}/>
            
        </Routes>
      </BrowserRouter>
      
         
      
    </div>
  );
}

export default App;
