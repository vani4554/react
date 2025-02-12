// function Aboutus()
// {
//     return(
//         <>
//         <h1 style={{color:"yellow"}}>This is a aboutus page</h1>
//         <h1 style={{color:"yellow"}}>This page contains all aboutus</h1>
//         </>
//     )
// }
// export default Aboutus;

function Aboutus() {
    return (
        <div className="container mt-5">
            <div className="card bg-dark text-white p-4 shadow-lg">
                <h1 className="text-warning text-center">About Us</h1>
                <p className="lead text-center">
                    Welcome to our grocery store! This page contains all the information about us.
                </p>
            </div>
        </div>
    );
}

export default Aboutus;
