import { Link } from "react-router-dom";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import "./europePage.css";

// Mock data for European opportunities
const europeJobs = [
  {
    id: 1,
    title: "Software Engineer",
    company: "TechCorp EU",
    location: "Berlin, Germany",
    type: "Full-time",
    posted: "2023-06-15",
    description: "Join our engineering team to build innovative software solutions for the European market. You'll work with cutting-edge technologies and collaborate with international teams.",
  },
  {
    id: 2,
    title: "Marketing Manager",
    company: "EuroBrands",
    location: "Paris, France",
    type: "Full-time",
    posted: "2023-06-10",
    description: "Lead our European marketing campaigns and strategy. Ideal candidate has 5+ years experience in pan-European marketing and fluent in at least two European languages.",
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "Analytics Europe",
    location: "Amsterdam, Netherlands",
    type: "Remote",
    posted: "2023-06-12",
    description: "Work with big data to derive insights for our clients across Europe. Strong Python and SQL skills required, with experience in machine learning frameworks.",
  },
];

const europeInternships = [
  {
    id: 1,
    title: "Engineering Intern",
    company: "EuroTech",
    location: "Munich, Germany",
    duration: "6 months",
    posted: "2023-06-13",
    description: "Hands-on experience with our product development team. You'll contribute to real projects while learning from senior engineers in our Munich office.",
  },
  {
    id: 2,
    title: "Business Development Intern",
    company: "GrowthEU",
    location: "Brussels, Belgium",
    duration: "3 months",
    posted: "2023-06-01",
    description: "Learn about European market expansion strategies while working with our business development team. Perfect for business students interested in EU markets.",
  },
  {
    id: 3,
    title: "Design Intern",
    company: "CreativeEU",
    location: "Stockholm, Sweden",
    duration: "4 months",
    posted: "2023-06-16",
    description: "Work with our design team on client projects for European brands. Portfolio review required. Experience with Figma or Adobe Creative Suite preferred.",
  },
];

export default function EuropePage() {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="europe-page">
      <Navbar />

      <main className="europe-main">
        {/* Hero Section */}
        <section className="europe-hero">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1 className="hero-title">European Career Opportunities</h1>
            <p className="hero-subtitle">
              Discover your next career move in Europe's most dynamic cities
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
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Featured European Jobs</h2>
              <p className="section-description">
                Curated selection of top positions across Europe
              </p>
              <Link to="/europe/jobs" className="see-all-link">
                View All Jobs <span className="arrow">→</span>
              </Link>
            </div>

            <div className="opportunities-grid">
              {europeJobs.map((job) => (
                <div key={job.id} className="opportunity-card">
                  <div className="card-badge">{job.type}</div>
                  <div className="card-header">
                    <div className="company-logo">
                      {job.company.substring(0, 2).toUpperCase()}
                    </div>
                    <div className="job-meta">
                      <h3 className="job-title">{job.title}</h3>
                      <span className="company-name">{job.company}</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="job-location">
                      <svg className="location-icon" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                      {job.location}
                    </div>
                    <p className="job-description">
                      {job.description.length > 100
                        ? `${job.description.substring(0, 100)}...`
                        : job.description}
                    </p>
                  </div>
                  <div className="card-footer">
                    <span className="posted-date">Posted: {formatDate(job.posted)}</span>
                    <Link
                      to={`/europe/jobs/${job.id}`}
                      className="view-details-button"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internship Programs Section */}
        <section className="opportunities-section internships">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">European Internship Programs</h2>
              <p className="section-description">
                Launch your career with international experience
              </p>
              <Link to="/europe/internships" className="see-all-link">
                View All Internships <span className="arrow">→</span>
              </Link>
            </div>

            <div className="opportunities-grid">
              {europeInternships.map((internship) => (
                <div key={internship.id} className="opportunity-card">
                  <div className="card-badge">{internship.duration}</div>
                  <div className="card-header">
                    <div className="company-logo">
                      {internship.company.substring(0, 2).toUpperCase()}
                    </div>
                    <div className="job-meta">
                      <h3 className="job-title">{internship.title}</h3>
                      <span className="company-name">{internship.company}</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="job-location">
                      <svg className="location-icon" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                      {internship.location}
                    </div>
                    <p className="job-description">
                      {internship.description.length > 100
                        ? `${internship.description.substring(0, 100)}...`
                        : internship.description}
                    </p>
                  </div>
                  <div className="card-footer">
                    <span className="posted-date">Posted: {formatDate(internship.posted)}</span>
                    <Link
                      to={`/europe/internships/${internship.id}`}
                      className="view-details-button"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Europe Highlights Section */}
        <section className="europe-highlights">
          <div className="section-container">
            <h2 className="highlights-title">Why Work in Europe?</h2>
            <div className="highlights-grid">
              <div className="highlight-card">
                <div className="highlight-icon">🌍</div>
                <h3>Diverse Cultures</h3>
                <p>Experience working in multicultural environments across different European countries.</p>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon">💼</div>
                <h3>Career Growth</h3>
                <p>Access to leading industries and innovative companies at the forefront of technology.</p>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon">🏛️</div>
                <h3>Work-Life Balance</h3>
                <p>Benefit from European employment laws that prioritize employee wellbeing.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}