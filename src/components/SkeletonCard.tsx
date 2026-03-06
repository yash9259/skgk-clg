const SkeletonCard = () => (
  <div className="bg-card rounded-xl p-6 border border-border">
    <div className="w-12 h-12 rounded-lg bg-navy-light mb-4 animate-pulse" />
    <div className="h-6 bg-navy-light rounded mb-3 w-3/4 animate-pulse" />
    <div className="space-y-2">
      <div className="h-4 bg-navy-light rounded w-full animate-pulse" />
      <div className="h-4 bg-navy-light rounded w-5/6 animate-pulse" />
      <div className="h-4 bg-navy-light rounded w-4/5 animate-pulse" />
    </div>
  </div>
);

export default SkeletonCard;
