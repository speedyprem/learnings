import React from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
    <div className="container">
        <a className="navbar-brand" href="index.html">Simple Ecommerce</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarsExampleDefault">
            <ul className="navbar-nav m-auto">
                <li className="nav-item">
                    <a className="nav-link" href="index.html">Home</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="category.html">Categories <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="product.html">Product</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="cart.html">Cart</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="contact.html">Contact</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
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
