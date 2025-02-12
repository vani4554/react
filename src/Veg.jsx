// import { useDispatch, useSelector } from "react-redux";
// import { addtoCart } from "./Store";

// function Veg()
// {
//     let dispatch=useDispatch()
//     let Vegitems=useSelector(state=>state.products.Veg)
//     // let VegItems=[{name:"potato",price:23.00},
//     //               {name:"chilli", price:45.09},
//     //               {name:"onion" ,price:64.98},
//     //               {name:"tomato" ,price:20},
//     //               {name:"carrot" ,price:30},             
//     // ]
//     let finalitems=Vegitems.map((items,index)=>(
//         <li key={index}>
//             {items.name}-${items.price}
//             <img src={items.image} height="120px" width="120px"/>
//             {/* <button onClick={()=>console.log("product added")}>Add To Cart</button> */}
//             <button onClick={()=>dispatch(addtoCart(items))}>Add to Cart</button>
//         </li>
//     ))
//     return(
//         <>
//         <h1 className='text-success p-5  fst-italic'>This is veg.jsx file </h1>
//         <ol> {finalitems}</ol>
//         </>
//     )
// }
// export default Veg;

import { useDispatch, useSelector } from "react-redux";
import { addtoCart } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";

function Veg() {
    const dispatch = useDispatch();
    const Vegitems = useSelector(state => state.products.Veg);

    return (
        <div className="container mt-5">
            <h1 className="text-success text-center p-3 fst-italic">
                This is Veg Component
            </h1>

            <div className="row">
                {Vegitems.map((item, index) => (
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
                                    className="btn btn-primary"
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

export default Veg;
