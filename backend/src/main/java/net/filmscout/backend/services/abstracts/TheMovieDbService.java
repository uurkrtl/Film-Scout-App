package net.filmscout.backend.services.abstracts;

import net.filmscout.backend.models.Movie;
import net.filmscout.backend.models.enums.TimeWindow;

import java.util.List;

public interface TheMovieDbService {
    List<Movie> getTrendingMovies(TimeWindow timeWindow);
}
