import {Card, CardContent, CardDescription, CardHeader, CardMeta, Icon, Image} from "semantic-ui-react";
import {Link} from "react-router-dom";

function CustomCard() {
    return (
        <div className="album py-1 bg-body-tertiary">
            <div className="container">

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-1">

                    <div className="col mt-3">
                        <Card>
                            <Image src='https://image.tmdb.org/t/p/original/5CbffFFWkSEQs0xZnVBCClYFa8D.jpg' wrapped
                                   ui={false}/>
                            <CardContent>
                                <CardHeader><Link to=''>The Union</Link></CardHeader>
                                <CardMeta>26. Apr 2013</CardMeta>
                                <CardDescription>
                                    <Icon name='star' color='yellow' disabled/> 8.7
                                </CardDescription>

                            </CardContent>
                        </Card>
                    </div>

                </div>
            </div>
        </div>
    )
        ;
}

export default CustomCard;