import { FormEvent, useState } from "react";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { courseSummaries } from "@/data/courses";
import { toast } from "sonner";
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

const Admission = () => {
  const courseNames = courseSummaries.map((course) => course.name);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    course: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((previous) => ({ ...previous, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.contactNumber.trim() || !formData.course) {
      toast.error("Please fill all required fields.");
      return;
    }

    const phoneDigits = formData.contactNumber.replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      toast.error("Please enter a valid contact number.");
      return;
    }

    const googleSheetWebhook = import.meta.env.VITE_GOOGLE_SHEETS_WEB_APP_URL as string | undefined;
    if (!googleSheetWebhook) {
      toast.error("Google Sheets webhook is not configured.");
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch(googleSheetWebhook, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          contactNumber: formData.contactNumber.trim(),
          course: formData.course,
          submittedAt: new Date().toISOString(),
          source: "admission-inquiry",
        }),
      });

      toast.success("Inquiry submitted successfully.");
      setFormData({
        name: "",
        email: "",
        contactNumber: "",
        course: "",
      });
    } catch {
      toast.error("Unable to submit inquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
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

        {/* Inquiry Form */}
        <div className="max-w-5xl mx-auto mt-8 bg-card rounded-xl p-8 shadow-sm border border-border">
          <h3 className="section-title text-2xl">Admission Inquiry Form</h3>
          <p className="text-muted-foreground mb-6">Submit your details and we will contact you soon.</p>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="inquiry-name" className="block text-sm font-semibold text-primary mb-2">
                Name
              </label>
              <input
                id="inquiry-name"
                type="text"
                value={formData.name}
                onChange={(event) => updateField("name", event.target.value)}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Your full name"
                required
              />
            </div>

            <div>
              <label htmlFor="inquiry-email" className="block text-sm font-semibold text-primary mb-2">
                Email
              </label>
              <input
                id="inquiry-email"
                type="email"
                value={formData.email}
                onChange={(event) => updateField("email", event.target.value)}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="inquiry-contact" className="block text-sm font-semibold text-primary mb-2">
                Contact Number
              </label>
              <input
                id="inquiry-contact"
                type="tel"
                value={formData.contactNumber}
                onChange={(event) => updateField("contactNumber", event.target.value)}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="+91 XXXXXXXXXX"
                required
              />
            </div>

            <div>
              <label htmlFor="inquiry-course" className="block text-sm font-semibold text-primary mb-2">
                Course
              </label>
              <select
                id="inquiry-course"
                value={formData.course}
                onChange={(event) => updateField("course", event.target.value)}
                className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                required
              >
                <option value="">Select a course</option>
                {courseNames.map((courseName) => (
                  <option key={courseName} value={courseName}>
                    {courseName}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 rounded-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit Inquiry"}
              </button>
            </div>
          </form>
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
};

export default Admission;
