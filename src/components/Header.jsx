import { Link } from 'react-router-dom';
import logo from '../assets/gymkhana-nav-logo.png';
import { useEffect } from 'react';

const Header = () => {
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const id = entry.target.id;
						// Update active links
						document.querySelectorAll('.nav-menu a').forEach((link) => {
							if (link.href.includes(id)) {
								link.parentNode.classList.add('active');
							} else {
								link.parentNode.classList.remove('active');
							}
						});
					}
				});
			},
			{
				root: null,
				threshold: 0.6,
			}
		);

		// Observe all sections with an ID
		const sections = document.querySelectorAll('section[id]');
		sections.forEach((section) => observer.observe(section));

		// Cleanup observer on component unmount
		return () => {
			sections.forEach((section) => observer.unobserve(section));
		};
	}, []);

	return (
		<header className="header-area" id="navbar">
			<Link href="/#hero" className="logo-area">
				<img src={logo} alt="" />
			</Link>
			<div className="nav-switch">
				<i className="fa fa-bars"></i>
			</div>

			<nav className="nav-menu">
				<ul>
					<li>
						<a href="#hero">HOME</a>
					</li>
					<li>
						<a href="#about">ABOUT US</a>
					</li>
					<li>
						<a href="#clubs">CLUBS</a>
					</li>
					<li>
						<a href="#events">EVENTS</a>
					</li>
					<li>
						<a href="gallery.html">GALLERY</a>
					</li>
					<li>
						<a href="faq.html">FAQ</a>
					</li>
					<li>
						<a href="office.html">OFFICE BEARERS</a>
					</li>
					<li>
						<a href="openhouse/index.html">OPEN HOUSE</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
