import React from 'react';
import { Card03 } from '../cards';

export function Blog01() {
	return (
		<section className="blog style2">
			<div className="container">
				<div className="sec-head mb-80">
					<div className="d-flex align-items-center">
						<h6 className="title-bord mb-30">Blog</h6>
						<div className="ml-auto vi-more">
							<a
								href="blog-grid-sidebar.html"
								className="butn butn-sm butn-bord radius-30"
							>
								<span>View All</span>
							</a>
							<span className="icon ti-arrow-top-right"></span>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4">
						<Card03 />
					</div>
					<div className="col-md-4">
						<Card03 />
					</div>
					<div className="col-md-4">
						<Card03 />
					</div>
				</div>
			</div>
		</section>
	);
}
