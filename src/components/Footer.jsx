import footerLogo from '../assets/footer-logo.png';

const Footer = () => {
	return (
		<footer>
			<div className="container" style={{ backgroundColor: '#202A40' }}>
				<div className="row">
					<div className="brief-info col-lg-4 col-md-12 col-sm-12">
						<img loading="lazy" src={footerLogo} alt="white logo" width="200" />
						<p>
							Every college works on the efforts that its student masses put in
							it to make the college for the students, of the students, and by
							the students. The LNMIIT Students' Gymkhana, under the Director of
							the Institute's patronage, acts as a communication service and
							facilitates decision-making in the greater interest of the
							students on The LNMIIT.
						</p>
					</div>
					{/* <div className="link-section row col-lg-4 col-md-12 col-sm-12">
						<div className="links col-lg-6 col-md-6 col-sm-6 col-xs-6">
							<h6 className="text-uppercase">Important Links</h6>
							<ul className="list-unstyled mb-0">
								{/* <li>
									<a
										href="https://www.iitp.ac.in/index.php/services-amenities/guest-houses"
										id="text-dark"
									>
										Guest Houses
									</a>
								</li> 
								 <li>
									<a
										href="https://sites.google.com/view/health-center-iit-patna/home"
										id="text-dark"
									>
										Medical Unit
									</a>
								</li> 
								<li>
									<a href="https://www.iitp.ac.in/placement/" id="text-dark">
										TPC
									</a>
								</li>
								{/* <li>
									<a
										href="https://www.iitp.ac.in/index.php/students/student-activity-center"
										id="text-dark"
									>
										SAC
									</a>
								</li>
								<li>
									<a href="http://www.eclubiitp.org/" id="text-dark">
										Entrepreneurship
									</a>
								</li>
							</ul>
						</div>
					</div> */}
					{/* <div className="link-section row col-lg-4 col-md-12 col-sm-12">
						<div className="links col-lg-6 col-md-6 col-sm-6 col-xs-6">
							<h6 className="text-uppercase">Quick Links</h6>
							<ul className="list-unstyled mb-0">
								<li>
									<a href="https://lnmiit.ac.in/" id="text-dark">
										LNMIIT Jaipur
									</a>
								</li>
								<li>
									<a href="https://www.iitp.ac.in/hostel" id="text-dark">
										Hostels
									</a>
								</li>
								<li>
									<a
										href="https://www.iitp.ac.in/hostel/reachIITP.html"
										id="text-dark"
									>
										Reaching LNMIIT
									</a>
								</li>
								<li>
									<a href="teams.html" id="text-dark">
										Office Bearers
									</a>
								</li>
							</ul>
						</div>
					</div> */}
					<div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
						<div id="map">
							<h6 className="text-uppercase">Visit Our Campus</h6>
							<iframe
								loading="lazy"
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.3019895446077!2d75.92375531511429!3d26.935497683114406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6a014d78e8d%3A0x845c0d66db6be4f5!2sThe%20LNM%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2sin!4v1697368003981"
								width="350px"
								height="300px"
								style={{ borderRadius: '5px' }}
								allowFullScreen
							></iframe>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="social-icons col-lg-4 col-md-12 col-sm-12">
						<h5>Follow Us!</h5>
						<ul className="social-network social-circle">
							<li>
								<a
									href="https://www.facebook.com/LNMIIT.official/"
									title="Facebook"
								>
									<i className="fa fa-facebook"></i>
								</a>
							</li>
							<li>
								<a
									href="https://www.instagram.com/lnmiit_official/"
									title="Instagram"
								>
									<i className="fa fa-instagram"></i>
								</a>
							</li>
							<li>
								<a href="https://x.com/lnmiit_official" title="Twitter">
									<i className="fa fa-twitter"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="copyright-text row">
					<div className="credits col-sm-12">
						<span style={{ fontWeight: '100' }}>
							&copy; Copyright Students' Gymkhana, LNMIIT Jaipur
						</span>
						<span>Developed with ❤️ by Team</span>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
