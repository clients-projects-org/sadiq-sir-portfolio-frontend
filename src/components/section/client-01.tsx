import React from 'react';

export function Client01() {
	return (
		<section className="clients-carso in-circle section-padding">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-6 col-md-10">
						<div className="sec-head text-center mb-80">
							<h3>
								We're proud to work with <br />a
								<span className="opacity-7">diverse range of companies.</span>
							</h3>
						</div>
					</div>
				</div>
				<div
					className="swiper5"
					data-carousel="swiper"
					data-items="5"
					data-loop="true"
					data-space="40"
				>
					<div
						id="content-carousel-container-unq-clients"
						className="swiper-container"
						data-swiper="container"
					>
						<div className="swiper-wrapper">
							<div className="swiper-slide">
								<div className="item">
									<div className="img icon-img-100">
										<img src="assets/imgs/brands/c1.svg" alt="" />
									</div>
								</div>
							</div>
							<div className="swiper-slide">
								<div className="item">
									<div className="img icon-img-100">
										<img src="assets/imgs/brands/c2.svg" alt="" />
									</div>
								</div>
							</div>
							<div className="swiper-slide">
								<div className="item">
									<div className="img icon-img-100">
										<img src="assets/imgs/brands/c3.svg" alt="" />
									</div>
								</div>
							</div>
							<div className="swiper-slide">
								<div className="item">
									<div className="img icon-img-100">
										<img src="assets/imgs/brands/c4.svg" alt="" />
									</div>
								</div>
							</div>
							<div className="swiper-slide">
								<div className="item">
									<div className="img icon-img-100">
										<img src="assets/imgs/brands/c5.svg" alt="" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="sec-bottom mt-100">
					<div className="main-bg d-flex align-items-center">
						<h6 className="fz-14 fw-400">
							More than
							<span className="fw-600"> 200+ companies</span> trusted us
							worldwide
						</h6>
					</div>
				</div>
			</div>
		</section>
	);
}
