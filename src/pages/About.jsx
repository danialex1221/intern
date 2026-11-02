import { 
  Target, 
  Eye, 
  Diamond, 
  LineChart, 
  Building2, 
  Sprout, 
  Users, 
  HeartHandshake, 
  FileText, 
  Sliders, 
  Map, 
  Briefcase, 
  ShieldCheck, 
  BookOpen, 
  Server, 
  Share2 
} from "lucide-react";
import { FUNCTIONS, useDocumentMeta } from "./shared";

const DEPARTMENTS = [
  {
    title: "Price Statistics",
    icon: LineChart,
    description:
      "Collects consumer and producer price indices, inflation rates, and harmonized price data to support national policy and regional economic integration.",
  },
  {
    title: "Business Statistics",
    icon: Building2,
    description:
      "The department is responsible for collecting, producing, and compiling all non-agricultural economic activity statistics through surveys, censuses, and administrative records under the Economic Statistics Division.",
  },
  {
    title: "Agricultural Statistics",
    icon: Sprout,
    description:
      "Produces reliable agricultural, socio-economic, and environmental statistics using modern methods and innovation to support national development, food security, and evidence-based decision-making.",
  },
  {
    title: "Population Statistics",
    icon: Users,
    description:
      "Collects and compiles demographic and socio-economic statistics from censuses, surveys, and administrative sources to deliver reliable data to policymakers, researchers, and organizations.",
  },
  {
    title: "Social and Inclusive Statistics",
    icon: HeartHandshake,
    description:
      "Collects, compiles, and analyzes gender, disability, social, and administrative statistics using scientific methods.",
  },
  {
    title: "Vital Statistics",
    icon: FileText,
    description:
      "Compiles national vital statistics including births, deaths, and marriage records.",
  },
  {
    title: "Statistical Surveys Methodology",
    icon: Sliders,
    description:
      "Designs survey methodologies and integrates alternative data sources to produce high-quality national statistics.",
  },
  {
    title: "Geospatial Statistics",
    icon: Map,
    description:
      "Integrates GIS and remote sensing technologies into the national statistical system to provide accurate geographic frameworks for censuses, surveys, and evidence-based decision making.",
  },
  {
    title: "Household Budget and Labor Statistics",
    icon: Briefcase,
    description:
      "Produces high-quality, timely, and reliable socio-economic data that supports national welfare monitoring, poverty and unemployment reduction strategies, and evidence-based policy and development planning.",
  },
  {
    title: "Statistics Harmonization, Standard and Quality",
    icon: ShieldCheck,
    description:
      "Establishes rigorous statistical standards, ensures data quality across surveys, censuses, and administrative records, and serves as Ethiopia's Independent Verification Agent for the World Bank Program for Results (PforR) disbursements.",
  },
  {
    title: "Statistical Study, Research and Training",
    icon: BookOpen,
    description:
      "Advances statistical methodology through research and strengthens institutional capacity by coordinating statistical training.",
  },
  {
    title: "Information System Technology and Infrastructure Development",
    icon: Server,
    description:
      "Operates across several interconnected pillars to modernize Ethiopia's national statistical data ecosystem.",
  },
  {
    title: "Statistical Data Dissemination and Access",
    icon: Share2,
    description:
      "Ensures that official statistics produced by the Ethiopian Statistics Service (ESS) from surveys, censuses, and administrative data sources are accessible, timely, and user-friendly.",
  },
];

