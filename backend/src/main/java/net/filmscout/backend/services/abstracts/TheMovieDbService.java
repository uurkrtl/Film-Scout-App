package net.filmscout.backend.services.abstracts;

import net.filmscout.backend.models.Movie;
import net.filmscout.backend.models.TvSerie;
import net.filmscout.backend.models.enums.TimeWindow;

import java.util.List;

public interface TheMovieDbService {
    List<Movie> getTrendingMovies(TimeWindow timeWindow, Integer limit);
    List<Movie> getPopularMovies(Integer limit);
    List<Movie> getUpcomingMovies(Integer limit);
    List<TvSerie> getTrendingTvSeries(TimeWindow timeWindow, Integer limit);
    List<TvSerie> getPopularTvSeries(Integer limit);
    List<TvSerie> getOnTheAirTvSeries(Integer limit);
    List<TvSerie> getAiringTodayTvSeries(Integer limit);
}
