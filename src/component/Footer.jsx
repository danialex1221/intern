import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-auto bg-primary text-white">
      {/* Main Footer */}
      <div className="border-t border-white/10">
        <div className="ess-container grid gap-10 py-14 md:grid-cols-3">
          {/* Organization */}
          <div>
            <h2 className="text-2xl font-bold">
              ESS Internship Portal
            </h2>

            <p className="mt-1 text-sm text-white/70">
              Ethiopian Statistics Service
            </p>

          
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold border-b border-white/20 pb-2">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/"
                  className="transition hover:text-secondary"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="transition hover:text-secondary"
                >
                  About ESS
                </Link>
              </li>

              <li>
                <Link
                  to="/apply"
                  className="transition hover:text-secondary"
                >
                  Apply for Internship
                </Link>
              </li>

              <li>
                <Link
                  to="/status"
                  className="transition hover:text-secondary"
                >
                  Check Application Status
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="transition hover:text-secondary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-5 text-lg font-semibold border-b border-white/20 pb-2">
              Contact Us
            </h3>

            <div className="space-y-4 text-sm text-white/80">
              <div>
                <p className="font-semibold text-white">Head Office</p>
                <p>Churchill Road</p>
                <p>Addis Ababa, Ethiopia</p>
                <p>P.O. Box 1143</p>
              </div>

              <div>
                <p className="font-semibold text-white">Phone</p>
                <p>+251-11553112</p>
              </div>

              <div>
                <p className="font-semibold text-white">Email</p>
                 <p>info@ess.gov.et</p>
              </div>

              <div>
                <p className="font-semibold text-white">Working Hours</p>
                <p>Monday – Friday</p>
                <p>8:30 AM – 5:30 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="ess-container flex flex-col items-center justify-between gap-2 py-5 text-center text-sm text-white/70 md:flex-row">
          <p>
            © {new Date().getFullYear()} Ethiopian Statistics Service. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}