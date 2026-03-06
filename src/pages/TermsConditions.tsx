import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";

const TermsConditions = () => (
  <Layout>
    <PageBanner title="Terms & Conditions" subtitle="Please read our terms carefully" />
    
    <section className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6 text-muted-foreground">
          <div>
            <h2 className="text-2xl font-display font-bold text-primary mb-6">Terms and Conditions</h2>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary mb-3">1. Agreement to Terms</h3>
            <p>
              By accessing and using the Shree KGK Vocational Education Institute website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary mb-3">2. Use License</h3>
            <p className="mb-3">Permission is granted to temporarily download one copy of the materials (information or software) on Shree KGK Vocational Education Institute's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              <li>Violate any applicable laws or regulations relating to the access to or use of the website</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary mb-3">3. Disclaimer</h3>
            <p>
              The materials on Shree KGK Vocational Education Institute's website are provided on an 'as is' basis. Shree KGK Vocational Education Institute makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary mb-3">4. Limitations</h3>
            <p>
              In no event shall Shree KGK Vocational Education Institute or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Shree KGK Vocational Education Institute's website, even if Shree KGK Vocational Education Institute or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary mb-3">5. Accuracy of Materials</h3>
            <p>
              The materials appearing on Shree KGK Vocational Education Institute's website could include technical, typographical, or photographic errors. Shree KGK Vocational Education Institute does not warrant that any of the materials on our website are accurate, complete, or current. Shree KGK Vocational Education Institute may make changes to the materials contained on our website at any time without notice.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary mb-3">6. Links</h3>
            <p>
              Shree KGK Vocational Education Institute has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Shree KGK Vocational Education Institute of the site. Use of any such linked website is at the user's own risk.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary mb-3">7. Modifications</h3>
            <p>
              Shree KGK Vocational Education Institute may revise these terms of service for our website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary mb-3">8. Governing Law</h3>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary mb-3">9. Contact Information</h3>
            <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
            <div className="mt-3 p-4 bg-navy-light rounded-lg border border-border">
              <p className="font-semibold text-primary">Shree KGK Vocational Education Institute</p>
              <p>Near Yogeshwar Char Rasta, Mistri Boarding, Anjar, Kutch</p>
              <p>Phone: 8469925826</p>
              <p>Email: info@kgkinstitute.com</p>
            </div>
          </div>

          <div className="pt-6 border-t border-border text-sm">
            <p className="opacity-70">Last Updated: February 17, 2026</p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default TermsConditions;
