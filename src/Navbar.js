import React from 'react'

const Navbar = () => {
  return (
		<nav className='nav navbar container-fluid d-flex px-3 justify-content-between'>
			<div className='nav-brand'>
				<span className='nav-brand-span'>Galleria</span>
			</div>

			<div className='items'>
				<ul>
					<li>
						<a href='#'>Home</a>
					</li>
					<li>
						<a href='#'>Products</a>
					</li>
					<li>
						<a href='#'>About</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar