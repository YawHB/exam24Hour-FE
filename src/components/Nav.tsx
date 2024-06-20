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
                        <NavLink to="profile">Profile</NavLink>
                    </div>
                </nav>
            </header>
        </>
    );
}
