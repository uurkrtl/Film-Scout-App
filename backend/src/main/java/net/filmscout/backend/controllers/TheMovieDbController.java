package net.filmscout.backend.controllers;

import lombok.RequiredArgsConstructor;
import net.filmscout.backend.models.Movie;
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
    public List<Movie> getTrendingMovies(@PathVariable String timeWindow) {
        return theMovieDbService.getTrendingMovies(TimeWindow.valueOf(timeWindow));
    }
}
