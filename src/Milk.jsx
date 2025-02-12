//  import { useDispatch, useSelector } from "react-redux";
// // import { addtoCart } from "./Store";

// import { addtoCart } from "./Store";

// function Milk()
// { 
//     let dispatch=useDispatch()
//     let MilkItems=useSelector(state=>state.products.Milk)
//     // Milk:[
//     //     {name:'jarsey',price:230.0},
//     //     {name:'heritage',price:230.0},
//     //     {name:'dodla',price:230.0},
//     // ],
//     let finalitems=MilkItems.map((items,index)=>(
//         <li key={index}>
//             {items.name}-${items.price}
//             <img src={items.image} height="120px" width="120px"/>
//             {/* <button onClick={()=>console.log("product added")}>Add To Cart</button> */}
//             <button onClick={()=>dispatch(addtoCart(items))}>Add to Cart</button>
//         </li>
//     ))
//     return(
//         <>
//         <h1 className='text-secondary p-5  fst-italic'>This is Milk.jsx file </h1>
//         <ol> {finalitems}</ol>
//         </>
//     )
// }
// export default Milk;

import { useDispatch, useSelector } from "react-redux";
import { addtoCart } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";

function Milk() { 
    const dispatch = useDispatch();
    const MilkItems = useSelector(state => state.products.Milk);

    return (
        <div className="container mt-5">
            <h1 className="text-secondary text-center p-3 fst-italic">
                This is the Milk Section
            </h1>

            <div className="row">
                {MilkItems.map((item, index) => (
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
                                <p className="card-text fw-bold text-success">₹{item.price.toFixed(2)}</p>
                                <button
                                    className="btn btn-warning"
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

export default Milk;