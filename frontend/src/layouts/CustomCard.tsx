import {Card, CardContent, CardDescription, CardHeader, CardMeta, Icon, Image} from "semantic-ui-react";
import {Link} from "react-router-dom";
import {Movie} from "../types/Movie.ts";

function CustomCard({movies}: Readonly<{ movies: Movie[] }>) {
    const basePosterUrl = 'https://image.tmdb.org/t/p/original';

    const formatDate = (dateString: string) => {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const date = new Date(dateString);
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        return `${day}. ${month} ${year}`;
    };

    const truncateText = (text: string, maxLength: number) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength - 3) + '...';
        }
        return text;
    };

    return (
        <div className="album py-1 bg-body-tertiary">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-1">
                    {movies.map((movie) => (
                        <div className="col mt-3" key={movie.id}>
                            <Card>
                                <Image src={`${basePosterUrl}${movie.poster_path}`} wrapped
                                       ui={false}/>
                                <CardContent>
                                    <CardHeader><Link to=''>{truncateText(movie.title, 30)}</Link></CardHeader>
                                    <CardMeta>{movie.release_date ? formatDate(movie.release_date) : '-'}</CardMeta>
                                    <CardDescription>
                                        <Icon name='star' color='yellow' disabled/>
                                        {movie.vote_average ? movie.vote_average.toFixed(1) : '-'} (
                                        {movie.vote_count ? movie.vote_count.toLocaleString('de-DE') : '-'})
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CustomCard;