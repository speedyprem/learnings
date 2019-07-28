import React from 'react';
import { Link } from 'react-router-dom';

function NavbarComponent() {
	return (
		<nav className="navbar navbar-expand-md navbar-dark bg-dark">
			<div className="container">
				<link className="navbar-brand" href="index.html">Simple Ecommerce</link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse justify-content-end" id="navbarsExampleDefault">
					<ul className="navbar-nav m-auto">
						<li className="nav-item">
							<link className="nav-link" href="index.html">Home</link>
						</li>
						<li className="nav-item">
							<link className="nav-link" href="category.html">Categories <span className="sr-only">(current)</span></link>
						</li>
						<li className="nav-item">
							<link className="nav-link" href="product.html">Product</link>
						</li>
						<li className="nav-item">
							<link className="nav-link" href="cart.html">Cart</link>
						</li>
						<li className="nav-item">
							<link className="nav-link" href="/contact">Contact</link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default NavbarComponent;
