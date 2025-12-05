import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Album from "./Album";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
			<div>
				<Navbar />
				<Jumbotron />
				<Album />
				<Footer />
			</div>
	);
};

export default Home;