import { useState } from "react";
import { Link } from "react-router-dom";
import { findApplications } from "../Lib/storage";
import { useDocumentMeta } from "./shared";

function StatusBadge({ status }) {
  const cls = status === "Approved" ? "badge-approved" : status === "Rejected" ? "badge-rejected" : "badge-pending";
  const icon = status === "Approved" ? "✅" : status === "Rejected" ? "❌" : "⏳";
  return <span className={cls}>{icon} {status}</span>;
}

function Info({ label, value }) {
  return (
    <div>
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="font-medium">{value || "—"}</div>
    </div>
  );
}

function Status() {
  useDocumentMeta("Check Application Status - ESS", "Check the status of your ESS internship application.");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);

  const search = (event) => {
    event.preventDefault();
    setResults(findApplications(query));
  };

  return (
    <section className="section-pad">
      <div className="ess-container max-w-4xl">
        <div className="hero-panel px-6 py-10 text-center md:px-10">
          <span className="section-kicker mx-auto">Track progress</span>
          <h1 className="mt-4 text-3xl font-black md:text-4xl">Check Application Status</h1>
          <p className="section-copy mx-auto mt-3 text-primary-foreground/88">Enter your email or application ID to view your status.</p>
        </div>

        <form onSubmit={search} className="feature-card mt-8 flex flex-col gap-3 p-5 sm:flex-row">
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="email@example.com or ESS-XXXXXX" className="input-field" />
          <button className="btn-primary whitespace-nowrap">🔎 Search</button>
        </form>

        {results !== null && (
          <div className="mt-6 space-y-4">
            {results.length === 0 ? (
              <div className="feature-card p-6 text-center text-muted-foreground">
                No application found matching <span className="font-semibold text-foreground">"{query}"</span>.
                <div className="mt-3">
                  <Link to="/apply" className="btn-outline">📝 Apply Now</Link>
                </div>
              </div>
            ) : (
              results.map((application) => (
                <div key={application.id} className="feature-card p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="text-xs text-muted-foreground">Application ID</div>
                      <div className="font-mono text-lg font-bold text-primary">{application.id}</div>
                    </div>
                    <StatusBadge status={application.status} />
                  </div>
                  <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                    <Info label="Name" value={`${application.firstName} ${application.lastName}`} />
                    <Info label="Email" value={application.email} />
                    <Info label="University" value={application.university} />
                    <Info label="Department" value={application.department} />
                    <Info label="Start Date" value={application.startDate} />
                    <Info label="Submitted" value={new Date(application.createdAt).toLocaleDateString()} />
                  </div>
                  <div className="mt-4 rounded-md bg-primary-soft/50 p-3 text-xs text-muted-foreground">
                    {application.status === "Pending" && "Your application is under review. You will be contacted via email."}
                    {application.status === "Approved" && "Congratulations! Your application has been approved. ESS will reach out with onboarding details."}
                    {application.status === "Rejected" && "We're sorry - your application was not selected this cycle. You are welcome to reapply."}
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default Status;
