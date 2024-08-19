import {TvSerie} from "../types/TvSerie.ts";
import {Card, CardContent, CardDescription, CardHeader, CardMeta, Icon, Image} from "semantic-ui-react";
import {Link} from "react-router-dom";

function CustomTvSerieCard({tvSeries}: Readonly<{ tvSeries: TvSerie[] }>) {
    const basePosterUrl = 'https://image.tmdb.org/t/p/original';

    const truncateText = (text: string, maxLength: number) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength - 3) + '...';
        }
        return text;
    };

    const formatDate = (dateString: string) => {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const date = new Date(dateString);
        const month = months[date.getMonth()];
        const day = date.getDate();
        const year = date.getFullYear();
        return `${day}. ${month} ${year}`;
    };

    return (
        <div className="album py-1 bg-body-tertiary">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-1">
                    {tvSeries.map((tvSerie) => (
                        <div className="col mt-3" key={tvSerie.id}>
                            <Card>
                                <Image src={`${basePosterUrl}${tvSerie.poster_path}`} wrapped ui={false}/>
                                <CardContent>
                                    <CardHeader><Link to=''>{truncateText(tvSerie.name, 30)}</Link></CardHeader>
                                    <CardMeta>{tvSerie.first_air_date ? formatDate(tvSerie.first_air_date) : '-'}</CardMeta>
                                    <CardDescription>
                                        <Icon name='star' color='yellow' disabled/>
                                        {tvSerie.vote_average ? tvSerie.vote_average.toFixed(1) : '-'} (
                                        {tvSerie.vote_count ? tvSerie.vote_count.toLocaleString('de-DE') : '-'})
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

export default CustomTvSerieCard;