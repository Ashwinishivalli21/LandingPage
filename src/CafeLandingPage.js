import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CafeLandingPage() {
  const [menu] = useState([
    { id: 1, name: "Cappuccino", price: "₹150" },
    { id: 2, name: "Latte", price: "₹160" },
    { id: 3, name: "Mocha", price: "₹180" }
  ]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <a className="navbar-brand" href="#home">Cafe Bliss</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#menu">Menu</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <section id="home" className="d-flex align-items-center justify-content-center text-center" style={{ height: "90vh", background: "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93') center/cover" }}>
        <div className="text-white  bg-opacity-50 p-4 rounded-3">
          <h1>Welcome to Cafe Bliss</h1>
          <p>Experience the finest coffee and cozy ambiance</p>
          <button className="btn btn-warning">Explore Menu</button>
        </div>
      </section>
      <section id="menu" className="container py-5">
        <h2 className="text-center mb-4">Our Menu</h2>
        <div className="row">
          {menu.map((item) => (
            <div key={item.id} className="col-md-4 mb-4">
              <div className="card shadow">
                <img src="https://images.unsplash.com/photo-1511920170033-f8396924c348" className="card-img-top" alt="coffee" />
                <div className="card-body text-center">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text fw-bold">{item.price}</p>
                  <button className="btn btn-primary">Order Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="contact" className="bg-dark text-white text-center py-5">
        <h2>Contact Us</h2>
        <p>Email: Eshacafe.com | Phone: +91 9876543210</p>
      </section>
      <footer className="bg-secondary text-white text-center py-2">
        <p className="mb-0">© 2025 Cafe Bliss. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
