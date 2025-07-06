import React from 'react';

export function Card02() {
	return (
		<div className="item-box">
			<div className="icon mb-40 opacity-5">
				<img src="assets/imgs/serv-icons/3.png" alt="" />
			</div>
			<h5 className="mb-15">Digital Product</h5>
			<p>
				Live workshop where we define the main problems and challenges before
				building a strategic plan moving forward.
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
	);
}
