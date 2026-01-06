import { useEffect } from "react";
import TrusteeCard from "../components/TrusteeCard"
import { trustees } from "../data/trustees"
import "../styles/trustees.css"

const Trustees = () => {
  useEffect(() => {
      document.title = "Trustees - Shri Sidheshwar Shiv Mandir";
    }, []);
  return (
    <div className="trustees-page">
      <h1>Our Trustees</h1>

      <div className="trustees-grid">
        {trustees.map((t, i) => (
          <TrusteeCard key={i} trustee={t} />
        ))}
      </div>

      <h2 className="map-title">Our Location</h2>

      <div className="map-container">
        <iframe
          title="Trust Location"
          src="https://www.google.com/maps?q=Hoshiarpur,Punjab&output=embed"
          loading="lazy"
        />
      </div>
    </div>
  )
}

export default Trustees
