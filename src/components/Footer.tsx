import { Link } from "react-router-dom";
import { Phone, MapPin, GraduationCap, Mail, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    {/* Main Footer */}
    <div className="max-w-7xl mx-auto section-padding py-12">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        {/* About */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center ring-1 ring-white/40 shadow-sm overflow-hidden">
              <img src="/logo.png" alt="Shree KGK Vocational Education Institute logo" className="w-11 h-11 object-contain" />
            </div>
            <div>
              <span className="font-display font-bold text-sm block">Shree KGK</span>
              <span className="text-xs opacity-70">Vocational Institute</span>
            </div>
          </div>
          <p className="text-sm opacity-80 leading-relaxed mb-4">
            Managed by Shree Kutch Gurjar Kshatriya Kelvani Mandal. Affiliated with KSKV Kachchh University.
          </p>
          <p className="text-xs opacity-70">Excellence in vocational education since years</p>
        </div>

        {/* Courses */}
        <div>
          <h4 className="font-display font-semibold text-accent mb-4 text-sm uppercase tracking-wide">Our Courses</h4>
          <div className="space-y-2 text-sm">
            <p className="opacity-80 hover:text-accent transition-colors cursor-pointer">Natural Farming</p>
            <p className="opacity-80 hover:text-accent transition-colors cursor-pointer">Agro Processing</p>
            <p className="opacity-80 hover:text-accent transition-colors cursor-pointer">Home Science</p>
            <p className="opacity-80 hover:text-accent transition-colors cursor-pointer">Management</p>
            <p className="opacity-80 hover:text-accent transition-colors cursor-pointer">Hospitality</p>
            <Link to="/courses" className="text-accent hover:opacity-80 transition-opacity font-semibold text-xs mt-2 inline-block">
              View All Courses →
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-semibold text-accent mb-4 text-sm uppercase tracking-wide">Quick Links</h4>
          <div className="space-y-2 text-sm">
            {[
              { to: "/about", label: "About Us" },
              { to: "/courses", label: "All Courses" },
              { to: "/admission", label: "Admission" },
              { to: "/placement", label: "Placement" },
              { to: "/gallery", label: "Gallery" },
              { to: "/news", label: "News & Events" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="opacity-80 hover:text-accent transition-colors block">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-semibold text-accent mb-4 text-sm uppercase tracking-wide">Contact Info</h4>
          <div className="space-y-3 text-sm">
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent cursor-pointer hover:text-accent/80" />
              <a 
                href="https://maps.google.com/?q=Near+Yogeshwar+Char+Rasta,+Mistri+Boarding,+Anjar,+Kutch"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                Near Yogeshwar Char Rasta, Mistri Boarding, Anjar, Kutch
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 shrink-0 text-accent" />
              <a href="tel:+918469925826" className="hover:text-accent transition-colors">8469925826</a>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 shrink-0 text-accent" />
              <a href="mailto:kgkdvoc@gmail.com" className="hover:text-accent transition-colors">kgkdvoc@gmail.com</a>
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-3 mt-4">
            <a
              href="https://www.instagram.com/kgkvocational?igsh=ODBxcnpteXNxd296"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-accent/20 flex items-center justify-center transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-accent/20 flex items-center justify-center transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-accent/20 flex items-center justify-center transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-primary-foreground/20" />

      {/* Bottom Footer */}
      <div className="mt-8 pt-6">
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="text-sm opacity-80">
            <p className="font-semibold text-accent mb-1">Hours</p>
            <p>Mon - Fri: 9:00 AM - 5:00 PM</p>
            <p>Sat: 9:00 AM - 2:00 PM</p>
          </div>
          <div className="text-sm opacity-80 text-center">
            <p className="font-semibold text-accent mb-1">Affiliation</p>
            <p>KSKV Kachchh University</p>
            <p>Recognized by Government of Gujarat</p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 text-center text-xs opacity-70">
          <p className="mb-4">© 2026 Shree KGK Vocational Education Institute, Anjar. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <a href="/privacy-policy" className="hover:text-accent transition-colors font-medium">
              Privacy Policy
            </a>
            <span className="hidden sm:inline text-primary-foreground/40">|</span>
            <a href="/terms-conditions" className="hover:text-accent transition-colors font-medium">
              Terms & Conditions
            </a>
            <span className="hidden sm:inline text-primary-foreground/40">|</span>
            <a href="/contact" className="hover:text-accent transition-colors font-medium">
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
