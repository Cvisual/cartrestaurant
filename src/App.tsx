import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import { Restaurant } from './restaurant/Restaurant';
import { MenuInHOC } from './restaurant/Menu/Menu';
import { Product } from './restaurant/Product/Product';
import { Cart } from "./restaurant/Cart/Cart";
import { Checkout } from "./restaurant/Cart/Checkout";
import { Empty } from "./restaurant/Cart/Empty";
import withCart from "./restaurant/HOC/withCart";

const CartInHOC = withCart(Cart);


function App() {


  return (
    <Router>
      <Routes>
        
        <Route path='/restaurant/:id' element={<Restaurant />} />
          
          <Route path='/menu/:id' element={<MenuInHOC />} />          
          <Route path='/cart' element={<CartInHOC />} />
          <Route path='/cart/empty' element={<Empty />} />
          <Route path='/checkout' element={<Checkout />} />
        
      </Routes>
    </Router>
  )
}

export default App
