import { Link } from "react-router-dom";
import { HIGHLIGHTS, STATS, useDocumentMeta } from "./shared";

function Home() {
  useDocumentMeta(
    "ESS Internship Portal - Home",
    "Apply for the Ethiopian Statistics Service internship program."
  );

  return (
    <>
      {/* Hero Section */}
      <section className="section-pad">
        <div className="ess-container">
          <div className="hero-panel">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,185,74,0.22),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.12),transparent_26%)]" />

            <div className="relative grid items-center gap-10 px-6 py-14 md:grid-cols-2 md:px-10 md:py-16">
              <div>
                <span className="section-kicker">
                  Official Government Portal
                </span>

                <h1 className="mt-4 max-w-xl text-4xl font-black leading-tight md:text-5xl">
                  Ethiopian Statistics Service Internship Portal
                </h1>

                <p className="section-copy mt-4 text-primary-foreground/88">
                  Join the Ethiopian Statistics Service, the national
                  institution responsible for producing the official statistics
                  that guide Ethiopia's policy and development.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {/* UPDATED APPLY BUTTON STYLE */}
                  <Link
                    to="/apply"
                    className="inline-flex items-center justify-center rounded-md border border-white/25 bg-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/15"
                  >
                    Apply Now
                  </Link>

                  <Link
                    to="/status"
                    className="inline-flex items-center justify-center rounded-md border border-white/25 bg-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/15"
                  >
                    Check Status
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {STATS.map((stat) => (
                  <div key={stat.label} className="metric-card">
                    <div className="text-3xl font-black text-white">
                      {stat.value}
                    </div>

                    <div className="mt-1 text-sm text-white/80">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-pad">
        <div className="ess-container grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <span className="section-kicker text-primary">
              Who We Are
            </span>

            <h2 className="section-title mt-3 text-gray-900">
              About the Ethiopian Statistics Service
            </h2>

            <p className="section-copy mt-4">
              Established as the central statistical authority of Ethiopia,
              ESS collects, compiles, analyzes and disseminates reliable,
              timely and relevant statistical data.
            </p>

            <Link to="/about" className="btn-outline mt-6">
              Learn More About ESS
            </Link>
          </div>

          <div className="feature-card">
            <h3 className="text-lg font-semibold">
              Why Intern at ESS?
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-muted-foreground list-disc pl-5">
              <li>Contribute to real national data projects</li>
              <li>Learn statistical software and methodology</li>
              <li>Build a career in public service and data</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-pad bg-primary-soft/40">
        <div className="ess-container">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-kicker text-primary">
              Program Benefits
            </span>

            <h2 className="section-title mt-3">
              Internship Highlights
            </h2>

            <p className="section-copy mx-auto mt-3 text-center">
              What you'll gain from the ESS Internship Program.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {HIGHLIGHTS.map((highlight) => (
              <div
                key={highlight.title}
                className="feature-card transition hover:-translate-y-1"
              >
                <h3 className="text-lg font-semibold text-primary">
                  {highlight.title}
                </h3>

                <p className="mt-3 text-sm text-muted-foreground">
                  {highlight.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;