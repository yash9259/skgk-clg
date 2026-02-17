import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { Quote } from "lucide-react";

const Faculty = () => (
  <Layout>
    <PageBanner title="Our Faculty" subtitle="Dedicated educators committed to your success" />

    <section className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-center">Principal's Message</h2>
        <div className="gold-divider" />
        <div className="bg-card rounded-xl p-8 md:p-12 shadow-sm border border-border mt-8">
          <Quote className="w-10 h-10 text-accent mb-4" />
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Welcome to Shree KGK Vocational Education Institute. Our mission is to provide practical education that prepares students for real-world challenges. We focus on skill development, discipline, and professional growth. Our institute aims to create confident and capable individuals ready to serve society and industry.
          </p>
          <div className="border-t border-border pt-4 mt-6">
            <p className="font-display font-bold text-primary text-lg">— Principal</p>
            <p className="text-sm text-muted-foreground">Shree KGK Vocational Education Institute, Anjar</p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Faculty;
