// function Home()
// {
//     return(
//         <>
//         <h1>This is ratan sir class</h1>
//         <h1>Home page</h1>
//         </>
//     );


// }
// export default Home;

function Home() {
    return (
        <div className="container mt-5">
            <div className="card p-5 text-center shadow-lg bg-light">
                <h1 className="text-primary">Welcome to Ratan Sir's Class</h1>
                <p className="lead text-secondary">This is the Home Page</p>

                {/* Call-to-Action Button */}
                <button className="btn btn-success mt-3">Explore Courses</button>
            </div>
        </div>
    );
}

export default Home;
