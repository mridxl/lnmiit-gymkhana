const Events = () => {
	return (
		<section id="events" className="container" style={{ maxWidth: '1279px' }}>
			<div className="p-lg-5 cta-content" style={{ flex: 'auto' }}>
				<h2
					className="sp-title"
					style={{
						fontSize: '42px',
						marginBottom: '0px',
						textAlign: 'left',
						zIndex: 1,
						position: 'relative',
					}}
				>
					Events at LNMIIT, Jaipur
				</h2>
				<div
					style={{
						height: '2px',
						backgroundColor: '#e6e6e6',
						marginBottom: '2%',
					}}
				></div>
				<p>
					Discover the vibrant artistic community at LNMIIT, Jaipur. Our gallery
					showcases a diverse range of captivating works by talented students
					and faculty, from stunning paintings and sculptures to
					thought-provoking photography and innovative digital art. Immerse
					yourself in the world of art, explore new exhibitions, connect with
					like-minded individuals, and be inspired by the creativity that
					thrives within our campus.
				</p>
				<a
					href="https://linktr.ee/gymkhana.iitp"
					target="_blank"
					style={{ display: 'inherit', width: 'fit-content', color: '#292929' }}
				>
					Explore Our Fests
					<i className="fa fa-arrow-up-right-from-square"></i>
					<div
						style={{
							height: '1px',
							backgroundColor: '#292929',
							margin: '2% 0',
						}}
					></div>
				</a>
			</div>
		</section>
	);
};

export default Events;
