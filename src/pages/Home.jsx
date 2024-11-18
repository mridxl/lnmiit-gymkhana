import Header from '../components/Header';
import Hero from '../components/Hero';
import MyMain from '../components/MyMain';
import About from '../components/About';
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
			</MyMain>

			{/* Footer */}
			<Footer />
		</>
	);
};

export default Home;
