import { Link } from "react-router-dom";

export default function Footer() {
  return (
    /* CHANGED: Swapped mt-16 to mt-auto for a perfect layout dock, and forced the entire background to bg-primary blue */
    <footer className="mt-auto border-t border-white/10 bg-primary text-white">
      <div className="ess-container grid gap-8 py-12 md:grid-cols-4">
        
        {/* Column 1: Portal branding */}
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-primary font-bold shadow-sm">
              ESS
            </div>
            <span className="font-bold text-white">ESS Internship Portal</span>
          </div>
          <p className="mt-3 text-sm text-white/80 leading-relaxed">
            Ethiopian Statistics Service — the official institution for national statistics in Ethiopia.
          </p>
        </div>

        {/* Column 2: Quick Navigation Links */}
        <div>
          <h4 className="text-sm font-semibold text-white border-b border-white/10 pb-1 mb-3">🔗 Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/about" className="transition-colors hover:text-secondary">ℹ️ About ESS</Link></li>
            <li><Link to="/apply" className="transition-colors hover:text-secondary">📝 Apply for Internship</Link></li>
            <li><Link to="/status" className="transition-colors hover:text-secondary">🔍 Check Application Status</Link></li>
            <li><Link to="/contact" className="transition-colors hover:text-secondary">📞 Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Structural Departments */}
        <div>
          <h4 className="text-sm font-semibold text-white border-b border-white/10 pb-1 mb-3">🏢 Departments</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>👥 Population Statistics</li>
            <li>💰 Economic Statistics</li>
            <li>🌾 Agricultural Statistics</li>
            <li>🏥 Social Statistics</li>
            <li>🗃️ Data Processing</li>
            <li>💻 IT Department</li>
          </ul>
        </div>

        {/* Column 4: Institutional Core Location info */}
        <div>
          <h4 className="text-sm font-semibold text-white border-b border-white/10 pb-1 mb-3">📍 Head Office</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="leading-tight">📍 Churchill Road, Addis Ababa, Ethiopia</li>
            <li>📮 P.O. Box 1143</li>
            <li>📞 +251-11-111-2345</li>
            <li className="truncate">✉️ internship@ess.gov.et</li>
          </ul>
        </div>

      </div>

      {/* Bottom Sub-Bar Section */}
      {/* CHANGED: bg-black/15 slightly darkens the blue behind the copyright text for enhanced contrast */}
      <div className="border-t border-white/10 bg-black/15">
        <div className="ess-container flex flex-col items-center justify-center py-4 text-center text-xs text-white/60">
          <span>© {new Date().getFullYear()} Ethiopian Statistics Service. All rights reserved.</span>
          {/* REMOVED: The government portal text span has been stripped away */}
        </div>
      </div>
    </footer>
  );
}