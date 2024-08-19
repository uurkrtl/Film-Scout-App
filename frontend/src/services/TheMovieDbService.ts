import axios from 'axios';

export default class TheMovieDbService {
    getTrendingMovies(timeWindow: string) {
        return axios.get(`api/themoviedb/trending-movies/${timeWindow}`);
    }
}