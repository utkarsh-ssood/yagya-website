import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const scrollYRef = useRef(0);
  const navLinksRef = useRef<HTMLDivElement | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);

  // ==============================
  // Scroll lock + Escape key
  // ==============================
  useEffect(() => {
    if (open) {
      scrollYRef.current = window.scrollY || 0;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
      document.body.classList.add("nav-open");
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      document.body.classList.remove("nav-open");
      window.scrollTo(0, scrollYRef.current);
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      document.body.classList.remove("nav-open");
    };
  }, [open]);

  // ==============================
  // Click outside to close
  // ==============================
  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Node;
      if (
        navLinksRef.current &&
        hamburgerRef.current &&
        !navLinksRef.current.contains(target) &&
        !hamburgerRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  return (
    <nav className="navbar">
      {/* Brand → Home */}
      <Link
        to="/"
        className="nav-brand"
        onClick={() => setOpen(false)}
        aria-label="Go to Home"
      >
        Shri Sidheshwar Shiv Mandir Charitable Trust (Regd.)
      </Link>

      {/* Links */}
      <div ref={navLinksRef} className={`nav-links ${open ? "open" : ""}`}>
        <Link to="/" className="nav-link" onClick={() => setOpen(false)}>
          Home
        </Link>
        <Link to="/about" className="nav-link" onClick={() => setOpen(false)}>
          About
        </Link>
        <Link
          to="/register"
          className="donate-btn"
          onClick={() => setOpen(false)}
        >
          Register
        </Link>
        <Link
          to="/donate"
          className="donate-btn"
          onClick={() => setOpen(false)}
        >
          Donate
        </Link>
      </div>

      {/* High-visibility Hamburger */}
      <button
        ref={hamburgerRef}
        className={`hamburger-btn ${open ? "open" : ""}`}
        onClick={() => setOpen(prev => !prev)}
        aria-label="Toggle navigation menu"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
};

export default Navbar;
