import { Link } from "react-router-dom";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import "./bosniaPage.css";
import { useState, useEffect } from "react";
import { getAnnouncements } from "../../../services/getAnnouncements";

export default function BosniaPage() {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const getInternships = async () => {
      const internships = await getAnnouncements();
      setAnnouncements(internships);
    };
    getInternships();
  }, [setAnnouncements]);

  const intern = announcements.filter(
    (internships) =>
      internships.type === "internship" && internships.location === "bih"
  );
  const jobs = announcements.filter(
    (jobs) => jobs.type === "job" && jobs.location === "bih"
  );

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
            {jobs.map((job) => (
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
            {intern.map((internship) => (
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
                    Posted: {internship.createdAt}
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
