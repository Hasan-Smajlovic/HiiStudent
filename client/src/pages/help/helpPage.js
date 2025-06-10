import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import "./helpPage.css";

export default function HelpPage() {
  const [activeCategory, setActiveCategory] = useState('getting-started');

  const helpCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: '🚀',
      items: [
        {
          question: 'How do I create an account?',
          answer: 'Click on "Sign Up" in the top right corner and follow the registration process. You can sign up as either a student or an employer.'
        },
        {
          question: 'What are the different account types?',
          answer: 'We offer two account types: Student accounts for job seekers and Employer accounts for companies looking to hire.'
        },
        {
          question: 'Is there a mobile app available?',
          answer: 'Yes! Our platform is fully responsive on mobile browsers, and we also offer native apps for iOS and Android.'
        }
      ]
    },
    {
      id: 'students',
      title: 'For Students',
      icon: '🎓',
      items: [
        {
          question: 'How do I search for jobs?',
          answer: 'Use the search bar at the top of the Jobs page to filter by keywords, location, or job type. You can save searches for quick access later.'
        },
        {
          question: 'Can I apply directly through the platform?',
          answer: 'Yes, most listings allow you to apply directly. Some may redirect you to the company\'s career page for application.'
        },
        {
          question: 'How do I make my profile stand out?',
          answer: 'Complete all profile sections, add a professional photo, showcase projects, and get recommendations from professors or previous employers.'
        }
      ]
    },
    {
      id: 'employers',
      title: 'For Employers',
      icon: '💼',
      items: [
        {
          question: 'How do I post a job opening?',
          answer: 'After signing in as an employer, go to your dashboard and click "Post New Job". Fill in all required details and submit for approval.'
        },
        {
          question: 'What information should I include in my job posting?',
          answer: 'Be clear about responsibilities, requirements, benefits, and company culture. Detailed posts receive 3x more applications.'
        },
        {
          question: 'How can I attract top talent?',
          answer: 'Highlight unique benefits, showcase your company culture with photos/videos, and respond promptly to applicant inquiries.'
        }
      ]
    },
    {
      id: 'account',
      title: 'Account Settings',
      icon: '⚙️',
      items: [
        {
          question: 'How do I change my password?',
          answer: 'Go to Account Settings > Security. You\'ll need to verify your current password before setting a new one.'
        },
        {
          question: 'Can I delete my account?',
          answer: 'Yes, in Account Settings > Privacy. Note this action is permanent and will remove all your data from our systems.'
        },
        {
          question: 'How do notification preferences work?',
          answer: 'Customize which alerts you receive and how (email/platform) in the Notifications section of your account settings.'
        }
      ]
    }
  ];

  return (
    <div className="help-page">
      <Navbar />
      
      <main className="help-main">
        {/* Hero Section */}
        <section className="help-hero">
          <div className="hero-content">
            <h1 className="hero-title">Help Center</h1>
            <p className="hero-subtitle">
              Everything you need to know to get the most out of our platform
            </p>
            <div className="search-container">
              <input
                type="text"
                placeholder="Search help articles..."
                className="search-input"
              />
              <svg className="search-icon" viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
            </div>
          </div>
        </section>

        {/* Help Content */}
        <div className="help-container">
          {/* Sidebar Navigation */}
          <aside className="help-sidebar">
            <h3 className="sidebar-title">Help Categories</h3>
            <ul className="category-list">
              {helpCategories.map(category => (
                <li 
                  key={category.id}
                  className={`category-item ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <span className="category-icon">{category.icon}</span>
                  {category.title}
                </li>
              ))}
            </ul>
            
            <div className="sidebar-support">
              <h4>Still need help?</h4>
              <p>Our support team is available 24/7</p>
              <button className="contact-button">Contact Support</button>
            </div>
          </aside>

          {/* Main Content */}
          <div className="help-content">
            <h2 className="content-title">
              {helpCategories.find(cat => cat.id === activeCategory)?.icon}
              {helpCategories.find(cat => cat.id === activeCategory)?.title}
            </h2>
            
            <div className="faq-list">
              {helpCategories.find(cat => cat.id === activeCategory)?.items.map((item, index) => (
                <div key={index} className="faq-item">
                  <h3 className="faq-question">{item.question}</h3>
                  <p className="faq-answer">{item.answer}</p>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="quick-actions">
              <h3>Quick Actions</h3>
              <div className="action-cards">
                <Link to="/signup" className="action-card student">
                  <div className="card-icon">🎓</div>
                  <h4>Sign Up as Student</h4>
                  <p>Create your profile and start job hunting</p>
                </Link>
                <Link to="/signup?type=employer" className="action-card employer">
                  <div className="card-icon">💼</div>
                  <h4>Sign Up as Employer</h4>
                  <p>Post jobs and find candidates</p>
                </Link>
                <Link to="/jobs" className="action-card browse">
                  <div className="card-icon">🔍</div>
                  <h4>Browse Jobs</h4>
                  <p>Find your next opportunity</p>
                </Link>
                <Link to="/dashboard/post-job" className="action-card post">
                  <div className="card-icon">📝</div>
                  <h4>Post a Job</h4>
                  <p>Reach qualified candidates</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}