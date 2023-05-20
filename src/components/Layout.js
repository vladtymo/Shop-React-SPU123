import { Outlet } from "react-router-dom";
import { Menu } from "./Menu";

export function Layout() {
    return (
        <div className="App">
            <header>
                <h1>Hello React</h1>
                <Menu />
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    );
}