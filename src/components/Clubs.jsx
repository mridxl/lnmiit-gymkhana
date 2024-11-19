import React, { useEffect } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Clubs = () => {
	useEffect(() => {
		const swiper = new Swiper('.slide-content-carousel', {
			modules: [Navigation, Pagination],
			slidesPerView: 3,
			spaceBetween: 25,
			loop: true,
			centeredSlides: true,
			grabCursor: true,
			navigation: {
				nextEl: '.button-next',
				prevEl: '.button-prev',
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				dynamicBullets: true,
			},
			breakpoints: {
				0: { slidesPerView: 1 },
				520: { slidesPerView: 2 },
				950: { slidesPerView: 3 },
			},
		});

		return () => swiper.destroy();
	}, []);
	return (
		<section id="clubs">
			<div>
				<div
					id="society1"
					className="our-clubs_carousel spad"
					style={{ backgroundColor: '#f4f7fe', marginBottom: '0px' }}
				>
					<div style={{ width: '100%', height: '300px' }}>
						<div className="main-container-hosca">
							<h1 className="club_text" style={{ textAlign: 'center' }}>
								Our Councils
							</h1>
						</div>

						<div
							className="slide-container swiper"
							style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<div
								className="button-prev"
								style={{
									backgroundImage: "url('src/assets/prev.png')",
									width: '66px',
									height: '55px',
									cursor: 'pointer',
									zIndex: 100,
									objectFit: 'cover',
									backgroundRepeat: 'no-repeat',
								}}
							></div>

							<div
								className="slide-content-carousel"
								style={{ width: 'inherit' }}
							>
								<div className="card-wrapper swiper-wrapper">
									<div className="card swiper-slide">
										<div href="#society-popup1">
											<div className="non-social">
												<div className="image-content">
													<div className="card-image">
														<img
															src="src/assets/council-clubs/gymkhana.png"
															alt=""
															className="card-img"
														/>
													</div>
												</div>
												<div className="card-content">
													<a className="button" href="#society-popup1">
														STC
													</a>
												</div>
											</div>
											<div className="social">
												<a
													href="https://www.facebook.com/stc.iitp/"
													className="fa fa-facebook"
												></a>

												<a
													href="https://www.instagram.com/stc.iitp/"
													className="fa fa-instagram"
												></a>
											</div>
										</div>
									</div>
									<div className="card swiper-slide">
										<div href="#society-popup1">
											<div className="non-social">
												<div className="image-content">
													<div className="card-image">
														<img
															src="src/assets/council-clubs/gymkhana.png"
															alt=""
															className="card-img"
														/>
													</div>
												</div>
												<div className="card-content">
													<a className="button" href="#society-popup1">
														STC
													</a>
												</div>
											</div>
											<div className="social">
												<a
													href="https://www.facebook.com/stc.iitp/"
													className="fa fa-facebook"
												></a>

												<a
													href="https://www.instagram.com/stc.iitp/"
													className="fa fa-instagram"
												></a>
											</div>
										</div>
									</div>
									<div className="card swiper-slide">
										<div href="#society-popup1">
											<div className="non-social">
												<div className="image-content">
													<div className="card-image">
														<img
															src="src/assets/council-clubs/gymkhana.png"
															alt=""
															className="card-img"
														/>
													</div>
												</div>
												<div className="card-content">
													<a className="button" href="#society-popup1">
														STC
													</a>
												</div>
											</div>
											<div className="social">
												<a
													href="https://www.facebook.com/stc.iitp/"
													className="fa fa-facebook"
												></a>

												<a
													href="https://www.instagram.com/stc.iitp/"
													className="fa fa-instagram"
												></a>
											</div>
										</div>
									</div>
									<div className="card swiper-slide">
										<div href="#society-popup1">
											<div className="non-social">
												<div className="image-content">
													<div className="card-image">
														<img
															src="src/assets/council-clubs/gymkhana.png"
															alt=""
															className="card-img"
														/>
													</div>
												</div>
												<div className="card-content">
													<a className="button" href="#society-popup1">
														STC
													</a>
												</div>
											</div>
											<div className="social">
												<a
													href="https://www.facebook.com/stc.iitp/"
													className="fa fa-facebook"
												></a>

												<a
													href="https://www.instagram.com/stc.iitp/"
													className="fa fa-instagram"
												></a>
											</div>
										</div>
									</div>
									<div className="card swiper-slide">
										<div href="#society-popup1">
											<div className="non-social">
												<div className="image-content">
													<div className="card-image">
														<img
															src="src/assets/council-clubs/gymkhana.png"
															alt=""
															className="card-img"
														/>
													</div>
												</div>
												<div className="card-content">
													<a className="button" href="#society-popup1">
														STC
													</a>
												</div>
											</div>
											<div className="social">
												<a
													href="https://www.facebook.com/stc.iitp/"
													className="fa fa-facebook"
												></a>

												<a
													href="https://www.instagram.com/stc.iitp/"
													className="fa fa-instagram"
												></a>
											</div>
										</div>
									</div>
									<div className="card swiper-slide">
										<div href="#society-popup1">
											<div className="non-social">
												<div className="image-content">
													<div className="card-image">
														<img
															src="src/assets/council-clubs/gymkhana.png"
															alt=""
															className="card-img"
														/>
													</div>
												</div>
												<div className="card-content">
													<a className="button" href="#society-popup1">
														STC
													</a>
												</div>
											</div>
											<div className="social">
												<a
													href="https://www.facebook.com/stc.iitp/"
													className="fa fa-facebook"
												></a>

												<a
													href="https://www.instagram.com/stc.iitp/"
													className="fa fa-instagram"
												></a>
											</div>
										</div>
									</div>
									<div className="card swiper-slide">
										<div href="#society-popup1">
											<div className="non-social">
												<div className="image-content">
													<div className="card-image">
														<img
															src="src/assets/council-clubs/gymkhana.png"
															alt=""
															className="card-img"
														/>
													</div>
												</div>
												<div className="card-content">
													<a className="button" href="#society-popup1">
														STC
													</a>
												</div>
											</div>
											<div className="social">
												<a
													href="https://www.facebook.com/stc.iitp/"
													className="fa fa-facebook"
												></a>

												<a
													href="https://www.instagram.com/stc.iitp/"
													className="fa fa-instagram"
												></a>
											</div>
										</div>
									</div>
									<div className="card swiper-slide">
										<div href="#society-popup1">
											<div className="non-social">
												<div className="image-content">
													<div className="card-image">
														<img
															src="src/assets/council-clubs/gymkhana.png"
															alt=""
															className="card-img"
														/>
													</div>
												</div>
												<div className="card-content">
													<a className="button" href="#society-popup1">
														STC
													</a>
												</div>
											</div>
											<div className="social">
												<a
													href="https://www.facebook.com/stc.iitp/"
													className="fa fa-facebook"
												></a>

												<a
													href="https://www.instagram.com/stc.iitp/"
													className="fa fa-instagram"
												></a>
											</div>
										</div>
									</div>
									<div className="card swiper-slide">
										<div href="#society-popup1">
											<div className="non-social">
												<div className="image-content">
													<div className="card-image">
														<img
															src="src/assets/council-clubs/gymkhana.png"
															alt=""
															className="card-img"
														/>
													</div>
												</div>
												<div className="card-content">
													<a className="button" href="#society-popup1">
														STC
													</a>
												</div>
											</div>
											<div className="social">
												<a
													href="https://www.facebook.com/stc.iitp/"
													className="fa fa-facebook"
												></a>

												<a
													href="https://www.instagram.com/stc.iitp/"
													className="fa fa-instagram"
												></a>
											</div>
										</div>
									</div>
									<div className="card swiper-slide">
										<div href="#society-popup1">
											<div className="non-social">
												<div className="image-content">
													<div className="card-image">
														<img
															src="src/assets/council-clubs/gymkhana.png"
															alt=""
															className="card-img"
														/>
													</div>
												</div>
												<div className="card-content">
													<a className="button" href="#society-popup1">
														STC
													</a>
												</div>
											</div>
											<div className="social">
												<a
													href="https://www.facebook.com/stc.iitp/"
													className="fa fa-facebook"
												></a>

												<a
													href="https://www.instagram.com/stc.iitp/"
													className="fa fa-instagram"
												></a>
											</div>
										</div>
									</div>
									<div className="card swiper-slide">
										<div href="#society-popup1">
											<div className="non-social">
												<div className="image-content">
													<div className="card-image">
														<img
															src="src/assets/council-clubs/gymkhana.png"
															alt=""
															className="card-img"
														/>
													</div>
												</div>
												<div className="card-content">
													<a className="button" href="#society-popup1">
														STC
													</a>
												</div>
											</div>
											<div className="social">
												<a
													href="https://www.facebook.com/stc.iitp/"
													className="fa fa-facebook"
												></a>

												<a
													href="https://www.instagram.com/stc.iitp/"
													className="fa fa-instagram"
												></a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div
								className="button-next"
								style={{
									backgroundImage: "url('src/assets/next.png')",
									width: ' 66px',
									height: ' 55px',
									cursor: 'pointer',
								}}
							></div>
							<div className="swiper-pagination"></div>
						</div>

						<div id="society-popup1" className="overlay">
							<div className="popup">
								<h2>Science and Tech Council</h2>
								<a className="close" href="#society1">
									&times,
								</a>
								<div className="content">
									<p>
										The Council concentrates on imparting students with
										knowledge that is beyond the academic curriculum. It aims at
										stimulating the technical mindset of the students and
										carries out activities like Workshops, Competitions and
										Recreational events to provide all students with hands-on
										experience as well as practical knowledge through the clubs.
										The Council thus believes that student organizations are a
										great way for a student to meet new people, broaden their
										knowledge and skills, and enrich their college experience.
									</p>
									<div className="social-modal">
										<a
											href="https://www.facebook.com/stc.iitp/"
											className="fa fa-facebook"
										></a>

										<a
											href="https://www.instagram.com/stc.iitp/"
											className="fa fa-instagram"
										></a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Clubs;
