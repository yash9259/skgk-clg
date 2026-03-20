import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { GraduationCap, BookOpen, Users, Briefcase, Clock, Beaker, CheckCircle, TrendingUp, Award, Lightbulb } from "lucide-react";

const highlights = [
  { icon: BookOpen, text: "Advanced. D.Voc. Courses" },
  { icon: Clock, text: "2 Years Duration" },
  { icon: Beaker, text: "60% Practical + 40% Theory" },
  { icon: GraduationCap, text: "For 12th Pass Students" },
];

const whyUs = [
  { icon: TrendingUp, text: "Industry-Oriented Curriculum" },
  { icon: Beaker, text: "60% Practical Training" },
  { icon: Users, text: "Experienced Faculty" },
  { icon: Lightbulb, text: "Skill Development Workshops" },
  { icon: Briefcase, text: "Internship & Placement Support" },
  { icon: Award, text: "Modern Learning Environment" },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
      <img src="/hero.png" alt="Students in classroom" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/80" />
      <div className="relative z-10 text-center px-4 py-20 max-w-4xl mx-auto animate-slideUp">
        <div className="inline-block bg-accent/20 border border-accent/40 rounded-full px-4 py-2 mb-4">
          <p className="text-accent font-semibold text-sm tracking-wide uppercase">Managed by Shree Kutch Gurjar Kshatriya Kelvani Mandal</p>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-4 leading-tight">
          Shree KGK Vocational Education Institute
        </h1>
        <p className="text-lg text-primary-foreground/90 mb-2">Anjar, Kutch</p>
        <p className="text-xl md:text-2xl text-primary-foreground/95 mb-8 font-medium">
          Skill-Based Education for a Successful Career
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {highlights.map((h, index) => (
            <div key={h.text} className="bg-primary-foreground/15 backdrop-blur-sm rounded-xl p-4 border border-primary-foreground/30 hover:bg-primary-foreground/20 transition-all animate-slideUp" style={{ animationDelay: `${index * 0.1}s` }}>
              <h.icon className="w-6 h-6 text-accent mx-auto mb-2" />
              <span className="text-primary-foreground text-sm font-semibold">{h.text}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/admission"
            className="bg-accent text-accent-foreground font-bold px-8 py-4 rounded-lg hover:bg-accent/90 transition-all text-lg shadow-lg hover:shadow-xl"
          >
            Apply Now – Limited Seats
          </Link>
          <Link
            to="/courses"
            className="border-2 border-primary-foreground text-primary-foreground font-semibold px-8 py-4 rounded-lg hover:bg-primary-foreground/15 transition-all text-lg"
          >
            Explore Courses
          </Link>
          <Link
            to="/director-message"
            className="border-2 border-accent text-accent font-semibold px-8 py-4 rounded-lg hover:bg-accent/15 transition-all text-lg"
          >
            Director Message
          </Link>
        </div>
      </div>
    </section>

    {/* Welcome */}
    <section className="section-padding bg-background animate-fadeIn">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 animate-slideUp">
          <h2 className="section-title">Welcome to Our Institute</h2>
          <div className="gold-divider" />
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-slideLeft">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Welcome to <strong className="text-primary">Shree KGK Vocational Education Institute, Anjar</strong> – a leading vocational college committed to providing industry-oriented and practical-based education. Our goal is to develop skilled, confident, and job-ready professionals who can contribute effectively to society and industry.
            </p>
            <p className="text-base text-muted-foreground italic mb-6 p-4 border-l-4 border-accent bg-accent/5 rounded">
              "We believe that education should not only give degrees but also provide real-life skills for sustainable career growth."
            </p>
            <Link
              to="/about"
              className="inline-block bg-accent text-accent-foreground font-semibold px-6 py-3 rounded-lg hover:bg-accent/90 transition-all"
            >
              Learn More About Us →
            </Link>
          </div>
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8 border border-accent/20 animate-slideRight">
            <h3 className="font-display font-bold text-2xl text-primary mb-6">Our Commitment</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Practical skill development with industry experts</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Modern infrastructure and learning environment</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                <span className="text-muted-foreground">100% placement and career support</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                <span className="text-muted-foreground">KSKV Kachchh University affiliated programs</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="section-padding bg-navy-light animate-fadeIn">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-slideUp">
          <h2 className="section-title">Why Choose Shree KGK?</h2>
          <div className="gold-divider" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUs.map((item, index) => (
            <div key={item.text} className="bg-card rounded-xl p-6 card-hover shadow-sm border border-border hover:border-accent/40 transition-all animate-slideUp" style={{ animationDelay: `${index * 0.08}s` }}>
              <item.icon className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-semibold text-primary text-lg mb-2">{item.text}</h3>
              <p className="text-sm text-muted-foreground">Excellence in vocational education with industry focus</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Courses Preview */}
    <section className="section-padding bg-background animate-fadeIn">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-slideUp">
          <h2 className="section-title">Our Featured Courses</h2>
          <div className="gold-divider" />
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            { icon: "📈", name: "Management & Entrepreneurship", desc: "Learn business management, marketing, and startup development." },
            { icon: "🏦", name: "Banking & Finance", desc: "Learn financial management, banking operations, and accounting basics." },
            { icon: "📊", name: "Accounting & Taxation", desc: "Learn GST, income tax basics, accounting software, and financial records." },
          ].map((course, index) => (
            <div key={course.name} className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all animate-slideUp" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-4xl mb-3">{course.icon}</div>
              <h3 className="font-display font-bold text-lg text-primary mb-2">{course.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{course.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/courses"
            className="inline-block bg-accent text-accent-foreground font-semibold px-8 py-3 rounded-lg hover:bg-accent/90 transition-all"
          >
            View All 9 Courses
          </Link>
        </div>
      </div>
    </section>

    {/* Admission Info */}
    <section className="bg-gradient-to-r from-navy-light to-navy-light/50 border-y border-border py-12 animate-fadeIn">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 animate-slideUp">
          <div>
            <h3 className="font-display font-bold text-lg text-primary mb-3">📚 Eligibility</h3>
            <p className="text-muted-foreground">12th Pass (Any Stream) / B.Com / BA / BCA</p>
          </div>
          <div>
            <h3 className="font-display font-bold text-lg text-primary mb-3">⏱️ Duration</h3>
            <p className="text-muted-foreground">2 Years (60% Practical + 40% Theory)</p>
          </div>
          <div>
            <h3 className="font-display font-bold text-lg text-primary mb-3">🎓 Certification</h3>
            <p className="text-muted-foreground">KSKV Kachchh University Advanced. D.Voc. Certificate</p>
          </div>
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="bg-primary text-primary-foreground section-padding text-center animate-slideUp">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Ready to Transform Your Career?</h2>
        <p className="text-lg opacity-90 mb-8 leading-relaxed">
          Join hundreds of successful students who have built their careers through our skill-based vocational education programs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Link to="/admission" className="bg-accent text-accent-foreground font-bold px-10 py-4 rounded-lg text-lg hover:bg-accent/90 transition-all shadow-lg">
            Start Your Admission Now
          </Link>
          <div className="text-center sm:border-l sm:border-primary-foreground/30 sm:pl-8">
            <p className="font-semibold mb-2">Visit Us</p>
            <p className="opacity-80 text-sm">Near Yogeshwar Char Rasta, Anjar, Kutch</p>
          </div>
        </div>
        <div className="text-base opacity-85 border-t border-primary-foreground/20 pt-8">
          <p>Phone: <span className="font-semibold">8469925826</span> | Email: <span className="font-semibold">kgkdvoc@gmail.com</span></p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
