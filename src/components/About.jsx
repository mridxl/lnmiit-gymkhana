const About = () => {
	return (
		<section id="about" className="pt100 pb50">
			{/* <div className="container" style={{ maxWidth: '1279px' }}> */}
			<div className="p-lg-5" style={{ flex: 'auto' }}>
				<h2
					className="sp-title"
					style={{ fontSize: '42px', marginBottom: 0, textAlign: 'left' }}
				>
					About Us
				</h2>
				<div
					style={{
						height: '2px',
						backgroundColor: '#e6e6e6',
						marginBottom: '2%',
					}}
				></div>
				<p>
					The Students' Gymkhana is the students' government organization of The
					LNMIIT, Jaipur. Established in 2006, the Gymkhana seeks to cultivate
					qualities of leadership amongst students to foster a corporate life
					and to advance the general cause of the student body of the student
					body of the Institute.It aims at promoting and developing
					organizational abilities in students. It has been successful over the
					years in evolving a well-informed, articulate and participatory
					student community life. It has been instrumental in identifying
					student issues and promoting discussion on them. It functions as the
					office for all election and nominations of students for gymkhana
					activities.
				</p>
			</div>
			{/* </div> */}
		</section>
	);
};

export default About;
