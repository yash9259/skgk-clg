import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { Calendar, Mic, PartyPopper, Palette, BookOpen, Factory } from "lucide-react";

const items = [
  { icon: Calendar, name: "College Events", desc: "Annual days, seminars, and student programs" },
  { icon: BookOpen, name: "Workshops", desc: "Skill-building workshops throughout the year" },
  { icon: Palette, name: "Cultural Programs", desc: "Celebrating diverse culture and talent" },
  { icon: PartyPopper, name: "Festival Celebrations", desc: "Festive celebrations fostering community spirit" },
  { icon: Mic, name: "Expert Lectures", desc: "Industry experts sharing knowledge and insights" },
  { icon: Factory, name: "Industrial Visits", desc: "Learning from real-world industry operations" },
];

const News = () => (
  <Layout>
    <PageBanner title="News & Events" subtitle="Stay updated with our latest activities" />

    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.name} className="bg-card rounded-xl p-6 shadow-sm card-hover border border-border">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display font-bold text-primary mb-2">{item.name}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default News;
