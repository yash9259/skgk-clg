import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const ContactSupport = () => (
  <Layout>
    <PageBanner title="Contact Support" subtitle="Get in touch with us anytime" />
    
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-display font-bold text-primary mb-6">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="+91 XXXXXXXXXX"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder="Your message here..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 rounded-lg transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-display font-bold text-primary mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              {/* Address */}
              <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Address</h3>
                    <p className="text-muted-foreground">
                      Near Yogeshwar Char Rasta, Mistri Boarding, Anjar, Kutch 370110
                    </p>
                    <a
                      href="https://maps.google.com/?q=Near+Yogeshwar+Char+Rasta,+Mistri+Boarding,+Anjar,+Kutch"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:opacity-80 transition-opacity text-sm font-medium mt-2 inline-block"
                    >
                      Open in Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Phone</h3>
                    <p className="text-muted-foreground">Call us during working hours</p>
                    <a
                      href="tel:+918469925826"
                      className="text-accent hover:opacity-80 transition-opacity text-lg font-semibold mt-1 inline-block"
                    >
                      8469925826
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Email</h3>
                    <p className="text-muted-foreground">Reach us via email anytime</p>
                    <a
                      href="mailto:info@kgkinstitute.com"
                      className="text-accent hover:opacity-80 transition-opacity font-medium mt-1 inline-block"
                    >
                      info@kgkinstitute.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Working Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p>Saturday: 9:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Admission Related */}
        <div className="bg-navy-light rounded-xl p-8 border border-border text-center">
          <h3 className="text-2xl font-display font-bold text-primary mb-3">Ready to Apply?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Start your journey towards a successful career with our Advanced D.Voc. programs.
          </p>
          <Link
            to="/admission"
            className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 rounded-lg transition-all"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default ContactSupport;
