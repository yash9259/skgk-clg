import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { Target, Eye, Lightbulb, CheckCircle } from "lucide-react";

const missions = [
  "To provide practical and industry-focused education.",
  "To enhance employability skills of students.",
  "To promote entrepreneurship and innovation.",
  "To develop confident and responsible citizens.",
];

const objectives = [
  "Skill development",
  "Career-oriented education",
  "Industry collaboration",
  "Holistic student development",
];

const About = () => (
  <Layout>
    <PageBanner title="About Us" subtitle="Learn more about our institute and our vision" />

    <section className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">About the Institute</h2>
        <div className="gold-divider !mx-0" />
        <p className="text-lg text-muted-foreground leading-relaxed">
          Shree KGK Vocational Education Institute, Anjar is established with a vision to provide quality vocational education in Kutch region. The institute is affiliated with KSKV Kachchh University and managed by Shree Kutch Gurjar Kshatriya Kelvani Mandal. We focus on practical knowledge, professional skills, and entrepreneurship development to make students self-reliant and career-oriented.
        </p>
      </div>
    </section>

    <section className="section-padding bg-navy-light">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="bg-card rounded-xl p-8 shadow-sm">
          <Eye className="w-10 h-10 text-accent mb-4" />
          <h3 className="section-title text-2xl">Our Vision</h3>
          <p className="text-muted-foreground leading-relaxed">
            To become a leading vocational education institute that produces skilled professionals and entrepreneurs for national development.
          </p>
        </div>
        <div className="bg-card rounded-xl p-8 shadow-sm">
          <Target className="w-10 h-10 text-accent mb-4" />
          <h3 className="section-title text-2xl">Our Mission</h3>
          <ul className="space-y-3">
            {missions.map((m) => (
              <li key={m} className="flex items-start gap-2 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                {m}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="section-title">Our Objectives</h2>
        <div className="gold-divider" />
        <div className="grid sm:grid-cols-2 gap-6 mt-8">
          {objectives.map((o) => (
            <div key={o} className="bg-navy-light rounded-xl p-6 flex items-center gap-3">
              <Lightbulb className="w-6 h-6 text-accent shrink-0" />
              <span className="font-medium text-foreground">{o}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
