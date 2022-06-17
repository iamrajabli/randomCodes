export default function MovieList(props) {
    return(
        <div className="row">
        {props.movies.map((movie) => (
            <div className="col-4" key={movie.id}>
                <div className="card mb-4 shadow-sm">
                    <img src={movie.imageURL} alt="Sample Movie" className="card-img-top" />
                    <div className="card-body">
                        <div className="card-title">{movie.name}</div>
                        <p className="card-text">{movie.overview}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <button className="btn btn-md btn-outline-danger" onClick={() => props.deleteProps(movie)}>Delete</button>
                            <h2><span className="badge badge-info text-dark">{movie.rating}</span></h2>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
    );
};