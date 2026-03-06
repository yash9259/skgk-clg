import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { Briefcase, GraduationCap, Wrench, Mic, Compass, Users } from "lucide-react";

const services = [
  { icon: Briefcase, name: "Internship Opportunities", desc: "Hands-on experience with industry partners" },
  { icon: GraduationCap, name: "Industry Exposure", desc: "Visits to leading companies and organizations" },
  { icon: Wrench, name: "Skill Workshops", desc: "Regular workshops on emerging skills" },
  { icon: Mic, name: "Guest Lectures by Experts", desc: "Learn from industry professionals" },
  { icon: Compass, name: "Career Guidance Support", desc: "Personalized career counseling" },
  { icon: Users, name: "Placement Assistance", desc: "Support in finding the right job opportunities" },
];

const Placement = () => (
  <Layout>
    <PageBanner title="Placement & Training" subtitle="Bridging the gap between education and industry" />

    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center">What We Provide</h2>
        <div className="gold-divider" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {services.map((s) => (
            <div key={s.name} className="bg-card rounded-xl p-6 shadow-sm card-hover border border-border text-center">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <s.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display font-bold text-primary mb-2">{s.name}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Placement;