function About() {
  useDocumentMeta(
    "About ESS - Ethiopian Statistics Service",
    "Learn about the Ethiopian Statistics Service and its role in Ethiopia."
  );

  return (
    <>
      {/* HERO */}
      <section className="section-pad">
        <div className="ess-container">
          <div className="hero-panel px-6 py-12 md:px-10 md:py-14">
            <span className="section-kicker">About ESS</span>

            <h1 className="mt-4 text-4xl font-black md:text-5xl">
              Ethiopian Statistics Service
            </h1>

            <p className="mt-4 text-primary-foreground/80">
              The Ethiopian Statistics Service (ESS) plays a central role in collecting and compiling data from sample surveys, censuses, and administrative records, as well as analyzing and delivering reports for a wide range of sectors and users. 
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="ess-container grid gap-6 md:grid-cols-2">

          {/* MISSION */}
          <div className="feature-card flex flex-col items-start">
            <div className="p-3 bg-primary/10 text-primary rounded-full mb-4">
              <Target className="h-8 w-8" />
            </div>
            <h2 className="text-xl font-bold text-primary">Mission</h2>

            <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc pl-5 w-full">
              <li>Develop an integrated statistical system</li>
              <li>Ensure transparency and professional ethics</li>
              <li>Apply modern statistical methods and technology</li>
              <li>Produce and disseminate reliable official data</li>
              <li>Deliver timely information to users</li>
            </ul>
          </div>

          {/* VISION */}
          <div className="feature-card flex flex-col items-start">
            <div className="p-3 bg-primary/10 text-primary rounded-full mb-4">
              <Eye className="h-8 w-8" />
            </div>
            <h2 className="text-xl font-bold text-primary">Vision</h2>

            <p className="mt-4 text-sm text-muted-foreground">
              To be a globally competitive and trusted center of excellence
              for official statistics in Ethiopia.
            </p>
          </div>

          {/* CORE VALUES */}
          <div className="feature-card md:col-span-2">
            <div className="flex flex-col items-center justify-center gap-2">
              <Diamond className="h-8 w-8 text-primary" />
              <h2 className="text-xl font-bold text-primary text-center">
                Core Values
              </h2>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-2">
              What ESS stands for
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-3">

              {/* Integrity */}
              <div className="rounded-lg border p-5 bg-white shadow-sm flex flex-col items-center text-center">
                <h3 className="font-semibold text-primary mb-3">
                  Integrity & Trust
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1 w-full">
                  <li>Transparency</li>
                  <li>Reliability</li>
                  <li>Accountability</li>
                  <li>Confidentiality</li>
                  <li>Professional Ethics & Independence</li>
                </ul>
              </div>

              {/* Collaboration */}
              <div className="rounded-lg border p-5 bg-white shadow-sm flex flex-col items-center text-center">
                <h3 className="font-semibold text-primary mb-3">
                  Collaboration & Inclusion
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1 w-full">
                  <li>Participation</li>
                  <li>Coordination</li>
                  <li>Collaboration & Partnership</li>
                  <li>Accessibility</li>
                </ul>
              </div>

              {/* Excellence */}
              <div className="rounded-lg border p-5 bg-white shadow-sm flex flex-col items-center text-center">
                <h3 className="font-semibold text-primary mb-3">
                  Excellence & Character
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1 w-full">
                  <li>Humility</li>
                  <li>Teamwork</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FUNCTIONS */}
      <section className="section-pad bg-primary-soft/40">
        <div className="ess-container">
          <h2 className="section-title">Core Functions</h2>

          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {FUNCTIONS.map((fn) => (
              <li
                key={fn}
                className="feature-card flex items-start gap-3 p-4"
              >
                <span className="h-6 w-6 flex items-center justify-center rounded-full bg-primary text-white text-xs shrink-0">
                  ✓
                </span>
                <span className="text-sm">{fn}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* DEPARTMENTS */}
      <section className="section-pad">
        <div className="ess-container">
          <h2 className="section-title">Departments Hosting Interns</h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {DEPARTMENTS.map((department) => {
              const DeptIcon = department.icon;
              return (
                <div
                  key={department.title}
                  className="feature-card transition hover:-translate-y-1 flex flex-col items-start"
                >
                  <div className="p-2 bg-primary/10 text-primary rounded-md mb-2">
                    <DeptIcon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-1 font-semibold text-primary">
                    {department.title}
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground">
                    {department.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;