import { NavLink } from 'react-router-dom';

export default function Nav() {
    return (
        <>
            <header className="bg-blue-gray-300 p-4">
                <nav className="flex justify-evenly">
                    <div>
                        <NavLink to="/">Home</NavLink>
                    </div>
                    <div>
                        <NavLink to="athletes">Athletes</NavLink>
                    </div>
                    <div>
                        <NavLink to="athlete-details">Athlete Details</NavLink>
                    </div>
                    <div>
                        <NavLink to="results">Resultat Oversigt</NavLink>
                    </div>
                    <div>
                        <NavLink to="disciplines">Disciplin Oversigt</NavLink>
                    </div>
                </nav>
            </header>
        </>
    );
}
