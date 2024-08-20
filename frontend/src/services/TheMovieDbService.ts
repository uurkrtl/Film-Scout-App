import axios from 'axios';

export default class TheMovieDbService {
    getTrendingMovies(timeWindow: string) {
        return axios.get(`api/themoviedb/trending-movies/${timeWindow}`);
    }

    getPopularMovies() {
        return axios.get('api/themoviedb/popular-movies');
    }

    getTrendingTvSeries(timeWindow: string) {
        return axios.get(`api/themoviedb/trending-tv-series/${timeWindow}`);
    }

    getPopularTvSeries() {
        return axios.get('api/themoviedb/popular-tv-series');
    }
}