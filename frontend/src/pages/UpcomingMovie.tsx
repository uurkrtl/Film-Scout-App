import TheMovieDbService from "../services/TheMovieDbService.ts";
import {useEffect, useState} from "react";
import {Movie} from "../types/Movie.ts";
import CustomCard from "../layouts/CustomCard.tsx";

function UpcomingMovie() {
    const theMovieDbService = new TheMovieDbService();
    const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        theMovieDbService.getUpcomingMovies(32)
            .then((response) => {
                if (Array.isArray(response.data)) {
                    setUpcomingMovies(response.data);
                    setLoading(false);
                    setErrorMessage('');
                } else {
                    setUpcomingMovies([]);
                    setErrorMessage('Unexpected response format');
                    setLoading(false);
                    console.log(response.data);
                }
            })
            .catch(error => {
                setErrorMessage(`Error while fetching movies: ${error.message}`);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className={'container'}>
            <div className={'spinner-border text-primary mt-3'}>
                <span className={'visually-hidden'}></span>
            </div>
            <h5>Wird geladen...</h5>
        </div>;
    }

    return (
        <div className='py-5 text-center container'>
            <h1>Kommende Filme</h1>
            <CustomCard movies={upcomingMovies}/>

            {errorMessage && (
                <div className="alert alert-danger" role="alert">
                    {errorMessage}
                </div>
            )}
        </div>
    );
}

export default UpcomingMovie;