import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import "../sections/europe/europePage.css"; // Reuse the same styles

export default function EuropeJobsPage() {
  return (
    <div className="europe-page">
      <Navbar />
      <main className="europe-main">
        <h1 className="europe-title">All Job Opportunities in Europe</h1>
        {/* Full jobs list would go here */}
      </main>
      <Footer />
    </div>
  );
}
