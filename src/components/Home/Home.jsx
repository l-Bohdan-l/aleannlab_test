import { Link, Outlet } from "react-router-dom";

export function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/job-board">to Job Board</Link>
            <Outlet/>
        </div>
    )
}