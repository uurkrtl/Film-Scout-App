import TheMovieDbService from "../services/TheMovieDbService.ts";
import {useEffect, useState} from "react";
import {Tab, TabPane} from "semantic-ui-react";
import CustomTvSerieCard from "./CustomTvSerieCard.tsx";
import {TvSerie} from "../types/TvSerie.ts";

function TrendingTvSerie() {
    const theMovieDbService = new TheMovieDbService();
    const [trendingTvSeriesDay, setTrendingTvSeriesDay] = useState<TvSerie[]>([]);
    const [trendingTvSeriesWeek, setTrendingTvSeriesWeek] = useState<TvSerie[]>([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState<string>('');

    useEffect(() => {
        theMovieDbService.getTrendingTvSeries('DAY')
            .then((response) => {
                setTrendingTvSeriesDay(response.data);
                setLoading(false);
                setErrorMessage('');
            })
            .catch(error => {
                setErrorMessage(`Error while fetching movies: ${error.message}`);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        theMovieDbService.getTrendingTvSeries('WEEK')
            .then((response) => {
                setTrendingTvSeriesWeek(response.data);
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
            render: () => <TabPane attached={false}><CustomTvSerieCard tvSeries={trendingTvSeriesDay}/></TabPane>,
        },
        {
            menuItem: 'Diese Woche',
            render: () => <TabPane attached={false}><CustomTvSerieCard tvSeries={trendingTvSeriesWeek}/></TabPane>,
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
            <h3>Trendserien</h3>
            <Tab menu={{secondary: true, pointing: true}} panes={panes}/>

            {errorMessage && (
                <div className="alert alert-danger" role="alert">
                    {errorMessage}
                </div>
            )}
        </div>
    );
}

export default TrendingTvSerie;