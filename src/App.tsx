import { CartComponent } from "./views/CartView/CartView";
import { HeaderComponent } from "./components/HeaderComponent/HeaderComponent";
import { ListProductsComponent } from "./views/ListProductView/ListProducts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

function App() {

  return (
    <div
      className="min-h-full bg-fixed "
      style={{ backgroundImage: "url(background.webp)" }}
    >

      <Router>
        <CartProvider>
          <HeaderComponent />
          <div className="flex justify-center min-h-full">
            <div className="max-w-lg w-full py-16">
              <Routes>
                <Route path="/" element={<ListProductsComponent />} />
                <Route path="/cart" element={<CartComponent />} />
                <Route path="/*" element={<h1 className="text-center">NOT FOUND 404</h1>} />
              </Routes>
            </div>
          </div>
        </CartProvider>
      </Router>

    </div>
  );
}

export default App;
