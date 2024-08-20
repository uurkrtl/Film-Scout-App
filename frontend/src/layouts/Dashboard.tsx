import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage.tsx";
import Navbar from "./Navbar.tsx";

function Dashboard() {
    return (
        <>
            <Navbar/>
            <div className='mt-5'>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                </Routes>
            </div>
        </>

    );
}

export default Dashboard;