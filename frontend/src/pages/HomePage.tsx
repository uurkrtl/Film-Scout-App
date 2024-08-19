import {TabPane, Tab} from 'semantic-ui-react'
import CustomCard from "../layouts/CustomCard.tsx";
import TheMovieDbService from "../services/TheMovieDbService.ts";
import {useEffect, useState} from "react";
import {Movie} from "../types/Movie.ts";

function HomePage() {
    const theMovieDbService = new TheMovieDbService();
    const [trendingMoviesDay, setTrendingMoviesDay] = useState<Movie[]>([]);
    const [trendingMoviesWeek, setTrendingMoviesWeek] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState<string>('');

    useEffect(() => {
        theMovieDbService.getTrendingMovies('DAY')
            .then((response) => {
                setTrendingMoviesDay(response.data);
                setLoading(false);
                setErrorMessage('');
        })
            .catch(error => {
            setErrorMessage(`Error while fetching movies: ${error.message}`);
            setLoading(false);
        });
    });

    useEffect(() => {
        theMovieDbService.getTrendingMovies('WEEK')
            .then((response) => {
                setTrendingMoviesWeek(response.data);
                setLoading(false);
                setErrorMessage('');
            })
            .catch(error => {
                setErrorMessage(`Error while fetching movies: ${error.message}`);
                setLoading(false);
            });
    });

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
        return <div className={'container mt-3'}>
            <div className={'spinner-border text-primary'}>
                <span className={'visually-hidden'}></span>
            </div>
            <h5>Wird geledan...</h5>
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

export default HomePage;