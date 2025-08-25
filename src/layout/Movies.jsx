import {Movie} from './Movie'

function Movies(props) {
    
    return <div className="movies">
        {
            props.loading ? <h3>Content loading...</h3> : (
                props.movies.movies.Search.map(movie => {
                    return <Movie key={movie.imdbID} {...movie}/>
                })
            )
        }
    </div>
}

export {Movies};