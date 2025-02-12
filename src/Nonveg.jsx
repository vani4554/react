// import { useDispatch, useSelector } from "react-redux";
// import { addtoCart } from "./Store";
 
// function Nonveg()
// {
//     let dispatch=useDispatch()
//     let NonVegItems=useSelector(state=>state.products.NonVeg)
//     // let NonVegItems=[{name:"chicken",price:280.00},
//     //               {name:"mutton", price:900.09},
//     //               {name:"fish" ,price:150.98}, 
//     //               {name:"prawns" ,price:200},
//     //               {name:"crabs" ,price:300},             
//     // ]
//     let finalitems=NonVegItems.map((items,index)=>(
//         <li key={index}>
//             {items.name}-${items.price}
//             <img src={items.image} height="120px" width="120px"/>
//             {/* <button onClick={()=>console.log("product added")}>Add To Cart</button> */}
//             <button onClick={()=>dispatch(addtoCart(items))}>Add to Cart</button>
//         </li>
//     ))
//     return(
//         <>
//         <h1 className='text-primary p-5  fst-italic'>This is Nonveg.jsx file </h1>
//         <ol> {finalitems}</ol>
//         </>
//     )
// }
// export default Nonveg;

import { useDispatch, useSelector } from "react-redux";
import { addtoCart } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";

function Nonveg() {
    const dispatch = useDispatch();
    const NonVegItems = useSelector(state => state.products.NonVeg);

    return (
        <div className="container mt-5">
            <h1 className="text-primary text-center p-3 fst-italic">
                This is the Non-Veg Section
            </h1>

            <div className="row">
                {NonVegItems.map((item, index) => (
                    <div key={index} className="col-md-3 mb-4">
                        <div className="card shadow-lg">
                            <img
                                src={item.image}
                                className="card-img-top p-3 rounded"
                                alt={item.name}
                                height="150px"
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title text-uppercase">{item.name}</h5>
                                <p className="card-text fw-bold text-danger">₹{item.price.toFixed(2)}</p>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => dispatch(addtoCart(item))}
                                >
                                    Add to Cart 🛒
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Nonveg;