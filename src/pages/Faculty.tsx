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
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            <div className="w-full md:w-64 shrink-0 overflow-hidden rounded-xl border border-border bg-muted mx-auto md:mx-0">
              <img
                src="/principal.png"
                alt="Principal"
                className="w-full aspect-[4/5] object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex-1">
              <Quote className="w-10 h-10 text-accent mb-4" />
              <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                {`હું Shree KGK Vocational Education Institute, તરફથી આપ સૌનું હાર્દિક સ્વાગત કરું છું. અમારી સંસ્થા કૌશલ્ય આધારિત અને વ્યવસાયલક્ષી શિક્ષણ દ્વારા વિદ્યાર્થીઓનું ઉજ્જવળ ભવિષ્ય નિર્માણ કરવા માટે પ્રતિબદ્ધ છે.

આજના ઝડપી બદલાતા યુગમાં શિક્ષણ માત્ર પુસ્તકી જ્ઞાન પૂરતું નથી. તે વિદ્યાર્થીઓને વ્યવહારુ કૌશલ્ય, આત્મવિશ્વાસ અને નવી તકો સર્જવાની ક્ષમતા આપતું હોવું જોઈએ. અમારી સંસ્થા માને છે કે વ્યવસાયિક (Vocational) શિક્ષણ વિદ્યાર્થીઓને સ્વાવલંબી બનાવવામાં મહત્વપૂર્ણ ભૂમિકા ભજવે છે.
અમારું ધ્યેય એવું શૈક્ષણિક વાતાવરણ ઊભું કરવાનું છે જ્યાં વિદ્યાર્થીઓ માત્ર અભ્યાસ જ નહીં કરે પરંતુ પોતાની ક્ષમતાઓ ઓળખે, સર્જનાત્મક વિચારધારા વિકસાવે અને ઉદ્યોગસાહસિકતા તરફ આગળ વધે. બેન્કિંગ અને ફાઈનાન્સ, એકાઉન્ટિંગ અને ટેક્સેશન, નેચરલ ફાર્મિંગ, એગ્રો પ્રોસેસિંગ, હોમ સાયન્સ, મેનેજમેન્ટ અને એન્ટરપ્રેન્યોરશિપ, હૉસ્પિટાલિટી અને ટુરિઝમ, બ્યુટી એન્ડ વેલનેસ તથા હેલ્થકેર જેવા વિવિધ કોર્સ દ્વારા અમે વિદ્યાર્થીઓને રોજગાર અને સ્વરોજગાર બંને માટે તૈયાર કરીએ છીએ. અમારી સંસ્થાના પ્રતિબદ્ધ અને અનુભવી ફેકલ્ટી સભ્યો વિદ્યાર્થીઓને માર્ગદર્શન આપવા, પ્રેરણા આપવા અને તેમના સર્વાંગી વિકાસ માટે સતત પ્રયત્નશીલ છે.

Shree KGK Vocational Education Institute માં અમે માનીએ છીએ કે દરેક વિદ્યાર્થીમાં અનોખી પ્રતિભા છે. અમારી જવાબદારી એ પ્રતિભાને ઓળખી તેને યોગ્ય દિશામાં આગળ વધારવાની છે.

આપ સૌને અમારી સંસ્થાનો ભાગ બનવા માટે હાર્દિક આમંત્રણ આપું છું. આવો, સાથે મળીને કૌશલ્ય, જ્ઞાન અને સફળતાથી ભરેલું ભવિષ્ય રચીએ.

સાદર,
આકાશ રમણીકલાલ ત્રિવેદી
પ્રિન્સિપાલ
Shree KGK Vocational Education Institute`}
              </p>
            </div>
          </div>
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
