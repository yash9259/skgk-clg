const SkeletonGallery = () => (
  <div className="space-y-4">
    {/* Main Image Skeleton */}
    <div className="w-full aspect-video bg-navy-light animate-pulse rounded-lg" />
    
    {/* Thumbnail Strip Skeleton */}
    <div className="flex gap-2">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="w-24 h-20 bg-navy-light animate-pulse rounded-md"
        />
      ))}
    </div>
  </div>
);

export default SkeletonGallery;
