export default function SearchBar(props) {
    return (
        <form className="mt-5" >
            <div className="form-row mb-5">
                <div className="col-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search a movie"
                        onChange={e => props.searchMovieProps(e.target.value)}
                    />
                </div>
            </div>
        </form>
    );
}