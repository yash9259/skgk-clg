import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { FileText, UserCheck, CreditCard, MapPin, Phone, CheckCircle } from "lucide-react";

const documents = [
  "10th & 12th Marksheet",
  "School Leaving Certificate",
  "Aadhaar Card Copy",
  "4 Passport Size Photos",
];

const steps = [
  { icon: MapPin, text: "Visit College Campus" },
  { icon: FileText, text: "Fill Admission Form" },
  { icon: UserCheck, text: "Document Verification" },
  { icon: CreditCard, text: "Fee Payment" },
];

const Admission = () => (
  <Layout>
    <PageBanner title="Admission Open" subtitle="Start your journey towards a skilled career" />

    <section className="section-padding bg-background">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Eligibility */}
        <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
          <h3 className="section-title text-2xl">Eligibility</h3>
          <p className="text-muted-foreground mb-4">12th Pass (Any Stream) / B.Com / B.A / BCA</p>
          <h4 className="font-semibold text-foreground mb-3">Required Documents:</h4>
          <ul className="space-y-2">
            {documents.map((d) => (
              <li key={d} className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                {d}
              </li>
            ))}
          </ul>
        </div>

        {/* Process */}
        <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
          <h3 className="section-title text-2xl">Admission Process</h3>
          <div className="space-y-4 mt-4">
            {steps.map((s, i) => (
              <div key={s.text} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <span className="font-bold text-accent">{i + 1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <s.icon className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground">{s.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="max-w-5xl mx-auto mt-8 bg-primary text-primary-foreground rounded-xl p-8 text-center">
        <h3 className="font-display font-bold text-2xl mb-4">Contact for Admission</h3>
        <p className="flex items-center justify-center gap-2 text-lg mb-2"><Phone className="w-5 h-5 text-accent" /> 8469925826</p>
        <p className="flex items-center justify-center gap-2"><MapPin className="w-5 h-5 text-accent" /> Near Yogeshwar Char Rasta, Mistri Boarding, Anjar</p>
      </div>
    </section>
  </Layout>
);

export default Admission;
