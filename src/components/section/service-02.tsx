import React from 'react';

export function Service02() {
	return (
		<section className="services section-padding">
			<div className="container">
				<div className="sec-head mb-80">
					<div className="d-flex align-items-center">
						<div>
							<span className="sub-title main-color mb-5">Our Specialize</span>
							<h3 className="fw-600 fz-50 text-u d-rotate wow">
								<span className="rotate-text">
									Featured <span className="fw-200"> Services.</span>
								</span>
							</h3>
						</div>
						<div className="ml-auto">
							<div className="swiper-arrow-control">
								<div className="swiper-button-prev">
									<span className="ti-arrow-left"></span>
								</div>
								<div className="swiper-button-next">
									<span className="ti-arrow-right"></span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					className="serv-swiper"
					data-carousel="swiper"
					data-loop="true"
					data-space="40"
				>
					<div
						id="content-carousel-container-unq-serv"
						className="swiper-container"
						data-swiper="container"
					>
						<div className="swiper-wrapper">
							<div className="swiper-slide">
								<div className="item-box">
									<div className="icon mb-40 opacity-5">
										<img src="assets/imgs/serv-icons/3.png" alt="" />
									</div>
									<h5 className="mb-15">Digital Product</h5>
									<p>
										Live workshop where we define the main problems and
										challenges before building a strategic plan moving forward.
									</p>
									<a href="page-services-details.html" className="rmore mt-30">
										<span className="sub-title">Read More</span>
										<img
											src="assets/imgs/arrow-right.png"
											alt=""
											className="icon-img-20 ml-5"
										/>
									</a>
								</div>
							</div>
							<div className="swiper-slide">
								<div className="item-box">
									<div className="icon mb-40 opacity-5">
										<img src="assets/imgs/serv-icons/4.png" alt="" />
									</div>
									<h5 className="mb-15">Web Developments</h5>
									<p>
										Live workshop where we define the main problems and
										challenges before building a strategic plan moving forward.
									</p>
									<a href="page-services-details.html" className="rmore mt-30">
										<span className="sub-title">Read More</span>
										<img
											src="assets/imgs/arrow-right.png"
											alt=""
											className="icon-img-20 ml-5"
										/>
									</a>
								</div>
							</div>
							<div className="swiper-slide">
								<div className="item-box">
									<div className="icon mb-40 opacity-5">
										<img src="assets/imgs/serv-icons/5.png" alt="" />
									</div>
									<h5 className="mb-15">Branding Design</h5>
									<p>
										Live workshop where we define the main problems and
										challenges before building a strategic plan moving forward.
									</p>
									<a href="page-services-details.html" className="rmore mt-30">
										<span className="sub-title">Read More</span>
										<img
											src="assets/imgs/arrow-right.png"
											alt=""
											className="icon-img-20 ml-5"
										/>
									</a>
								</div>
							</div>
							<div className="swiper-slide">
								<div className="item-box">
									<div className="icon mb-40 opacity-5">
										<img src="assets/imgs/serv-icons/6.png" alt="" />
									</div>
									<h5 className="mb-15">UI-UX Design</h5>
									<p>
										Live workshop where we define the main problems and
										challenges before building a strategic plan moving forward.
									</p>
									<a href="page-services-details.html" className="rmore mt-30">
										<span className="sub-title">Read More</span>
										<img
											src="assets/imgs/arrow-right.png"
											alt=""
											className="icon-img-20 ml-5"
										/>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
