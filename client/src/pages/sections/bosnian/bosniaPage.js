import { Link } from "react-router-dom";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import "./bosniaPage.css";
import { useState, useEffect } from "react";
import { getAnnouncements } from "../../../services/getAnnouncements";

export default function BosniaPage() {
  const [announcements, setAnnouncements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getInternships = async () => {
      try {
        const internships = await getAnnouncements();
        setAnnouncements(internships);
      } catch (error) {
        console.error("Error fetching announcements:", error);
      } finally {
        setIsLoading(false);
      }
    };
    getInternships();
  }, [setAnnouncements]);

  const intern = announcements.filter(
    (internships) =>
      internships.type === "internship" && internships.location === "bih"
  ).slice(0, 3); // Show only 3 latest
  const jobs = announcements.filter(
    (jobs) => jobs.type === "job" && jobs.location === "bih"
  ).slice(0, 3); // Show only 3 latest

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading opportunities...</p>
      </div>
    );
  }

  return (
    <div className="bosnia-page">
      <Navbar />

      <main className="bosnia-main">
        {/* Hero Section */}
        <section className="bosnia-hero">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1 className="hero-title">Bosnian Career Opportunities</h1>
            <p className="hero-subtitle">
              Discover your next career move in Bosnia's most dynamic cities
            </p>
            <div className="hero-cta">
              <Link to="/europe/jobs" className="cta-button primary">
                Explore Jobs
              </Link>
              <Link to="/europe/internships" className="cta-button secondary">
                Find Internships
              </Link>
            </div>
          </div>
        </section>

        {/* Job Opportunities Section */}
        <section className="opportunities-section">
          <div className="section-header">
            <h2 className="section-title">Featured Job Opportunities</h2>
            <p className="section-description">
              Hand-picked positions from top employers in Bosnia & Herzegovina
            </p>
            
          </div>

          <div className="opportunities-grid">
            {jobs.length > 0 ? (
              jobs.map((job) => (
                <div key={job.id} className="opportunity-card">
                  <div className="card-header">
                    <div className="company-logo"></div>
                    <div className="job-meta">
                      <h3 className="job-title">{job.title}</h3>
                      <span className="company-name">{job.company}</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <p className="job-description">
                      {job.description.length > 120
                        ? `${job.description.substring(0, 120)}...`
                        : job.description}
                    </p>
                    <div className="job-tags">
                      <span className="tag location">{job.location}</span>
                      <span className="tag type">{job.type}</span>
                    </div>
                  </div>
                  <div className="card-footer">
                    <span className="posted-date">Posted: {new Date(job.posted).toLocaleDateString()}</span>
                    <Link
                      to={`/bosnia/jobs/${job.id}`}
                      className="view-details-button"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-opportunities">
                <p>No job opportunities available at the moment.</p>
              </div>
            )}
          </div>
        </section>

        {/* Internship Programs Section */}
        <section className="opportunities-section">
          <div className="section-header">
            <h2 className="section-title">Featured Internship Programs</h2>
            <p className="section-description">
              Launch your career with these exclusive internship opportunities
            </p>
        
          </div>

          <div className="opportunities-grid">
            {intern.length > 0 ? (
              intern.map((internship) => (
                <div key={internship.id} className="opportunity-card">
                  <div className="card-header">
                    <div className="company-logo"></div>
                    <div className="job-meta">
                      <h3 className="job-title">{internship.title}</h3>
                      <span className="company-name">{internship.company}</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <p className="job-description">
                      {internship.description.length > 120
                        ? `${internship.description.substring(0, 120)}...`
                        : internship.description}
                    </p>
                    <div className="job-tags">
                      <span className="tag location">{internship.location}</span>
                      <span className="tag duration">{internship.duration}</span>
                    </div>
                  </div>
                  <div className="card-footer">
                    <span className="posted-date">
                      Posted: {new Date(internship.createdAt).toLocaleDateString()}
                    </span>
                    <Link
                      to={`/bosnia/internships/${internship.id}`}
                      className="view-details-button"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-opportunities">
                <p>No internship opportunities available at the moment.</p>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="cta-section">
          <div className="cta-content">
            <h2 className="cta-title">Ready to advance your career?</h2>
            <p className="cta-text">
              Join thousands of professionals who found their dream jobs through our platform.
            </p>
            <div className="cta-buttons">
              <Link to="/register" className="cta-button primary">
                Create Account
              </Link>
              <Link to="/bosnia/jobs" className="cta-button secondary">
                Browse Opportunities
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}