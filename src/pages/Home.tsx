import { useState, useRef, useEffect } from "react"
import "../styles/home.css"

const galleryImages = [
  new URL("../assets/image1.jpg", import.meta.url).href,
  new URL("../assets/image8.jpg", import.meta.url).href,
  new URL("../assets/image2.png", import.meta.url).href,
  new URL("../assets/image10.png", import.meta.url).href,
  new URL("../assets/image3.jpg", import.meta.url).href,
  new URL("../assets/image4.jpg", import.meta.url).href,
  new URL("../assets/image5.jpg", import.meta.url).href,
  new URL("../assets/image6.jpeg", import.meta.url).href,
  new URL("../assets/image7.jpeg", import.meta.url).href,
  new URL("../assets/image9.png", import.meta.url).href
]

const Home = () => {
  const [index, setIndex] = useState(0)
  const touchStartX = useRef<number | null>(null)

  const next = () =>
    setIndex(i => (i === galleryImages.length - 1 ? 0 : i + 1))

  const prev = () =>
    setIndex(i => (i === 0 ? galleryImages.length - 1 : i - 1))

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartX.current) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (diff > 40) next()
    if (diff < -40) prev()
    touchStartX.current = null
  }

  useEffect(() => {
    document.title = "Shri Sidheshwar Shiv Mandir";
    galleryImages.forEach(src => {
      const img = new Image()
      img.src = src
    })
  }, []);
  return (
    <div className="home">

      {/* HERO */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${galleryImages[8]})` }}
      >
        <div className="hero-overlay">
          <h1>1101 Kundiya Rudra Maha Yagya</h1>
          <p>
            A Grand Vedic Anushthan for
            <br />
            Sarv Kalyan & Vishv Shanti
            <br />
            19 – 25 February 2026
          </p>
        </div>
      </section>

      {/* IMAGE + TEXT */}
      <section className="split">
        <img src={galleryImages[2]} alt="Maha Yagya at Shri Sidheshwar Shiv Mandir" />
        <div className="split-text">
          <h2>About the Maha Yagya</h2>
          <p>
            The 1101 Kundiya Rudra Maha Yagya is a rare and sacred Vedic ritual,
            undertaken with the solemn resolve of universal welfare —
            <strong> “Sarv Kalyan”</strong>. Organised under the divine guidance of
            Swami Udaigiri ji Maharaj, this Maha Yagya is being performed for the
            spiritual upliftment of society, the prosperity of the nation,
            and the establishment of peace across the world.
          </p>
          <p>
            For seven auspicious days, learned Acharyas will chant powerful
            Vedic mantras simultaneously in 1101 sacred kunds, creating a
            spiritual atmosphere charged with devotion, discipline, and
            divine energy.
          </p>
        </div>
      </section>

      <section className="split reverse">
        <img src={galleryImages[9]} alt="Vedic Rituals and Spiritual Practices" />
        <div className="split-text">
          <h2>Historical Legacy & Spiritual Significance</h2>
          <p>
            In 1925, a rare and grand Rudra Mahayagya was organized at Kaalinaath Kaleshwar Terthkshetra, Himachal Pradesh, becoming a landmark event in the spiritual history of Sanatan Dharma. Performed with strict adherence to Vedic scriptures and collective participation of saints, scholars, and thousands of devotees, the Mahayagya was undertaken for Lok Kalyan (universal welfare), spiritual purification, and harmony between humanity and nature. Its scale, discipline, and devotion left a lasting imprint on generations to come.
          </p>
          <p>
            Spiritually, such Mahayagyas are believed to purify the environment, dispel negative energies, and invoke divine blessings for peace and societal well-being. The legacy of the 1925 Teertheshwar Mahayagya continues to inspire modern sacred initiatives, including the 1101 Kund Shri Mahayagya, preserving the continuity and timeless wisdom of Vedic traditions.
          </p>
        </div>
      </section>

      {/* QUICK DETAILS */}
      <section className="details">
        <div className="detail-card">📅 19 – 25 February 2026</div>
        <div className="detail-card">🔥 1101 Sacred Kunds</div>
        <div className="detail-card">🙏 Open to All Devotees</div>
      </section>

      {/* VENUE */}
      <section className="venue split-text">
        <h2 className="split-text">Venue</h2>
        <p>
          Shri Sidheshwar Shiv Mandir<br />
          Bassi Gulam Hussain, Hoshiarpur, Punjab
        </p>

        <div className="map">
          <iframe
            title="Shri Sidheshwar Shiv Mandir Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.011023023119!2d75.95012782576643!3d31.55131209561248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391ae25de6e46a11%3A0xa1e7d352098d0f07!2sBassi%20Gulam%20Hussain%2C%20Punjab%20146021!5e0!3m2!1sen!2sin!4v1767628855735!5m2!1sen!2sin"
            loading="lazy"
          />
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery split-text">
        <h2 className="split-text">Divine Glimpses</h2>

        <div
          className="carousel"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button className="nav left" onClick={prev}>‹</button>

          <img src={galleryImages[index]} alt="Maha Yagya Glimpses" />

          <button className="nav right" onClick={next}>›</button>
        </div>

        <div className="dots">
          {galleryImages.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </section>

    </div>
  )
}

export default Home
