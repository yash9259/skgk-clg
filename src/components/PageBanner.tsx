interface PageBannerProps {
  title: string;
  subtitle?: string;
}

const PageBanner = ({ title, subtitle }: PageBannerProps) => (
  <section className="bg-primary text-primary-foreground py-16 px-4 text-center animate-slideDown">
    <h1 className="text-3xl md:text-5xl font-display font-bold mb-3">{title}</h1>
    {subtitle && <p className="text-lg opacity-80 max-w-xl mx-auto">{subtitle}</p>}
    <div className="w-20 h-1 bg-accent rounded-full mx-auto mt-4" />
  </section>
);

export default PageBanner;
