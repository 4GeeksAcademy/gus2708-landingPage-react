import React from 'react'

const Navbar = () => {
    return (
        <div className="container" bis_skin_checked={1}>
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4">
                <ul className="nav nav-pills">
                    <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Album</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Footer</a></li>
                </ul>
            </header>
        </div>

    );
};

export default Navbar