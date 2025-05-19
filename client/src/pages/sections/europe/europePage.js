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
    posted: "3 days ago",
    description:
      "Join our engineering team to build innovative software solutions.",
  },
  {
    id: 2,
    title: "Marketing Manager",
    company: "EuroBrands",
    location: "Paris, France",
    type: "Full-time",
    posted: "1 week ago",
    description: "Lead our European marketing campaigns and strategy.",
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "Analytics Europe",
    location: "Amsterdam, Netherlands",
    type: "Remote",
    posted: "5 days ago",
    description: "Work with big data to derive insights for our clients.",
  },
];

const europeInternships = [
  {
    id: 1,
    title: "Engineering Intern",
    company: "EuroTech",
    location: "Munich, Germany",
    duration: "6 months",
    posted: "4 days ago",
    description: "Hands-on experience with our product development team.",
  },
  {
    id: 2,
    title: "Business Development Intern",
    company: "GrowthEU",
    location: "Brussels, Belgium",
    duration: "3 months",
    posted: "2 weeks ago",
    description: "Learn about European market expansion strategies.",
  },
  {
    id: 3,
    title: "Design Intern",
    company: "CreativeEU",
    location: "Stockholm, Sweden",
    duration: "4 months",
    posted: "1 day ago",
    description: "Work with our design team on client projects.",
  },
];

export default function EuropePage() {
  return (
    <div className="europe-page">
      <Navbar />

      <main className="europe-main">
        <div className="europe-header">
          <h1 className="europe-title">European Opportunities</h1>
          <p className="europe-subtitle">
            Find jobs and internships across Europe
          </p>
        </div>

        <section className="listings-section">
          <div className="listings-header">
            <h2 className="listings-title">Job Opportunities</h2>
            <Link to="/europe/jobs" className="see-more-link">
              See More Jobs →
            </Link>
          </div>

          <div className="listings-grid">
            {europeJobs.slice(0, 3).map((job) => (
              <div key={job.id} className="listing-card">
                <h3 className="listing-title">{job.title}</h3>
                <div className="listing-meta">
                  <span className="listing-company">{job.company}</span>
                  <span className="listing-location">{job.location}</span>
                  <span className="listing-type">{job.type}</span>
                </div>
                <p className="listing-description">{job.description}</p>
                <div className="listing-footer">
                  <span className="listing-posted">Posted: {job.posted}</span>
                  <Link
                    to={`/europe/jobs/${job.id}`}
                    className="view-details-link"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="listings-section">
          <div className="listings-header">
            <h2 className="listings-title">Internship Programs</h2>
            <Link to="/europe/internships" className="see-more-link">
              See More Internships →
            </Link>
          </div>

          <div className="listings-grid">
            {europeInternships.slice(0, 3).map((internship) => (
              <div key={internship.id} className="listing-card">
                <h3 className="listing-title">{internship.title}</h3>
                <div className="listing-meta">
                  <span className="listing-company">{internship.company}</span>
                  <span className="listing-location">
                    {internship.location}
                  </span>
                  <span className="listing-type">{internship.duration}</span>
                </div>
                <p className="listing-description">{internship.description}</p>
                <div className="listing-footer">
                  <span className="listing-posted">
                    Posted: {internship.posted}
                  </span>
                  <Link
                    to={`/europe/internships/${internship.id}`}
                    className="view-details-link"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
