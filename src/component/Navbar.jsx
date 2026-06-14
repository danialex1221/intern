import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const NAV = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/apply", label: "Apply Now" },
    { to: "/status", label: "Check Status" },
    { to: "/contact", label: "Contact" },
    { to: "/admin", label: "Admin" },
];

export default function Navbar() {
    const { pathname } = useLocation();

    return (
        <div className="ess-container flex flex-col md:flex-row items-center justify-between gap-4 py-4">
            
            {/* LOGO SECTION */}
            <Link to="/" className="flex min-w-0 items-center gap-3 w-full md:w-auto justify-center md:justify-start">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 font-bold text-white shadow-md">
                    ESS
                </div>
                <div className="min-w-0 leading-tight">
                    <div className="truncate text-sm font-bold text-white sm:text-base">
                        Ethiopian Statistics Service
                    </div>
                    <div className="truncate text-[11px] text-white/70">Official Internship Portal</div>
                </div>
            </Link>

            {/* NAVIGATION LINKS */}
            <nav className="flex items-center gap-1 sm:gap-2 max-w-full overflow-x-auto no-scrollbar pb-1 md:pb-0">
                {NAV.map((item) => {
                    const active = pathname === item.to || (item.to !== "/" && pathname.startsWith(item.to));

                    return (
                        <Link
                            key={item.to}
                            to={item.to}
                            className={
                                "inline-flex items-center whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition-colors sm:text-sm " +
                                (active
                                    ? "bg-secondary text-primary shadow-sm" // Active link lights up in cream color!
                                    : "text-white/80 hover:bg-white/10 hover:text-white")
                            }
                        >
                            {item.label}
                        </Link>
                    );
                })}
                <div className="pl-1 shrink-0">
                    <ThemeToggle />
                </div>
            </nav>
            
        </div>
    );
}