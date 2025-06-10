import { useState } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import "../jobs/europeJobsPage.css"; // Assuming you have a CSS file for styling

// Mock data - would normally come from props or API
const europeJobs = [
  {
    id: 1,
    title: "Software Engineer",
    company: "TechCorp EU",
    location: "Berlin, Germany",
    type: "Full-time",
    category: "Technology",
    posted: "2023-06-15",
    salary: "€70,000 - €90,000",
    description: "Join our engineering team to build innovative software solutions for the European market.",
  },
  {
    id: 2,
    title: "Marketing Manager",
    company: "EuroBrands",
    location: "Paris, France",
    type: "Full-time",
    category: "Marketing",
    posted: "2023-06-10",
    salary: "€60,000 - €80,000",
    description: "Lead our European marketing campaigns and strategy.",
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "Analytics Europe",
    location: "Amsterdam, Netherlands",
    type: "Remote",
    category: "Technology",
    posted: "2023-06-12",
    salary: "€75,000 - €95,000",
    description: "Work with big data to derive insights for our clients across Europe.",
  },
  {
    id: 4,
    title: "Product Designer",
    company: "DesignHub EU",
    location: "Stockholm, Sweden",
    type: "Contract",
    category: "Design",
    posted: "2023-06-18",
    salary: "€65,000 - €85,000",
    description: "Create beautiful user experiences for our European client base.",
  },
  {
    id: 5,
    title: "Financial Analyst",
    company: "EuroFinance",
    location: "Frankfurt, Germany",
    type: "Full-time",
    category: "Finance",
    posted: "2023-06-14",
    salary: "€55,000 - €75,000",
    description: "Analyze financial data and prepare reports for European markets.",
  },
];

export default function EuropeJobsPage() {
  const [filters, setFilters] = useState({
    search: "",
    location: "",
    type: "",
    category: ""
  });

  const locations = [...new Set(europeJobs.map(job => job.location))];
  const jobTypes = [...new Set(europeJobs.map(job => job.type))];
  const categories = [...new Set(europeJobs.map(job => job.category))];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const filteredJobs = europeJobs.filter(job => {
    return (
      job.title.toLowerCase().includes(filters.search.toLowerCase()) &&
      (filters.location === "" || job.location === filters.location) &&
      (filters.type === "" || job.type === filters.type) &&
      (filters.category === "" || job.category === filters.category)
    );
  });

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="europe-page">
      <Navbar />

      <main className="europe-main">
        {/* Hero Section */}
        <section className="jobs-hero">
          <div className="hero-content-section">
            <h1 className="hero-title">European Job Opportunities</h1>
            <p className="hero-subtitle">
              Discover your next career move across Europe's most dynamic cities
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="jobs-filter-section">
          <div className="filter-container">
            <div className="search-filter">
              <input
                type="text"
                name="search"
                placeholder="Search job titles..."
                value={filters.search}
                onChange={handleFilterChange}
                className="search-input"
              />
              <svg className="search-icon" viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
            </div>

            <div className="dropdown-filters">
              <select
                name="location"
                value={filters.location}
                onChange={handleFilterChange}
                className="filter-dropdown"
              >
                <option value="">All Locations</option>
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>

              <select
                name="type"
                value={filters.type}
                onChange={handleFilterChange}
                className="filter-dropdown"
              >
                <option value="">All Job Types</option>
                {jobTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>

              <select
                name="category"
                value={filters.category}
                onChange={handleFilterChange}
                className="filter-dropdown"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* Results Info */}
        <div className="results-info">
          <p>
            Showing <strong>{filteredJobs.length}</strong> {filteredJobs.length === 1 ? "job" : "jobs"}
            {filters.search || filters.location || filters.type || filters.category ? (
              <>
                {" "}matching <strong>
                  {filters.search && `"${filters.search}"`}
                  {filters.location && ` in ${filters.location}`}
                  {filters.type && ` of type ${filters.type}`}
                  {filters.category && ` in ${filters.category}`}
                </strong>
              </>
            ) : null}
          </p>
        </div>

        {/* Jobs List */}
        <section className="jobs-list-section">
          {filteredJobs.length > 0 ? (
            <div className="jobs-grid">
              {filteredJobs.map(job => (
                <div key={job.id} className="job-card">
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
                    <div className="job-details">
                      <div className="detail-item">
                        <svg className="detail-icon" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                        <span>{job.location}</span>
                      </div>
                      <div className="detail-item">
                        <svg className="detail-icon" viewBox="0 0 24 24">
                          <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z" />
                        </svg>
                        <span>{job.type}</span>
                      </div>
                      <div className="detail-item">
                        <svg className="detail-icon" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
                        </svg>
                        <span>{job.salary}</span>
                      </div>
                    </div>
                    <p className="job-description">{job.description}</p>
                    <div className="job-tags">
                      <span className="job-tag">{job.category}</span>
                    </div>
                  </div>
                  <div className="card-footer">
                    <span className="posted-date">Posted: {formatDate(job.posted)}</span>
                    <button className="apply-button">View & Apply</button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <svg className="no-results-icon" viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" />
              </svg>
              <h3>No jobs found matching your criteria</h3>
              <p>Try adjusting your filters or search for different terms</p>
              <button 
                className="reset-filters-button"
                onClick={() => setFilters({
                  search: "",
                  location: "",
                  type: "",
                  category: ""
                })}
              >
                Reset All Filters
              </button>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}