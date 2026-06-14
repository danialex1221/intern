import { FUNCTIONS, useDocumentMeta } from "./shared";

const DEPARTMENTS = [
  { icon: "👥", title: "Population Statistics", description: "Census, demographics, household and vital statistics." },
  { icon: "💰", title: "Economic Statistics", description: "CPI, GDP, trade, prices and national accounts." },
  { icon: "🌾", title: "Agricultural Statistics", description: "Crop, livestock, land use and farm surveys." },
  { icon: "🏥", title: "Social Statistics", description: "Welfare, education, health and labour indicators." },
  { icon: "🗃️", title: "Data Processing", description: "Survey data cleaning, validation and tabulation." },
  { icon: "💻", title: "IT Department", description: "Systems, web app development, databases and analytics." },
];

function About() {
  useDocumentMeta("About ESS - Ethiopian Statistics Service", "Learn about the Ethiopian Statistics Service and its role in Ethiopia.");

  return (
    <>
      <section className="section-pad">
        <div className="ess-container">
          <div className="hero-panel px-6 py-12 md:px-10 md:py-14">
            <span className="section-kicker">About ESS</span>
            <h1 className="mt-4 text-4xl font-black leading-tight md:text-5xl">Ethiopian Statistics Service</h1>
            <p className="section-copy mt-4 text-primary-foreground/88">
              The Ethiopian Statistics Service is the central government institution mandated to produce, coordinate and disseminate the official statistics of Ethiopia.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="ess-container grid gap-6 md:grid-cols-2">
          <div className="feature-card">
            <div className="text-xs font-bold text-primary">MISSION</div>
            <h2 className="mt-2 text-2xl font-bold">Our Mission</h2>
            <p className="mt-3 text-muted-foreground">To produce and disseminate reliable, timely, relevant and accessible statistical data and information that satisfies the needs of users.</p>
          </div>
          <div className="feature-card">
            <div className="text-xs font-bold text-primary">VISION</div>
            <h2 className="mt-2 text-2xl font-bold">Our Vision</h2>
            <p className="mt-3 text-muted-foreground">To be a center of excellence in producing and disseminating quality official statistics that supports Ethiopia's socio-economic development.</p>
          </div>
          <div className="feature-card md:col-span-2">
            <div className="text-xs font-bold text-primary">CORE VALUES</div>
            <h2 className="mt-2 text-2xl font-bold">What We Stand For</h2>
            <div className="mt-4 grid gap-4 text-center text-sm sm:grid-cols-2 md:grid-cols-4">
              {["Integrity", "Professionalism", "Confidentiality", "Impartiality", "Transparency", "Quality", "Customer Focus", "Innovation"].map((value) => (
                <div key={value} className="rounded-md border border-border bg-primary-soft/50 p-3 font-medium text-primary">{value}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-primary-soft/40">
        <div className="ess-container">
          <span className="section-kicker text-primary">Responsibilities</span>
          <h2 className="section-title mt-3">Core Functions</h2>
          <p className="section-copy mt-2">Key responsibilities of the Ethiopian Statistics Service</p>
          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {FUNCTIONS.map((fn) => (
              <li key={fn} className="feature-card flex items-start gap-3 p-4">
                <span className="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">✓</span>
                <span className="text-sm">{fn}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad">
        <div className="ess-container">
          <span className="section-kicker text-primary">Program structure</span>
          <h2 className="section-title mt-3">Departments Hosting Interns</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {DEPARTMENTS.map((department) => (
              <div key={department.title} className="feature-card transition hover:-translate-y-1">
                <div className="text-3xl">{department.icon}</div>
                <h3 className="mt-3 font-semibold text-primary">{department.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{department.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
