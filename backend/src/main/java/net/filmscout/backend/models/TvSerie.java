package net.filmscout.backend.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class TvSerie {
    private long id;
    private String name;
    private String overview;
    @JsonProperty("poster_path")
    private String posterPath;
    @JsonProperty("genre_ids")
    private List<Long> genreIds;
    @JsonProperty("first_air_date")
    private String firstAirDate;
    @JsonProperty("vote_average")
    private double voteAverage;
    @JsonProperty("vote_count")
    private long voteCount;
    @JsonProperty("origin_country")
    private List<String> originCountries;
}
