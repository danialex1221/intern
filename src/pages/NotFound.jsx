import { Link } from "react-router-dom";
import { useDocumentMeta } from "./shared";

function NotFound() {
  useDocumentMeta("404 - ESS Internship Portal", "The page you are looking for does not exist.");

  return (
    <div className="section-pad flex min-h-[calc(100vh-4rem)] items-center px-4">
      <div className="ess-container">
        <div className="hero-panel px-6 py-14 text-center md:px-10">
          <span className="section-kicker mx-auto">404</span>
          <h1 className="mt-4 text-5xl font-black md:text-6xl">Page not found</h1>
          <p className="section-copy mx-auto mt-3 text-primary-foreground/88">The page you're looking for doesn't exist.</p>
          <Link to="/" className="btn-primary mt-7 bg-accent text-accent-foreground">Go home</Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
