import type { Trustee } from "../data/trustees"
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa"

interface Props {
  trustee: Trustee
}

const TrusteeCard = ({ trustee }: Props) => {
  return (
    <div className="trustee-card">
      <div className="avatar">
        <img src={trustee.image} alt={trustee.name} />
      </div>

      <h4>{trustee.name}</h4>
      <h5>{trustee.role}</h5>
      {trustee.bio && <p className="trustee-bio">{trustee.bio}</p>}

      <div className="socials">
        {trustee.facebook && (
          <a href={trustee.facebook} target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
        )}
        {trustee.instagram && (
          <a href={trustee.instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        )}
        {trustee.linkedin && (
          <a href={trustee.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        )}
        {trustee.phone && (
          <a href={`tel:${trustee.phone}`}>
            <FaPhone />
          </a>
        )}
      </div>
    </div>
  )
}

export default TrusteeCard
