import React from 'react';

export function Card03() {
	return (
		<div className="item ">
			<div className="info sub-title p-color d-flex align-items-center mb-20">
				<div>
					<a href="blog-grid-sidebar.html">By : Admin</a>
				</div>
				<div className="ml-30">
					<a href="blog-grid-sidebar.html">August 14, 2023</a>
				</div>
			</div>
			<div className="img fit-img">
				<img src="assets/imgs/blog/1.jpg" alt="" />
			</div>
			<div className="cont pt-30">
				<h5>Design Inspiration: Where to Find Creative Ideas</h5>
				<a
					href="blog-details.html"
					className="butn-crev d-flex align-items-center mt-30"
				>
					<span className="hover-this">
						<span className="circle hover-anim">
							<i className="ti-arrow-top-right"></i>
						</span>
					</span>
					<span className="text">Read more</span>
				</a>
			</div>
		</div>
	);
}
