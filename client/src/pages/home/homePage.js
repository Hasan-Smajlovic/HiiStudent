import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import "./homePage.css";

export default function Home() {
  return (
    <div className="home-page">
      <Navbar />

      <main className="home-main">
        {/* Hero Section with Gradient Background */}
        <section className="hero-section">
          <div className="hero-container">
            <div className="hero-content">
              <h1 className="hero-title">
                Launch Your Career with <span>HiiStudent</span>
              </h1>
              <p className="hero-subtitle">
                Discover exclusive job and internship opportunities for students in 
                Bosnia & Herzegovina and across Europe
              </p>
              <div className="hero-cta">
                <Link to="/bosnia" className="cta-button primary">
                  Explore Bosnia Jobs
                </Link>
                <Link to="/europe" className="cta-button secondary">
                  European Opportunities
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Students networking"
                className="hero-img"
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="stats-container">
            <div className="stat-item">
              <h3>500+</h3>
              <p>Job Listings</p>
            </div>
            <div className="stat-item">
              <h3>200+</h3>
              <p>Partner Companies</p>
            </div>
            <div className="stat-item">
              <h3>10,000+</h3>
              <p>Students Helped</p>
            </div>
            <div className="stat-item">
              <h3>15+</h3>
              <p>European Countries</p>
            </div>
          </div>
        </section>

        {/* Destination Section */}
        <section className="sections-container">
          <div className="section-header">
            <h2 className="sections-title">Find Your Perfect Opportunity</h2>
            <p className="sections-subtitle">
              Browse opportunities by location and field of interest
            </p>
          </div>

          <div className="sections-grid">
            <Link to="/bosnia" className="section-card bosnia-card">
              <div className="card-content">
                <div className="section-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="section-card-title">Bosnia & Herzegovina</h3>
                <p className="section-card-text">
                  Local internships and entry-level positions in Sarajevo, 
                  Banja Luka, Mostar and other cities
                </p>
                <div className="card-footer">
                  <span className="card-link">View Opportunities →</span>
                </div>
              </div>
              <div className="card-bg"></div>
            </Link>

            <Link to="/europe" className="section-card europe-card">
              <div className="card-content">
                <div className="section-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="section-card-title">Europe</h3>
                <p className="section-card-text">
                  International internships and graduate programs across 
                  Germany, Austria, Netherlands and more
                </p>
                <div className="card-footer">
                  <span className="card-link">View Opportunities →</span>
                </div>
              </div>
              <div className="card-bg"></div>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <div className="section-header">
            <h2 className="sections-title">Why Choose HiiStudent</h2>
            <p className="sections-subtitle">
              We make the job search process easier for students
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3>Curated Opportunities</h3>
              <p>We handpick the best student-friendly positions from top employers</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3>Verified Listings</h3>
              <p>All opportunities are verified to ensure legitimacy and quality</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3>Application Support</h3>
              <p>Get help with CVs, cover letters, and interview preparation</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section">
          <div className="section-header">
            <h2 className="sections-title">Success Stories</h2>
            <p className="sections-subtitle">
              Hear from students who found their dream opportunities
            </p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p className="testimonial-text">
                  "Thanks to HiiStudent, I landed an internship at a top IT company in Sarajevo while still in my third year of studies!"
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Amra H." />
                  </div>
                  <div className="author-info">
                    <h4>Amra H.</h4>
                    <p>Computer Science Student</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p className="testimonial-text">
                  "I never thought I could work abroad as a student from Bosnia, but HiiStudent connected me with an amazing company in Berlin."
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Adnan K." />
                  </div>
                  <div className="author-info">
                    <h4>Adnan K.</h4>
                    <p>Engineering Student</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-container">
            <h2 className="cta-title">Ready to jumpstart your career?</h2>
            <p className="cta-subtitle">
              Create your free profile and get matched with perfect opportunities
            </p>
            <div className="cta-buttons">
              <Link to="/register" className="cta-button primary">
                Sign Up Now
              </Link>
              <Link to="/login" className="cta-button secondary">
                Log In
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}