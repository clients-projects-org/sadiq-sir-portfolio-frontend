import React from 'react';
import { Card04 } from '../cards';

export function Portfolio02() {
	return (
		<section className="work-grid section-padding pb-0">
			<div className="container">
				<div className="row mb-80">
					<div className="col-lg-4">
						<div className="sec-head">
							<h6 className="title-bord mb-30">Gallery</h6>
							<h3>Latest Projects</h3>
						</div>
					</div>
					{/* <!-- filter links --> */}
					<div className="filtering col-lg-8 d-flex justify-content-end align end">
						<div>
							<div className="filter">
								<span data-filter="*" className="active" data-count="08">
									All
								</span>
								<span data-filter=".design" data-count="03">
									Design
								</span>
								<span data-filter=".development" data-count="02">
									Development
								</span>
								<span data-filter=".marketing" data-count="03">
									Marketing
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="gallery row">
					<div className="col-lg-4 col-md-6 mb-4 pb-4">
						<Card04 />
					</div>
					<div className="col-lg-4 col-md-6 mb-4 pb-4">
						<Card04 />
					</div>
					<div className="col-lg-4 col-md-6 mb-4 pb-4">
						<Card04 />
					</div>
					<div className="col-lg-4 col-md-6 mb-4 pb-4">
						<Card04 />
					</div>
					<div className="col-lg-4 col-md-6 mb-4 pb-4">
						<Card04 />
					</div>
					<div className="col-lg-4 col-md-6 mb-4 pb-4">
						<Card04 />
					</div>
				</div>
			</div>
		</section>
	);
}
