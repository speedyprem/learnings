import React, { Component } from 'react';
import './App.css';
import NavbarComponent from './components/NavbarComponent';

function App() {
return (
	<div className="App">
		<NavbarComponent />
<section className="jumbotron text-center">
	<div className="container">
		<h1 className="jumbotron-heading">E-COMMERCE CONTACT</h1>
		<p className="lead text-muted mb-0">Contact Page build with Bootstrap 4 !</p>
	</div>
</section>

<div className="container">
	<div className="row">
		<div className="col-sm-12">
			<div className="row">
		<div className="col-sm-3">
			<div className="hero-widget card-header">
				<div className="icon">
					<i className="glyphicon glyphicon-user"></i>
				</div>
				<div className="text">
					<var>3</var>
					<label className="text-muted">invited guests</label>
				</div>
				<div className="options">
					<a href="#" className="btn btn-primary btn-lg"><i className="glyphicon glyphicon-plus"></i> Add a guest</a>
				</div>
			</div>
		</div>
		<div className="col-sm-3">
			<div className="hero-widget card-header">
				<div className="icon">
					<i className="glyphicon glyphicon-star"></i>
				</div>
				<div className="text">
					<var>614</var>
					<label className="text-muted">page likes</label>
				</div>
				<div className="options">
					<a href="#" className="btn btn-default btn-lg"><i className="glyphicon glyphicon-search"></i> View traffic</a>
				</div>
			</div>
		</div>
		<div className="col-sm-3">
			<div className="hero-widget card-header">
				<div className="icon">
					<i className="glyphicon glyphicon-tags"></i>
				</div>
				<div className="text">
					<var>73</var>
					<label className="text-muted">total orders</label>
				</div>
				<div className="options">
					<a href="#" className="btn btn-default btn-lg"><i className="glyphicon glyphicon-search"></i> View orders</a>
				</div>
			</div>
		</div>
		<div className="col-sm-3">
			<div className="hero-widget card-header">
				<div className="icon">
					<i className="glyphicon glyphicon-cog"></i>
				</div>
				<div className="text">
					<var>75%</var>
					<label className="text-muted">profile complete</label>
				</div>
				<div className="options">
					<a href="#" className="btn btn-default btn-lg"><i className="glyphicon glyphicon-wrench"></i> Edit profile</a>
				</div>
			</div>
		</div>
	</div>
		</div>
	</div>
</div>
</div>
);
}

export default App;
