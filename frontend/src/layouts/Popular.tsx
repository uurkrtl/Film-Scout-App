import TheMovieDbService from "../services/TheMovieDbService.ts";
import {useEffect, useState} from "react";
import {Movie} from "../types/Movie.ts";
import {Tab, TabPane} from "semantic-ui-react";
import CustomCard from "./CustomCard.tsx";
import CustomTvSerieCard from "./CustomTvSerieCard.tsx";
import {TvSerie} from "../types/TvSerie.ts";


function Popular() {
    const theMovieDbService = new TheMovieDbService();
    const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
    const [popularTvSeries, setPopularTvSeries] = useState<TvSerie[]>([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState<string>('');

    useEffect(() => {
        theMovieDbService.getPopularMovies()
            .then((response) => {
                setPopularMovies(response.data);
                setLoading(false);
                setErrorMessage('');
            })
            .catch(error => {
                setErrorMessage(`Error while fetching movies: ${error.message}`);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        theMovieDbService.getPopularTvSeries()
            .then((response) => {
                setPopularTvSeries(response.data);
                setLoading(false);
                setErrorMessage('');
            })
            .catch(error => {
                setErrorMessage(`Error while fetching series: ${error.message}`);
                setLoading(false);
            });
    }, []);

    const panes = [
        {
            menuItem: 'Filme',
            render: () => <TabPane attached={false}><CustomCard movies={popularMovies}/></TabPane>,
        },
        {
            menuItem: 'Serien',
            render: () => <TabPane attached={false}><CustomTvSerieCard tvSeries={popularTvSeries}/></TabPane>,
        },
    ]

    if (loading) {
        return <div className={'container'}>
            <div className={'spinner-border text-primary mt-3'}>
                <span className={'visually-hidden'}></span>
            </div>
            <h5>Wird geladen...</h5>
        </div>;
    }

    return (
        <div className='mt-5'>
            <h3>Beliebt</h3>
            <Tab menu={{secondary: true, pointing: true}} panes={panes}/>

            {errorMessage && (
                <div className="alert alert-danger" role="alert">
                    {errorMessage}
                </div>
            )}
        </div>
    );
}

export default Popular;