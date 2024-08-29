import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage.tsx";
import Navbar from "./Navbar.tsx";
import Footer from "./Footer.tsx";
import UpcomingMovie from "../pages/UpcomingMovie.tsx";
import AiringTodayTvSerie from "../pages/TvSeriesList.tsx";

function Dashboard() {
    return (
        <>
            <Navbar/>
            <div className='mt-5'>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/movies/upcoming' element={<UpcomingMovie/>}/>
                    <Route path='/movie-serie/:url' element={<AiringTodayTvSerie/>}/>
                </Routes>
            </div>
            <Footer/>
        </>
    );
}

export default Dashboard;