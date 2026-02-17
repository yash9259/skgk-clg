const PageLoader = ({ text = "Loading..." }: { text?: string } = {}) => (
  <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
    <div className="text-center">
      {/* Spinner Animation */}
      <div className="relative w-16 h-16 mx-auto mb-4">
        <div className="absolute inset-0 border-4 border-navy-light rounded-full opacity-20" />
        <div className="absolute inset-0 border-4 border-transparent border-t-accent rounded-full animate-spin" />
      </div>
      
      {/* Pulsing dots */}
      <div className="flex justify-center gap-1 mb-4">
        <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
        <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: "0.1s" }} />
        <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
      </div>
      
      <p className="text-primary font-semibold">{text}</p>
    </div>
  </div>
);

export default PageLoader;
