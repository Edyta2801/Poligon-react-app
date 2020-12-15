import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function Movie() {
    const { movieID } = useParams();
    const [movie, setMovie] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [hasError, setError] = useState(false);

    useEffect(() => {
        fetch(`https://srapi.herokuapp.com/v1/movies/${movieID}`)
            .then((response) => response.json())
            .then((data) => {
                setMovie(data);
                setLoading(false);
            })
            .catch((error) => setError(true));
    }, [movieID]);


    return (
        <div className='Movies'>
            {isLoading && <p>Loading...</p>}
            {hasError && <p>An error has occured</p>}
            <div className='Movie'>
                <h2>{movie && movie.title}</h2>
                <p>{movie && movie.description}</p>
            </div>
        </div>
    );
}

export default Movie;