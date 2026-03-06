import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { Monitor, BookOpen, FlaskConical, Presentation, Wrench, ShieldCheck } from "lucide-react";
import galleryLab from "@/assets/gallery-lab.png";
import galleryClassroom from "@/assets/gallery-classroom.png";
import galleryComputerLab from "@/assets/gallery-computer-lab.png";
import galleryCampus from "@/assets/gallery-campus.png";

const facilities = [
  { icon: Presentation, name: "Well-equipped Classrooms", img: galleryClassroom },
  { icon: FlaskConical, name: "Practical Training Labs", img: galleryLab },
  { icon: Monitor, name: "Computer Lab", img: galleryComputerLab },
  { icon: BookOpen, name: "Library Facility", img: null },
  { icon: Presentation, name: "Seminar Hall", img: null },
  { icon: Wrench, name: "Skill Development Workshops", img: null },
];

const Infrastructure = () => (
  <Layout>
    <PageBanner title="Infrastructure" subtitle="Modern facilities for effective learning" />

    {/* Campus photo */}
    <section className="relative h-64 md:h-96 overflow-hidden">
      <img src={galleryCampus} alt="Campus view" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
      <div className="absolute bottom-6 left-6 text-primary-foreground">
        <h3 className="font-display font-bold text-2xl">Our Campus</h3>
        <p className="text-sm opacity-80">A safe and disciplined learning environment</p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center">Our Facilities</h2>
        <div className="gold-divider" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {facilities.map((f) => (
            <div key={f.name} className="bg-card rounded-xl overflow-hidden shadow-sm card-hover border border-border">
              {f.img ? (
                <img src={f.img} alt={f.name} className="w-full h-48 object-cover" />
              ) : (
                <div className="w-full h-48 bg-navy-light flex items-center justify-center">
                  <f.icon className="w-16 h-16 text-accent/50" />
                </div>
              )}
              <div className="p-4 flex items-center gap-3">
                <f.icon className="w-5 h-5 text-accent shrink-0" />
                <span className="font-medium text-foreground">{f.name}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-navy-light rounded-xl p-6 flex items-center gap-3">
          <ShieldCheck className="w-8 h-8 text-accent shrink-0" />
          <p className="text-foreground font-medium">We provide a safe and disciplined learning environment for all students.</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Infrastructure;
