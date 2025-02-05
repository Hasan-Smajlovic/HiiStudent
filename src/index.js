import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const popular_jobs = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Google",
    location: "Mountain View, CA",
    type: "Full-time",
    description:
      "Google is seeking a software engineer to join our team. The ideal candidate will have experience with JavaScript, React, and Node.js.",
    date: "Due: 2021-10-01",
  },
  {
    id: 2,
    title: "Product Manager",
    company: "Facebook",
    location: "Menlo Park, CA",
    type: "Full-time",
    description:
      "Facebook is looking for a product manager to help drive the development of our next-generation products.",
    date: "Due: 2021-10-02",
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "Amazon",
    location: "Seattle, WA",
    type: "Full-time",
    description:
      "Amazon is hiring a data scientist to work on our machine learning and artificial intelligence projects.",
    date: "Due: 2021-10-03",
  },
  {
    id: 4,
    title: "UX Designer",
    company: "Apple",
    location: "Cupertino, CA",
    type: "Full-time",
    description:
      "Apple is seeking a UX designer to help create the next generation of user interfaces for our products.",
    date: "Due: 2021-10-04",
  },
];

function App() {
  return (
    <div>
      <Header />
      <WelcomeText />
      <JobList />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <nav className="navbar">
      <img src="https://via.placeholder.com/150" alt="logo" />
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

function WelcomeText() {
  return (
    <div className="welcome-container">
      <h1>Welcome to React, User</h1>
      <div className="line"></div>
    </div>
  );
}

function JobList() {
  return (
    <>
      <div className="joblist-container">
        {popular_jobs.map((job) => (
          <div className="job-cards">
            <Jobs
              key={job.id}
              title={job.title}
              company={job.company}
              location={job.location}
              type={job.type}
              description={job.description}
              date={job.date}
            />
            <button className="apply-button">Apply</button>
          </div>
        ))}
      </div>
      <div className="line"></div>
    </>
  );
}

function Jobs({ title, company, location, type, description, date }) {
  return (
    <div className="job">
      <h2>{title}</h2>
      <h3>{company}</h3>
      <p>
        <b>{location}</b>
      </p>
      <p>
        <b>{type}</b>
      </p>
      <p>{description}</p>
      <p>
        <b>{date}</b>
      </p>
    </div>
  );
}
function Footer() {
  return <footer className="footer">&copy; 2021</footer>;
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
