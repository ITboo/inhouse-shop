import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import Home from "../pages/Home";
import Details from "../pages/Details";
import Cart from "../pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:slug" element={<Details />} />
          <Route path="/cart" element={<Cart/>}/>
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
