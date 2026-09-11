import { Leaf, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import "./Footer.css";

const contactDetails = [
  {
    value: (
      <>
         Leemansstraat 2, 4251 LD - Werkendam, the Netherlands
      </>
    ),
    icon: MapPin,
  },
  {
    value: "benefertico@gmail.com",
    href: "mailto:benefertico@gmail.com",
    icon: Mail,
  },
  {
    value: "+31183505268",
    href: "tel:+31183505268",
    icon: Phone,
  },
  // {
  //   value: "License No.: LCFWD2026070863",
  //   icon: BadgeCheck,
  // },
  // {
  //   value: "Importer-Exporter Code: AZMPP1640E",
  //   icon: FileText,
  // },
];

export default function Footer() {
  return (
    <footer id="contact" className="benfertico-footer">
      <div className="benfertico-footer-inner">
        <div className="benfertico-footer-grid">
          <div className="benfertico-company">
            <div className="benfertico-company-heading">
              <span className="benfertico-leaf-icon">
                <Leaf size={24} strokeWidth={1.8} />
              </span>

              <div>
                <p className="benfertico-company-label">
                  Import, Packed &amp; Marketed by:
                </p>

                <p className="benfertico-company-name">
                 Benefertico Nutrition
                </p>
              </div>
            </div>

            <p className="benfertico-description">
            Advanced fertilizer formulations designed to deliver balanced nutrition, stronger crop growth, and consistent results.
            </p>
          </div>

          <nav className="benfertico-navigation" aria-label="Footer navigation">
            <Link to="/products">Products</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          <div className="benfertico-contact">
            <h2>Contact</h2>

            <div className="benfertico-contact-list">
              {contactDetails.map((detail, index) => {
                const Icon = detail.icon;

                return (
                  <div
                    key={index}
                    className="benfertico-contact-item"
                  >
                    <Icon
                      size={19}
                      strokeWidth={1.8}
                      className="benfertico-contact-icon"
                    />

                    <div>
                      {detail.href ? (
                        <a href={detail.href}>{detail.value}</a>
                      ) : (
                        <span>{detail.value}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
