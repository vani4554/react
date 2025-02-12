
// import Home from "./Home";
// import Veg from "./Veg";
// import NonVeg from "./NonVeg";
// import Cart from "./Cart";
// import AboutUs from "./Aboutus";
// import ContactUs from "./ContactUs";
// import "./App.css"
// import Milk from "./Milk";
// import { useDispatch, useSelector } from "react-redux";
// // import NotFound from "./NotFound";
// import Orders from "./Orders";
// import Login from "./Login";
// { logout } from "./Store";
import { BrowserRouter, Link,Route, Routes } from "react-router-dom";
import Home from "./Home";
import Veg from "./Veg";
import Nonveg from "./NonVeg";
import Milk from "./Milk";
import Cart from "./Cart";
import Order from "./Order";
import Login from "./Login";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";
import NotFound from "./NotFound";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./Store";

function App()
{
    const cart=useSelector(state=>state.cart);
    const totalItems=cart.reduce((sum,item)=>sum + item.quantity,0);
    let auth=useSelector((state)=>state.auth)
    let isAuthenticated=auth.isAuthenticated;
    let user=auth.user;
    let dispatch=useDispatch();
    return(
<BrowserRouter>
<nav>
<Link to='/home' className="myclass">Home</Link> &emsp;
<Link to='/veg' className="myclass">VegItem</Link>&emsp;
<Link to='/nonveg' className="myclass">NonVegItem</Link>&emsp;
<Link to='/milk' className="myclass">MilkItem</Link>&emsp;
<Link to='/cart' className="myclass">Cart <span>{totalItems}</span> </Link>&emsp;
<Link to='/order' className="myclass">Orders</Link>&emsp;
<Link to='/aboutus' className="myclass">AboutUs</Link>&emsp;
<Link to='/contactus' className="myclass">ContactUs</Link>&emsp;

{
    isAuthenticated?(
        <>
        <span className="welcome">welcome ,{user} </span>
        <button onClick={()=>dispatch(logout())}
        className="logout-btn">logout</button>
        </>
    ) : (
       <Link to="/login" className="myclass">SignIn</Link> 
    )
}
</nav>
<Routes>
    <Route path="/"  element={<Home/>}/>
    <Route path="/home" element={<Home/>} />
    <Route path="/veg" element={<Veg/>} />
    <Route path="/nonveg" element={<Nonveg/>} />
    <Route path="/milk" element={<Milk/>} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="/order" element={<Order/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/aboutus" element={<Aboutus/>} />
    <Route path="/contactus" element={<Contactus/>} />
    <Route path="*" element={<NotFound/>} />
</Routes>
</BrowserRouter>
    )
}
export default App;