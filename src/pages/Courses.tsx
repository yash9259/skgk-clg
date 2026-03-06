import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { courseSummaries } from "@/data/courses";
import { Link } from "react-router-dom";

const Courses = () => (
  <Layout>
    <PageBanner title="Our Courses" subtitle="Advanced D.Voc. Courses – 2 Years Duration" />

    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courseSummaries.map((c, index) => (
            <Link
              key={c.slug}
              to={`/courses/${c.slug}`}
              className="bg-card rounded-xl p-6 shadow-sm card-hover border border-border group block hover:shadow-md transition-shadow animate-slideUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="rounded-xl overflow-hidden mb-4 border border-border/60">
                <img
                  src={c.image}
                  alt={`${c.name} course`}
                  className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <c.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display font-bold text-lg text-primary mb-2">{c.name}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{c.desc}</p>
              <div className="bg-navy-light rounded-lg p-3">
                <span className="text-xs font-semibold text-primary">Career Opportunities:</span>
                <p className="text-xs text-muted-foreground mt-1">{c.careers}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Common info */}
        <div className="mt-12 bg-primary text-primary-foreground rounded-xl p-8 text-center animate-slideUp">
          <h3 className="font-display font-bold text-2xl mb-4">Course Details</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            <div>
              <span className="text-accent font-bold text-xl">12th Pass</span>
              <p className="text-sm opacity-80 mt-1">Eligibility</p>
            </div>
            <div>
              <span className="text-accent font-bold text-xl">2 Years</span>
              <p className="text-sm opacity-80 mt-1">Course Duration</p>
            </div>
            <div>
              <span className="text-accent font-bold text-xl">60% + 40%</span>
              <p className="text-sm opacity-80 mt-1">Practical + Theory</p>
            </div>
          </div>
          <Link to="/admission" className="inline-block mt-6 bg-accent text-accent-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Courses;
