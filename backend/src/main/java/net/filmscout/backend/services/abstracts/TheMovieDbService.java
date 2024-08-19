package net.filmscout.backend.services.abstracts;

import net.filmscout.backend.models.Movie;
import net.filmscout.backend.models.TvSerie;
import net.filmscout.backend.models.enums.TimeWindow;

import java.util.List;

public interface TheMovieDbService {
    List<Movie> getTrendingMovies(TimeWindow timeWindow);
    List<Movie> getPopularMovies();
    List<TvSerie> getTrendingTvSeries(TimeWindow timeWindow);
}
