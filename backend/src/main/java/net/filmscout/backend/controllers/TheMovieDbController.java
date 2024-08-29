package net.filmscout.backend.controllers;

import lombok.RequiredArgsConstructor;
import net.filmscout.backend.models.Movie;
import net.filmscout.backend.models.TvSerie;
import net.filmscout.backend.models.enums.TimeWindow;
import net.filmscout.backend.services.abstracts.TheMovieDbService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/themoviedb")
@RequiredArgsConstructor
public class TheMovieDbController {
    private final TheMovieDbService theMovieDbService;

    @GetMapping("/trending-movies/{timeWindow}")
    public List<Movie> getTrendingMovies(@PathVariable String timeWindow, @RequestParam(defaultValue = "8") Integer limit) {
        return theMovieDbService.getTrendingMovies(TimeWindow.valueOf(timeWindow), limit);
    }

    @GetMapping("/popular-movies")
    public List<Movie> getPopularMovies(@RequestParam(defaultValue = "8") Integer limit) {
        return theMovieDbService.getPopularMovies(limit);
    }

    @GetMapping("/upcoming-movies")
    public List<Movie> getUpcomingMovies(@RequestParam(defaultValue = "8") Integer limit) {
        return theMovieDbService.getUpcomingMovies(limit);
    }

    @GetMapping("/trending-tv-series/{timeWindow}")
    public List<TvSerie> getTrendingTvSeries(@PathVariable String timeWindow, @RequestParam(defaultValue = "8") Integer limit) {
        return theMovieDbService.getTrendingTvSeries(TimeWindow.valueOf(timeWindow), limit);
    }

    @GetMapping("/popular-tv-series")
    public List<TvSerie> getPopularTvSeries(@RequestParam(defaultValue = "8") Integer limit) {
        return theMovieDbService.getPopularTvSeries(limit);
    }

    @GetMapping("/on-the-air-tv-series")
    public List<TvSerie> getOnTheAirTvSeries(@RequestParam(defaultValue = "8") Integer limit) {
        return theMovieDbService.getOnTheAirTvSeries(limit);
    }

    @GetMapping("/airing-today-tv-series")
    public List<TvSerie> getAiringTodayTvSeries(@RequestParam(defaultValue = "8") Integer limit) {
        return theMovieDbService.getAiringTodayTvSeries(limit);
    }
}
