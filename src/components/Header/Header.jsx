const Header = () => {
    return (
        <header className="container mx-auto mt-12 mb-24">
            <nav className="mb-12">
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><input type="text" className="grow text-[#150B2BB3] border" placeholder="Search" /></li>
                                <li><a>Home</a></li>
                                <li><a>Recipes</a></li>
                                <li><a>About</a></li>
                                <li><a>Search</a></li>
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-[32px] font-bold text-[#8BC34A]">Flavor <span className="text-[#FF9800]">Fusion</span></a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-[#150B2BB3]">
                            <li><a>Home</a></li>
                            <li><a>Recipes</a></li>
                            <li><a>About</a></li>
                            <li><a>Search</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end gap-6">
                        <label className="input input-bordered lg:flex hidden items-center gap-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                            <input type="text" className="grow text-[#150B2BB3]" placeholder="Search" />
                        </label>
                        <button className="btn btn-circle btn-outline bg-[#0BE58A] border-none">
                            <i className="fa-regular fa-circle-user text-3xl"></i>
                        </button>
                    </div>
                </div>
            </nav>
            <banner>
                <div className="relative flex items-center justify-center">
                    <img className="w-full max-h-screen rounded-3xl brightness-75" src="https://i.ibb.co/567nLbX/image-44.png" alt="" />
                    <div className="absolute text-white text-center px-9 lg:px-44">
                        <h1 className="text-[52px] font-bold mb-1 lg:mb-6">Discover an exceptional cuisine tailored for you!</h1>
                        <p className="text-base lg:text-lg mb-1 lg:mb-10">Experience delicious western cuisine at Flavor Fusion. We use only the freshest ingredients to create dishes that will tantalize your taste buds.</p>
                        <div>
                            <button className="bg-[#0BE58A] border-none rounded-full text-xl font-semibold px-8 py-5 text-black mr-8 hover:bg-slate-100">Explore Now</button>
                            <button className="border rounded-full text-xl font-semibold px-8 py-5 hover:bg-[#0BE58A]">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </banner>
        </header>
    );
};

export default Header;