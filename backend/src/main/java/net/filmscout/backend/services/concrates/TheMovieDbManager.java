package net.filmscout.backend.services.concrates;

import lombok.RequiredArgsConstructor;
import net.filmscout.backend.models.Movie;
import net.filmscout.backend.models.TvSerie;
import net.filmscout.backend.models.enums.TimeWindow;
import net.filmscout.backend.services.abstracts.TheMovieDbService;
import net.filmscout.backend.services.rules.TheMovieDbBusinessRule;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TheMovieDbManager implements TheMovieDbService {
    private final TheMovieDbBusinessRule theMovieDbBusinessRule;

    @Override
    public List<Movie> getTrendingMovies(TimeWindow timeWindow, Integer limit) {
        final String url = String.format("/trending/movie/%s?language=de-DE", timeWindow.toString().toLowerCase());
        return theMovieDbBusinessRule.fetchMovieList(url).stream().limit(limit).toList();
    }

    @Override
    public List<Movie> getPopularMovies(Integer limit) {
        final String url = "/movie/popular?language=de-DE&page=1&region=DE";
        return theMovieDbBusinessRule.fetchMovieList(url).stream().limit(limit).toList();
    }

    @Override
    public List<Movie> getUpcomingMovies(Integer limit) {
        final String url = "/movie/upcoming?language=de-DE&page=1&region=DE";
        return theMovieDbBusinessRule.fetchMovieList(url).stream().limit(limit).toList();
    }

    @Override
    public List<TvSerie> getTrendingTvSeries(TimeWindow timeWindow, Integer limit) {
        final String url = String.format("/trending/tv/%s?language=de-DE", timeWindow.toString().toLowerCase());
        return theMovieDbBusinessRule.fetchTvSerieList(url).stream().limit(limit).toList();
    }

    @Override
    public List<TvSerie> getPopularTvSeries(Integer limit) {
        final String url = "/tv/popular?language=de-DE&page=1";
        return theMovieDbBusinessRule.fetchTvSerieList(url).stream().limit(limit).toList();
    }
}
