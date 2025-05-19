import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import "../sections/bosnian/bosniaPage.css"; // Reuse the same styles

export default function BosniaJobsPage() {
  return (
    <div className="bosnia-page">
      <Navbar />
      <main className="bosnia-main">
        <h1 className="bosnia-title">
          All Job Opportunities in Bosnia & Herzegovina
        </h1>
        {/* Full jobs list would go here */}
      </main>
      <Footer />
    </div>
  );
}
