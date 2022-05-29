import React, { useEffect } from 'react';

const Navbar = () => {
	useEffect(() => {
		const event = window.addEventListener('scroll', () => {
			if (window.scrollY > 1) {
				document.querySelector('.navbar').style.opacity = 0.6;
				document.querySelector('.navbar').style.background = '#fff';
				document.querySelector('.nav-brand-span').style.color = 'black';
				document.querySelector('.nav-brand-span').style.fontSize = '1.2rem';
			} else {
				document.querySelector('.navbar').style.opacity = 0.9;
				document.querySelector('.navbar').style.background = 'black';
				document.querySelector('.nav-brand-span').style.color = 'white';
				document.querySelector('.nav-brand-span').style.fontSize = '2.75rem';
			}
		});
		return () => {
			window.removeEventListener('scroll', event);
		};
	}, []);

	return (
		<nav className='nav navbar container-fluid  px-3 d-flex justify-content-center '>
			<div className='nav-brand '>
				<span className='nav-brand-span'>Galleria</span>
			</div>
		</nav>
	);
};

export default Navbar;
