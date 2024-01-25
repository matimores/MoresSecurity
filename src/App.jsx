import "./App.css";
import "./styles/navbar.css";
import "./styles/item.css";
import "./styles/itemDetail.css";
import "./styles/CardWidget.css";
import "./styles/footer.css";
import "./styles/contacto.css";
import "./styles/ItemCount.css"
import "./styles/cart.css"
import "./styles/checkout.css"
import "./styles/main.css"
import "./styles/itemCart.css"
import "./styles/itemList.css"
import "./styles/divItemDetail.css"
import "./styles/mediasQuery.css"

import Navbar from "./component/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./component/footer";
import Contacto from "./component/contacto";
import ItemDetailContainer from "./component/itemDetailContainer";
import ItemListContainer from "./component/itemListContainer";
import { CartProvider } from "./context/cartContext";
import Cart from "./component/cart";
import Checkout from "./component/checkout";
import Main from "./component/main";

function App() {
  return (
    <>
 
 <CartProvider> 
    <BrowserRouter>

          <Navbar />
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/productos" element={<ItemListContainer />} />
            <Route  exact path="/category/:category" element={<ItemListContainer />}/>
             <Route exact  path="/item/:itemId" element={<ItemDetailContainer />}/>
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/contacto" element={<Contacto />} />
            <Route exact path="/Checkout" element={<Checkout />}  />
          
          </Routes>
         <Footer />
          
        </BrowserRouter>
 
 </CartProvider>          
              
            

           
              
            
              
            

       
      
    </>
  );
}

export default App;
