import React from 'react';
import logo from './logo.svg';
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
        <div className="col">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Contact</li>
                </ol>
            </nav>
        </div>
    </div>
</div>
<div className="container">
    <div className="row">
        <div className="col">
            <div className="card">
                <div className="card-header bg-primary text-white"><i className="fa fa-envelope"></i> Contact us.
                </div>
                <div className="card-body">

                </div>
            </div>
        </div>
        <div className="col-12 col-sm-4">
            <div className="card bg-light mb-3">
                <div className="card-header bg-success text-white text-uppercase"><i className="fa fa-home"></i> Address</div>
                <div className="card-body">
                    <p>3 rue des Champs Elysées</p>
                    <p>75008 PARIS</p>
                    <p>France</p>
                    <p>Email : email@example.com</p>
                    <p>Tel. +33 12 56 11 51 84</p>

                </div>

            </div>
        </div>
    </div>
</div>


    </div>
  );
}

export default App;
