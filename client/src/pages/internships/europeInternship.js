import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../sections/europe/europePage.css"; // Reuse the same styles

export default function EuropeInternshipsPage() {
  return (
    <div className="europe-page">
      <Navbar />
      <main className="europe-main">
        <h1 className="europe-title">All Internship Programs in Europe</h1>
        {/* Full internships list would go here */}
      </main>
      <Footer />
    </div>
  );
}
