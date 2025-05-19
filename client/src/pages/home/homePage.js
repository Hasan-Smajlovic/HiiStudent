import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import "./homePage.css";

export default function Home() {
  return (
    <div className="home-page">
      <Navbar />

      <main className="home-main">
        <section className="hero-section">
          <div className="hero-container">
            <h1 className="hero-title">Welcome to HiiStudent</h1>
            <p className="hero-subtitle">
              Discover the best job and internship opportunities for students in
              Bosnia & Herzegovina and across Europe
            </p>
          </div>
        </section>

        <section className="sections-container">
          <h2 className="sections-title">Choose Your Destination</h2>

          <div className="sections-grid">
            <Link to="/bosnia" className="section-card bosnia-card">
              <div className="section-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="section-card-title">Bosnia & Herzegovina</h3>
              <p className="section-card-text">
                Find local job and internship opportunities in Bosnia &
                Herzegovina
              </p>
            </Link>

            <Link to="/europe" className="section-card europe-card">
              <div className="section-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="section-card-title">Europe</h3>
              <p className="section-card-text">
                Explore job and internship opportunities across Europe
              </p>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
