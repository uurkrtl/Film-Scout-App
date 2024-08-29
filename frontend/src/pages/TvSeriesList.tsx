import TheMovieDbService from "../services/TheMovieDbService.ts";
import {useEffect, useState} from "react";
import {TvSerie} from "../types/TvSerie.ts";
import CustomTvSerieCard from "../layouts/CustomTvSerieCard.tsx";
import {useParams} from "react-router-dom";

function UpcomingMovie() {
    const theMovieDbService = new TheMovieDbService();
    const [airingTodayTvSeries, setAiringTodayTvSeries] = useState<TvSerie[]>([]);
    const [title, setTitle] = useState<string>('');
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const { url = '' } = useParams<string>();

    useEffect(() => {
        switch (url) {
            case 'airing-today-tv-series':
                setTitle('Heute ausgestrahlte Serien');
                break;
            case 'on-the-air-tv-series':
                setTitle('Momentan ausgestrahlte Serien');
                break;
            default:
                setTitle('Serien');
        }
    }, [url]);

    useEffect(() => {
        theMovieDbService.getResponse(url, 32)
            .then((response) => {
                if (Array.isArray(response.data)) {
                    setAiringTodayTvSeries(response.data);
                    setErrorMessage('');
                    setLoading(false);
                } else {
                    setAiringTodayTvSeries([]);
                    setLoading(false);
                    setErrorMessage('Unexpected response format');
                }
            })
            .catch(error => {
                setLoading(false);
                setErrorMessage(`Error while fetching series: ${error.message}`);
            });
    }, [url]);

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
            <h1>{title}</h1>
            <CustomTvSerieCard tvSeries={airingTodayTvSeries}/>

            {errorMessage && (
                <div className="alert alert-danger" role="alert">
                    {errorMessage}
                </div>
            )}
        </div>
    );
}

export default UpcomingMovie;