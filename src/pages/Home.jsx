import { Link } from "react-router-dom";
import { HIGHLIGHTS, STATS, useDocumentMeta } from "./shared";

function Home() {
  useDocumentMeta("ESS Internship Portal - Home", "Apply for the Ethiopian Statistics Service internship program.");

  return (
    <>
      <section className="section-pad">
        <div className="ess-container">
          <div className="hero-panel">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,185,74,0.22),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.12),transparent_26%)]" />
            <div className="relative grid items-center gap-10 px-6 py-14 md:grid-cols-2 md:px-10 md:py-16">
              <div>
                <span className="section-kicker">Official Government Portal</span>
                <h1 className="mt-4 max-w-xl text-4xl font-black leading-tight md:text-5xl">
                  Ethiopian Statistics Service Internship Portal
                </h1>
                <p className="section-copy mt-4 text-primary-foreground/88">
              Join the Ethiopian Statistics Service, the national institution responsible for producing the official statistics that guide Ethiopia's policy and development.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to="/apply" className="btn-primary bg-accent text-accent-foreground hover:opacity-100">📝 Apply Now</Link>
                  <Link to="/status" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/15">🔍 Check Status</Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {STATS.map((stat) => (
                  <div key={stat.label} className="metric-card">
                    <div className="text-3xl font-black text-white">{stat.value}</div>
                    <div className="mt-1 text-sm text-white/78">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="ess-container grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <span className="section-kicker text-primary">Who we are</span>
            <h2 className="section-title mt-3 text-foreground">About the Ethiopian Statistics Service</h2>
            <p className="section-copy mt-4">
              Established as the central statistical authority of Ethiopia, ESS collects, compiles, analyzes and disseminates reliable, timely and relevant statistical data.
            </p>
            <Link to="/about" className="btn-outline mt-6">Learn More About ESS</Link>
          </div>
          <div className="feature-card">
            <h3 className="text-lg font-semibold">Why intern at ESS?</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3"><span>✅</span>Contribute to real national data projects</li>
              <li className="flex gap-3"><span>✅</span>Learn statistical software and methodology</li>
              <li className="flex gap-3"><span>✅</span>Network with government professionals</li>
              <li className="flex gap-3"><span>✅</span>Build a career in public service and data</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad bg-primary-soft/40">
        <div className="ess-container">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-kicker text-primary">Program benefits</span>
            <h2 className="section-title mt-3">Internship Highlights</h2>
            <p className="section-copy mx-auto mt-3 text-center">What you'll get from the ESS internship program</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {HIGHLIGHTS.map((highlight) => (
              <div key={highlight.title} className="feature-card transition hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-2xl text-primary-foreground shadow-sm">{highlight.icon}</div>
                <h3 className="mt-4 font-semibold">{highlight.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{highlight.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="ess-container">
          <div className="hero-panel px-6 py-8 md:px-10">
            <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <h2 className="text-2xl font-bold text-white">Ready to start your internship journey?</h2>
              <p className="mt-2 text-white/82">Applications are open across all departments, including IT.</p>
            </div>
            <div className="flex gap-3">
              <Link to="/apply" className="btn-primary bg-accent text-accent-foreground">📝 Apply Now</Link>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/15">📞 Contact ESS</Link>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
