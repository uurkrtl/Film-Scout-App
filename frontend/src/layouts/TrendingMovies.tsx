import {useEffect, useState} from 'react';
import TheMovieDbService from "../services/TheMovieDbService.ts";
import {Movie} from "../types/Movie.ts";
import {Tab, TabPane} from "semantic-ui-react";
import CustomCard from "./CustomCard.tsx";

function TrendingMovies() {
    const theMovieDbService = new TheMovieDbService();
    const [trendingMoviesDay, setTrendingMoviesDay] = useState<Movie[]>([]);
    const [trendingMoviesWeek, setTrendingMoviesWeek] = useState<Movie[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        theMovieDbService.getTrendingMovies('DAY', 8)
            .then((response) => {
                setTrendingMoviesDay(response.data);
                setLoading(false);
                setErrorMessage('');
            })
            .catch(error => {
                setErrorMessage(`Error while fetching movies: ${error.message}`);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        theMovieDbService.getTrendingMovies('WEEK', 8)
            .then((response) => {
                setTrendingMoviesWeek(response.data);
                setLoading(false);
                setErrorMessage('');
            })
            .catch(error => {
                setErrorMessage(`Error while fetching movies: ${error.message}`);
                setLoading(false);
            });
    }, []);

    const panes = [
        {
            menuItem: 'Heute',
            render: () => <TabPane attached={false}><CustomCard movies={trendingMoviesDay}/></TabPane>,
        },
        {
            menuItem: 'Diese Woche',
            render: () => <TabPane attached={false}><CustomCard movies={trendingMoviesWeek}/></TabPane>,
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
        <div className='py-5 text-center container'>
            <h3>Trendfilme</h3>
            <Tab menu={{secondary: true, pointing: true}} panes={panes}/>

            {errorMessage && (
                <div className="alert alert-danger" role="alert">
                    {errorMessage}
                </div>
            )}
        </div>
    );
}

export default TrendingMovies;