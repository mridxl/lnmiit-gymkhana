import Header from '../components/Header';
import Hero from '../components/Hero';
import MyMain from '../components/MyMain';
import About from '../components/About';
import Clubs from '../components/Clubs';
import Events from '../components/Events';
import Footer from '../components/Footer';

const Home = () => {
	return (
		<>
			{/*  Page Preloder */}
			<div id="preloder">
				<div className="loader"></div>
			</div>

			<Header />
			<Hero />

			{/* main section */}
			<MyMain>
				<About />
				<Clubs />
				<Events />
			</MyMain>

			{/* Footer */}
			<Footer />
		</>
	);
};

export default Home;
