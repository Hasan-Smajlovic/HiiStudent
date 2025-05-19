import { Link } from "react-router-dom";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import "./bosniaPage.css";

// Mock data - replace with actual API calls
const jobListings = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechSolutions BH",
    location: "Sarajevo",
    type: "Full-time",
    posted: "2 days ago",
    description:
      "We're looking for a skilled frontend developer with React experience.",
  },
  {
    id: 2,
    title: "Marketing Specialist",
    company: "Adverta",
    location: "Banja Luka",
    type: "Part-time",
    posted: "1 week ago",
    description: "Join our marketing team to help grow our client base.",
  },
  {
    id: 3,
    title: "Data Analyst",
    company: "BH Analytics",
    location: "Mostar",
    type: "Full-time",
    posted: "3 days ago",
    description: "Analyze business data and provide insights to our clients.",
  },
];

const internshipListings = [
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "Softhouse BH",
    location: "Sarajevo",
    duration: "3 months",
    posted: "5 days ago",
    description:
      "Learn from our senior engineers while working on real projects.",
  },
  {
    id: 2,
    title: "Marketing Intern",
    company: "Digital BH",
    location: "Tuzla",
    duration: "2 months",
    posted: "1 week ago",
    description: "Gain hands-on experience in digital marketing campaigns.",
  },
  {
    id: 3,
    title: "Finance Intern",
    company: "BH Bank",
    location: "Zenica",
    duration: "6 months",
    posted: "2 days ago",
    description: "Assist our finance team with daily operations and reporting.",
  },
];

export default function BosniaPage() {
  return (
    <div className="bosnia-page">
      <Navbar />

      <main className="bosnia-main">
        <div className="bosnia-header">
          <h1 className="bosnia-title">Bosnia & Herzegovina Opportunities</h1>
          <p className="bosnia-subtitle">
            Find jobs and internships across Bosnia & Herzegovina
          </p>
        </div>

        <section className="listings-section">
          <div className="listings-header">
            <h2 className="listings-title">Job Opportunities</h2>
            <Link to="/bosnia/jobs" className="see-more-link">
              See More Jobs →
            </Link>
          </div>

          <div className="listings-grid">
            {jobListings.slice(0, 3).map((job) => (
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
                    to={`/bosnia/jobs/${job.id}`}
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
            <Link to="/bosnia/internships" className="see-more-link">
              See More Internships →
            </Link>
          </div>

          <div className="listings-grid">
            {internshipListings.slice(0, 3).map((internship) => (
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
                    to={`/bosnia/internships/${internship.id}`}
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
