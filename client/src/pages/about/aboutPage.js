import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import "./aboutPage.css";

export default function AboutPage() {
  return (
    <div className="about-page">
      <Navbar />

      <main className="about-main">
        <section className="about-hero">
          <div className="about-hero-content">
            <h1 className="about-title">About HiiStudent</h1>
            <p className="about-subtitle">
              Connecting students with opportunities across Bosnia & Herzegovina
              and Europe
            </p>
          </div>
        </section>

        <section className="about-section">
          <div className="about-container">
            <h2 className="section-title">Our Mission</h2>
            <p className="section-text">
              HiiStudent was founded with a simple goal: to bridge the gap
              between students and career opportunities. We believe every
              student deserves access to quality jobs and internships, whether
              they're looking locally in Bosnia & Herzegovina or across Europe.
            </p>
          </div>
        </section>

        <section className="about-section bg-light">
          <div className="about-container">
            <h2 className="section-title">What We Offer</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.5 1.5 0 00-.82 1.317v6.294a1.5 1.5 0 00.828 1.349l.34.15a1.5 1.5 0 011.342 0l.087-.042a1.5 1.5 0 011.223 0l.087.042a1.5 1.5 0 001.342 0l.34-.15a1.5 1.5 0 00.83-1.35v-6.293a1.5 1.5 0 00-.83-1.35l-.34-.15a1.5 1.5 0 011.35-2.7l.34.15a4.5 4.5 0 012.48 4.042v6.294a4.5 4.5 0 01-2.48 4.049l-.34.15a4.5 4.5 0 01-4.026 0l-.087-.042a4.5 4.5 0 01-3.666 0l-.087.042a4.5 4.5 0 01-4.026 0l-.34-.15a4.5 4.5 0 01-2.48-4.049v-6.294a4.5 4.5 0 012.48-4.042l.34-.15a4.5 4.5 0 014.026 0l.087.042a4.5 4.5 0 013.666 0l.087-.042a4.5 4.5 0 014.026 0l.34.15a.75.75 0 00.65-1.352 56.129 56.129 0 00-4.78-2.589 1.5 1.5 0 01-.82-1.317V4.308c0-.587.336-1.119.83-1.35l.34-.15a1.5 1.5 0 011.342 0l.34.15c.494.231.83.763.83 1.35v.224z" />
                    <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                    <path d="M4.462 19.462c.42-.419.753-.89.991-1.393.118-.265.176-.552.176-.837v-1.27a1.5 1.5 0 00-.14-2.508 47.3 47.3 0 00-1.047-.392 48.454 48.454 0 01.02-4.285.75.75 0 01.461-.71 47.878 47.878 0 018.105-4.342.75.75 0 01.832 0 47.877 47.877 0 018.104 4.342.75.75 0 01.46.71c.035 1.442.121 2.87.255 4.286a48.004 48.004 0 01-5.133 3.16 1.5 1.5 0 00-.73 2.509 47.953 47.953 0 013.58 3.015.75.75 0 010 1.06.75.75 0 01-1.06 0 46.49 46.49 0 00-3.58-3.015 1.5 1.5 0 00-1.14 2.686 48.5 48.5 0 005.133 3.165.75.75 0 01-.255 1.286 48.4 48.4 0 01-7.666 3.282.75.75 0 01-.511 0 48.4 48.4 0 01-7.666-3.282.75.75 0 01-.255-1.286 48.5 48.5 0 005.133-3.165 1.5 1.5 0 00-1.14-2.686 46.49 46.49 0 00-3.58 3.015.75.75 0 01-1.06 0 .75.75 0 010-1.06z" />
                  </svg>
                </div>
                <h3 className="feature-title">Local Opportunities</h3>
                <p className="feature-text">
                  Direct access to jobs and internships in Bosnia & Herzegovina
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3.478 2.404a.75.75 0 00-.926.941l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.404z" />
                  </svg>
                </div>
                <h3 className="feature-title">European Network</h3>
                <p className="feature-text">
                  Connections with companies across European countries
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="feature-title">Career Guidance</h3>
                <p className="feature-text">
                  Resources and advice to help students make informed career
                  choices
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="about-container">
            <h2 className="section-title">Our Team</h2>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-image">
                  <div className="image-placeholder"></div>
                </div>
                <h3 className="member-name">John Smith</h3>
                <p className="member-position">Founder & CEO</p>
                <p className="member-bio">
                  With 10+ years in education technology, John created
                  HiiStudent to help students navigate the job market.
                </p>
              </div>

              <div className="team-member">
                <div className="member-image">
                  <div className="image-placeholder"></div>
                </div>
                <h3 className="member-name">Sarah Johnson</h3>
                <p className="member-position">Head of Partnerships</p>
                <p className="member-bio">
                  Sarah connects students with top employers across Bosnia and
                  Europe.
                </p>
              </div>

              <div className="team-member">
                <div className="member-image">
                  <div className="image-placeholder"></div>
                </div>
                <h3 className="member-name">Marko Petrovic</h3>
                <p className="member-position">Technical Lead</p>
                <p className="member-bio">
                  Marko ensures our platform provides the best experience for
                  students and employers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section bg-light">
          <div className="about-container">
            <h2 className="section-title">Join Our Mission</h2>
            <p className="section-text">
              Whether you're a student looking for opportunities or a company
              wanting to hire talented students, we'd love to hear from you.
            </p>
            <div className="cta-buttons">
              <a href="/auth" className="cta-button primary">
                Sign Up as Student
              </a>
              <a href="/company-register" className="cta-button secondary">
                Register Your Company
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
