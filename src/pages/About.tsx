import "../styles/global.css";
import "../styles/about.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About - Shri Sidheshwar Shiv Mandir";
  }, []);

  return (
    <div className="about-page">
      <h1>About Us</h1>

      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          Shri Sidheshwar Shiv Mandir Charitable Trust (Regd.), Bassi Gulam
          Hussain, Hoshiarpur, Punjab, is a spiritually driven and socially
          committed organization dedicated to the service of humanity through
          the principles of Sanatan Dharma. The Trust functions with the sacred
          resolve of “Shiv Sankalpam Astu” — Sarv Kalyan (Welfare of All).
        </p>
      </section>

      <section className="about-section">
        <h2>Our Journey</h2>
        <p>
          With the divine blessings of Brahmleen Shri Mahant Swami Basant Giri Ji
          Maharaj, and under the active supervision and spiritual guidance of
          his disciple and successor Swami Udaigiri Ji Maharaj, the Trust has
          been continuously engaged in uplifting the spiritual, social, and
          humanitarian well-being of society. Special emphasis has been laid on
          serving the needy and under-served sections of the surrounding areas.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Vision</h2>
        <p>
          The Trust regularly organizes Yajnas, religious ceremonies, and
          spiritual activities with the primary objective of spiritual
          awakening, moral upliftment, and the promotion of eternal values
          rooted in Sanatan Dharma. Alongside religious pursuits, the Trust
          remains committed to social responsibility, humanitarian service, and
          community welfare.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          Guided by the belief that ancient Vedic traditions hold solutions to
          modern challenges, the Trust seeks to contribute toward peace,
          harmony, and environmental and spiritual balance. In times of
          increasing global unrest, the organization looks to the age-old wisdom
          of saints and yogis who, since time immemorial, have prayed and
          worked for Vishv Shanti (world peace) and protection from natural
          calamities.
        </p>
      </section>

      <section className="about-section">
        <h2>Current Initiative</h2>
        <p>
          In this spirit, Swami Udaigiri Ji Maharaj has taken a Bheeshan Sankalp
          to organize the <strong>1101 Kundiya Rudra Mahayagya</strong> from 19
          February to 25 February 2026 at the Shri Sidheshwar Shiv Mandir
          premises. The Mahayagya is being conducted solely for the welfare of
          all people (Sarv Kalyan), the well-being of the nation, and the
          establishment of peace across the world.
        </p>
      </section>
    </div>
  );
};

export default About;
