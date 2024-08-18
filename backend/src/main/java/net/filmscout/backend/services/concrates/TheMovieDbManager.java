package net.filmscout.backend.services.concrates;

import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import net.filmscout.backend.models.Movie;
import net.filmscout.backend.models.enums.TimeWindow;
import net.filmscout.backend.services.abstracts.TheMovieDbService;
import net.filmscout.backend.services.dtos.json.TrendingMoviesJsonResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.webjars.NotFoundException;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.List;

@Service
public class TheMovieDbManager implements TheMovieDbService {
    private static final String API_TRENDING_MOVIES_URL = "https://api.themoviedb.org/3/trending/movie/%s?language=de-DE";

    @Value("${themoviedb.api-key}")
    private String apiKey;

    @Override
    public List<Movie> getTrendingMovies(TimeWindow timeWindow) {
        String apiUrlWithTimeWindow = String.format(API_TRENDING_MOVIES_URL, timeWindow.toString().toLowerCase());

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(apiUrlWithTimeWindow))
                .header("accept", "application/json")
                .header("Authorization", "Bearer " + apiKey)
                .method("GET", HttpRequest.BodyPublishers.noBody())
                .build();
        try (HttpClient client = HttpClient.newHttpClient()) {
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            if (response.statusCode() == 200) {
                String responseBody = response.body();
                ObjectMapper mapper = new ObjectMapper();
                TrendingMoviesJsonResponse trendingMoviesJsonResponse = mapper.readValue(responseBody, TrendingMoviesJsonResponse.class);
                return trendingMoviesJsonResponse.getResults();
            } else {
                throw new NotFoundException("Movie not found. Please try again. Request failed with status code: " + response.statusCode());
            }
        } catch (JsonMappingException e) {
            throw new NotFoundException("Error while mapping JSON to Movie object with exception: " + e.getMessage());
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            throw new NotFoundException("Error while sending request with exception: " + e.getMessage());
        } catch (IOException e) {
            throw new NotFoundException("Error while sending request with exception: " + e.getMessage());
        }
    }
}
