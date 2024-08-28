import axios from 'axios';

export default class TheMovieDbService {
    getTrendingMovies(timeWindow: string, limit = 8) {
        return axios.get(`/api/themoviedb/trending-movies/${timeWindow}`, {
            params: {
                limit: limit
            }
        });
    }

    getPopularMovies(limit = 8) {
        return axios.get('/api/themoviedb/popular-movies', {
            params: {
                limit: limit
            }
        });
    }

    getUpcomingMovies(limit = 8) {
        return axios.get('/api/themoviedb/upcoming-movies', {
            params: {
                limit: limit
            }
        });
    }

    getTrendingTvSeries(timeWindow: string, limit = 8) {
        return axios.get(`/api/themoviedb/trending-tv-series/${timeWindow}`, {
            params: {
                limit: limit
            }
        });
    }

    getPopularTvSeries(limit = 8) {
        return axios.get('/api/themoviedb/popular-tv-series', {
            params: {
                limit: limit
            }
        });
    }

    getOnTheAirTvSeries(limit = 8) {
        return axios.get('/api/themoviedb/on-the-air-tv-series', {
            params: {
                limit: limit
            }
        });
    }
}