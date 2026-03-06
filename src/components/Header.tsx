import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MapPin, GraduationCap } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/courses", label: "Courses" },
  { to: "/faculty", label: "Faculty" },
  { to: "/infrastructure", label: "Infrastructure" },
  { to: "/admission", label: "Admission" },
  { to: "/placement", label: "Placement" },
  { to: "/news", label: "News & Events" },
  { to: "/gallery", label: "Gallery" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-sm py-3 px-4 md:px-8 flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center gap-4 flex-wrap">
          <a href="tel:8469925826" className="flex items-center gap-1 hover:text-accent transition-colors cursor-pointer">
            <Phone className="w-3 h-3" /> 8469925826
          </a>
          <a href="https://maps.google.com/?q=Near+Yogeshwar+Char+Rasta,+Anjar" target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center gap-1 hover:text-accent transition-colors cursor-pointer">
            <MapPin className="w-3 h-3" /> Near Yogeshwar Char Rasta, Anjar
          </a>
        </div>
        <Link to="/admission" className="flex items-center gap-1 text-accent font-semibold hover:opacity-80 transition-opacity cursor-pointer">
          <GraduationCap className="w-4 h-4" /> Admissions Open
        </Link>
      </div>

      {/* Main nav */}
      <nav className="bg-card shadow-md px-4 md:px-8 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center ring-1 ring-border shadow-sm overflow-hidden">
              <img src="/logo.png" alt="Shree KGK Vocational Education Institute logo" className="w-11 h-11 object-contain" />
            </div>
            <div className="leading-tight">
              <span className="font-display font-bold text-primary text-sm md:text-base block">Shree KGK Vocational Education Institute</span>
              <span className="text-xs text-muted-foreground">Affiliated with KSKV Kachchh University</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded hover:bg-muted"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden mt-3 pb-3 border-t border-border pt-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
