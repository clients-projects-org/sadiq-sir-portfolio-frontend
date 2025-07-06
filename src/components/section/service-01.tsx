import React from 'react';
import { Card01, Card02 } from '../cards';

export function Service01() {
	return (
		<section className="services section-padding">
			<div className="container">
				<div className="sec-head mb-80">
					<div className="row">
						<div className="col-lg-4">
							<h6 className="title-bord mb-30">Research</h6>
						</div>
						<div className="col-lg-8">
							<div className="text">
								<h4>
									From the inception of a project to its completion, we employ a
									comprehensive and holistic approach that ensures all aspects
									and stages are thoughtfully and thoroughly addressed.
								</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<Card02 />
				<Card02 />
				<Card02 />
				<Card02 />
			</div>
		</section>
	);
}
