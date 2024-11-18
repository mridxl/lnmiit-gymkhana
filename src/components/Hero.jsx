import vid from '../assets/Drone_Shot.mp4';

const Hero = () => {
	return (
		<section className="hero-section" id="hero" style={{ marginTop: '10vh' }}>
			<div id="hero">
				<video loop muted autoPlay={true} preload="auto">
					<source src={vid} type="video/mp4" />
				</video>
				<div className="caption">
					<h1>Students' Gymkhana, LNMIIT Jaipur</h1>
					<h2>
						The Students' Gymkhana of LNMIIT Jaipur (established in 2006) is the
						governing council of students consisting of the elected student
						representatives working for the over-all well being and holistic
						development of students in the institute.
					</h2>
					<a href="#about" className="btn-get-started">
						Know More
					</a>
				</div>
			</div>
		</section>
	);
};

export default Hero;
