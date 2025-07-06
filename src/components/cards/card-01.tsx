import React from 'react';

export function Card01({ active }: { active?: boolean }) {
	return (
		<div className={`item ${active ? 'active' : ''}`}>
			<div className="icon-img-60">
				<img src="assets/imgs/serv-icons/3.png" alt="" />
			</div>
			<div>
				<div className="text mb-30">
					<p>
						We help our client suceed by creating identities, digital
						experiences, and printmaterials that communicate clearly
					</p>
				</div>
				<div className="d-flex align-items-center">
					<h6 className="sub-title">UI/UX Design</h6>
					<span className="ml-auto fz-13">01</span>
				</div>
			</div>
		</div>
	);
}

/* USE
	<div className="serv-boxs">
		<Card01 active />
		<Card01 />
		<Card01 />
		<Card01 />
	</div>	

*/
