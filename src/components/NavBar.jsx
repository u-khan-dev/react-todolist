const NavBar = () => {
    return (
        <header className="w-screen bg-slate-600 h-12 
            flex items-center justify-between px-3 fixed top-0">
            <nav className="text-white flex">
                <ul className="list-none flex">
                    <li className="mr-6"> <a href="/"> Home </a></li>
                    <li className="mr-6"> <a href="/"> Inspiration </a></li>
                    <li> <a href="/"> About </a></li>
                </ul>
            </nav>

            <span className="flex text-white">
                <a href="/" className="mr-6"> Umar </a>
                <a href="/"> Sign out </a>
            </span>
        </header>
    );
};

export default NavBar;