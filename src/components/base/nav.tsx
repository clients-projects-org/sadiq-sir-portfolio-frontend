import Link from 'next/link';
import React from 'react';

export function Nav() {
	const navLinks = [
		{
			name: 'Home',
			link: '/',
		},
		{
			name: 'About',
			link: '#about',
		},
		{
			name: 'Research',
			link: '#research',
		},
		{
			name: 'Blog',
			link: '#blog',
		},
		{
			name: 'Events',
			link: '#events',
		},
	];
	return (
		<nav className="navbar navbar-expand-lg bord blur">
			<div className="container o-hidden">
				{/* <!-- Logo --> */}
				<a className="logo icon-img-100" href="#">
					<img src="assets/imgs/logo-light.png" alt="logo" />
				</a>

				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="icon-bar">
						<i className="fas fa-bars"></i>
					</span>
				</button>

				{/* <!-- navbar links --> */}
				<div
					className="collapse navbar-collapse justify-content-center"
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav">
						{navLinks.map((link, index) => (
							<li className="nav-item" key={index}>
								<Link className="nav-link" href={link.link}>
									<span className="rolling-text">{link.name}</span>
								</Link>
							</li>
						))}
					</ul>
				</div>

				<div className="contact-button">
					<Link
						href="#contact"
						className="butn butn-sm butn-bg main-colorbg radius-5"
					>
						<span className="text">Let's contact</span>
					</Link>
				</div>
			</div>
		</nav>
	);
}
