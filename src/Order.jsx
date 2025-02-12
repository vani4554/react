//  import { useSelector } from "react-redux";
// function Order()
// {

//     const purchaseHistory=useSelector((state)=>state.purchaseDetails);
//     let finalData=purchaseHistory.map((purchase,index)=>(
//                     <li key={index}>
//                             <p>Date:{purchase.date}</p>
//                             <p>Total Amount:${purchase.totalprice.toFixed(2)}</p>
//                         <ul>
//                             {purchase.items.map((item,itemIndex)=>(
//                                 <li key={itemIndex}>
//                                     {item.name}-${item.price}*{item.quantity}
//                                 </li>
//                             ) 
//                             ) }
//                         </ul>
//                     </li>
//     ))
//     return(
//         <>
//             <h2 className='text-success p-3  fst-italic'>Purchase History</h2>
//             {
//             purchaseHistory.length===0?(
//                 <p className='text-success p-2 fst-italic fs-5 fst-bold'>No Purchase history Available...</p>
//             ) : (
//                 <ul>{finalData}</ul>
//             )
//             }
        
//         </>
//     );
// }

// export default Order;

import { useSelector } from "react-redux";

function Order() {
    const purchaseHistory = useSelector((state) => state.purchaseDetails);

    return (
        <div className="container mt-4">
            <h2 className="text-success p-3 fst-italic text-center">Purchase History</h2>

            {purchaseHistory.length === 0 ? (
                <p className="alert alert-warning text-center fs-5">No Purchase History Available...</p>
            ) : (
                <div className="row justify-content-center">
                    {purchaseHistory.map((purchase, index) => (
                        <div key={index} className="col-md-6 mb-4">
                            <div className="card shadow-lg">
                                <div className="card-header bg-primary text-white">
                                    <strong>Order Date: {purchase.date}</strong>
                                </div>
                                <div className="card-body">
                                    <p className="text-danger fs-5">
                                        Total Amount: <strong>${purchase.totalprice.toFixed(2)}</strong>
                                    </p>
                                    <ul className="list-group">
                                        {purchase.items.map((item, itemIndex) => (
                                            <li key={itemIndex} className="list-group-item d-flex justify-content-between">
                                                <span>{item.name}</span>
                                                <span className="fw-bold text-success">
                                                    ${item.price} × {item.quantity}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Order;