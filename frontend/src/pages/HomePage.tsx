import Popular from "../layouts/Popular.tsx";
import TrendingTvSerie from "../layouts/TrendingTvSerie.tsx";
import TrendingMovies from "../layouts/TrendingMovies.tsx";

function HomePage() {

    return (
        <div className='text-center container'>
            {<TrendingMovies />}
            {<Popular />}
            {<TrendingTvSerie />}
        </div>
    );
}

export default HomePage;