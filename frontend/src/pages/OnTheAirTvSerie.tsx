import TheMovieDbService from "../services/TheMovieDbService.ts";
import {useEffect, useState} from "react";
import {TvSerie} from "../types/TvSerie.ts";
import CustomTvSerieCard from "../layouts/CustomTvSerieCard.tsx";

function UpcomingMovie() {
    const theMovieDbService = new TheMovieDbService();
    const [onTheAirTvSeries, setOnTheAirTvSeries] = useState<TvSerie[]>([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState<string>('');

    useEffect(() => {
        theMovieDbService.getOnTheAirTvSeries(32)
            .then((response) => {
                if (Array.isArray(response.data)) {
                    setOnTheAirTvSeries(response.data);
                    setErrorMessage('');
                    setLoading(false);
                } else {
                    setOnTheAirTvSeries([]);
                    setLoading(false);
                    setErrorMessage('Unexpected response format');
                }
            })
            .catch(error => {
                setLoading(false);
                setErrorMessage(`Error while fetching series: ${error.message}`);
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
            <h1>Momentan ausgestrahlte Serien</h1>
            <CustomTvSerieCard tvSeries={onTheAirTvSeries}/>

            {errorMessage && (
                <div className="alert alert-danger" role="alert">
                    {errorMessage}
                </div>
            )}
        </div>
    );
}

export default UpcomingMovie;