import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage.tsx";

function Dashboard() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
            </Routes>
        </div>
    );
}

export default Dashboard;