import "../styles/global.css";
import "../styles/donate.css";
import { useEffect, useState } from "react";

interface UPI {
  id: string;
  name: string;
  qr: string;
}

const upi: UPI = {
  name: "Shri Sidheshwar Shiv Mandir Charitable Trust",
  id: "9464317490m@pnb",
  qr: new URL("../data/donate/qr/image.png", import.meta.url).href,
};

const Donate = () => {
  const [copied, setCopied] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const mobile =
      /Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(
        navigator.userAgent
      );
    setIsMobile(mobile);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(upi.id).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  // Open UPI app only on mobile
  const handleUPIClick = () => {
    if (!isMobile) return;

    // Use the standard upi:// scheme for better compatibility
    const upiUrl = `upi://pay?pa=${encodeURIComponent(upi.id)}&pn=${encodeURIComponent(upi.name)}&cu=INR`;

    try {
      window.location.href = upiUrl;
    } catch (error) {
      console.error("Could not open UPI app:", error);
      alert("Could not open UPI apps automatically. Please copy the UPI ID and use your preferred app.");
    }
  };

  useEffect(() => {
    document.title = "Donate - Shri Sidheshwar Shiv Mandir";
  }, []);

  return (
    <div className="donate-page">
      <h1>Support Our Initiative</h1>

      {/* ===============================
          UPI PAYMENT HIGHLIGHT
      ================================ */}
      <section className="upi-section">
        <h2>UPI Payment</h2>

        <div className="upi-highlight">
          {/* QR / Tap area */}
          <div
            className={`upi-qr ${isMobile ? "clickable" : ""}`}
            onClick={handleUPIClick}
            role={isMobile ? "button" : undefined}
            tabIndex={isMobile ? 0 : -1}
          >
            <img src={upi.qr} alt="UPI QR Code" />
            <span>
              {isMobile ? "Tap to open UPI app" : "Scan to Donate"}
            </span>
          </div>

          <div className="upi-info">
            <h3>{upi.name}</h3>

            <p className="upi-desc">
              Your donation supports temple rituals, havan ceremonies, and
              community service activities.
            </p>

            <div className="upi-pill" onClick={handleCopy}>
              <span>{upi.id}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5h6a2 2 0 012 2v12a2 2 0 01-2 2H9a2 2 0 01-2-2V7a2 2 0 012-2z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5a3 3 0 006 0"
                />
              </svg>
            </div>

            <span className={`copied ${copied ? "show" : ""}`}>
              Copied to Clipboard!
            </span>
          </div>
        </div>
      </section>

      {/* ===============================
          HAVAN SAMAGRI & PARTICIPATION GUIDELINES
      ================================ */}
      <section className="guidelines-section">
        <h2>Havan Samagri & Participation Guidelines</h2>

        <p>
          For the convenience of all devotees, the following materials and
          guidelines are provided for participation in the daily Havan during
          the <strong>1101 Kund Rudra Mahayagya</strong>. Contributions are
          voluntary and may be made according to devotion and capacity.
        </p>

        <h3>Daily Havan Samagri (Per Kund – Approximate)</h3>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Mauli (Sacred Thread)</td><td>1</td></tr>
            <tr><td>Roli</td><td>1</td></tr>
            <tr><td>Desi Ghee</td><td>2 KG</td></tr>
            <tr><td>Havan Samagri</td><td>3 KG</td></tr>
            <tr><td>Black Sesame Seeds</td><td>3 KG</td></tr>
            <tr><td>White Sesame Seeds</td><td>2 KG</td></tr>
            <tr><td>Barley</td><td>3 KG</td></tr>
            <tr><td>Bhimseni Camphor</td><td>200 Gram</td></tr>
            <tr><td>Betel Nuts (Supari)</td><td>11 pieces</td></tr>
            <tr><td>Samidha (Wood Sticks)</td><td>10 KG</td></tr>
            <tr><td>Guggal</td><td>100 Gram</td></tr>
            <tr><td>Loban</td><td>100 Gram</td></tr>
            <tr><td>Sugar</td><td>1 KG</td></tr>
            <tr><td>Rice</td><td>2 KG</td></tr>
            <tr><td>Matchbox</td><td>1 packet</td></tr>
            <tr><td>Almonds</td><td>100 Gram</td></tr>
            <tr><td>Dry Dates</td><td>250 Gram</td></tr>
            <tr><td>Sogi</td><td>100 Gram</td></tr>
            <tr><td>Coconut (Gari Gola)</td><td>1 per participant</td></tr>
            <tr><td>Dry Coconut</td><td>1 per participant</td></tr>
            <tr><td>Cloth (any color)</td><td>2 meters</td></tr>
          </tbody>
        </table>
        <br />
        <h3>Essential items to bring on Havan Day</h3>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Puja Thali</td><td>1 per participant</td></tr>
            <tr><td>Ghee Container</td><td>2 KG approx.</td></tr>
            <tr><td>Small Water Pot (Gadvi)</td><td>1 per participant</td></tr>
            <tr><td>Sitting Mat (Aasan)</td><td>1 per participant</td></tr>
            <tr><td>Ghee Lamp & Cotton Wicks</td><td>For Aarti</td></tr>
            <tr><td>Sweets</td><td>1 KG approx.</td></tr>
            <tr><td>Fruits</td><td>As per personal wish</td></tr>
          </tbody>
        </table>

        <br />
        <h3>Guidelines & Dress Code</h3>
        <table>
          <thead>
            <tr>
              <th>Aspect</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Men</td><td>Dhoti is mandatory</td></tr>
            <tr><td>Women</td><td>Suit or Saree (Yellow preferred)</td></tr>
            <tr><td>Langar Contribution</td><td>Optional ration items may be offered</td></tr>
          </tbody>
        </table>
        <br/>
        <p>
          All contributions are voluntary and offered according to personal faith
          and capacity. Thank you for supporting this sacred initiative.
        </p>
      </section>
    </div>
  );
};

export default Donate;
