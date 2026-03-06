import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";

const PrivacyPolicy = () => (
  <Layout>
    <PageBanner title="Privacy Policy" subtitle="Your privacy is important to us" />
    
    <section className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-sm max-w-none">
          <h2 className="text-2xl font-display font-bold text-primary mb-6">Privacy Policy</h2>
          
          <div className="space-y-6 text-muted-foreground">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">1. Introduction</h3>
              <p>
                Shree KGK Vocational Education Institute, Anjar ("we", "our", or "us") operates the website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our service and the choices you have associated with that data.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">2. Information Collection and Use</h3>
              <p>We collect several different types of information for various purposes to provide and improve our service to you:</p>
              <ul className="list-disc list-inside mt-3 space-y-2">
                <li>Personal data such as name, email address, phone number, and postal address</li>
                <li>Usage data including IP address, browser type, pages visited, and time spent</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Information you voluntarily provide through forms and inquiries</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">3. Use of Data</h3>
              <p>Shree KGK Vocational Education Institute uses the collected data for various purposes:</p>
              <ul className="list-disc list-inside mt-3 space-y-2">
                <li>To provide and maintain our services</li>
                <li>To notify you about changes to our services</li>
                <li>To allow you to participate in interactive features of our service</li>
                <li>To provide customer support and respond to inquiries</li>
                <li>To gather analysis or valuable information so we can improve our service</li>
                <li>To monitor the usage of our service</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">4. Security of Data</h3>
              <p>
                The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">5. Changes to This Privacy Policy</h3>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "effective date" at the bottom of this Privacy Policy.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">6. Contact Us</h3>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <div className="mt-3 p-4 bg-navy-light rounded-lg border border-border">
                <p className="font-semibold text-primary">Shree KGK Vocational Education Institute</p>
                <p>Near Yogeshwar Char Rasta, Mistri Boarding, Anjar, Kutch</p>
                <p>Phone: 8469925826</p>
                <p>Email: kgkdvoc@gmail.com</p>
              </div>
            </div>

            <div className="pt-6 border-t border-border text-sm">
              <p className="opacity-70">Last Updated: February 17, 2026</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default PrivacyPolicy;
