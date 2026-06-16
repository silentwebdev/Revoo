export default function SkeletonCard() {
  return (
    <div className="glass border border-white/8 rounded-2xl overflow-hidden">
      <div className="aspect-[4/3] shimmer" />
      <div className="p-5 space-y-3">
        <div className="h-5 w-2/3 rounded-lg shimmer" />
        <div className="h-3 w-full rounded-lg shimmer" />
        <div className="flex gap-3">
          <div className="h-3 w-16 rounded-lg shimmer" />
          <div className="h-3 w-16 rounded-lg shimmer" />
        </div>
        <div className="flex gap-2">
          {[1,2,3].map(i => (
            <div key={i} className="w-4 h-4 rounded-full shimmer" />
          ))}
        </div>
        <div className="pt-3 border-t border-white/8 flex items-center justify-between">
          <div className="h-6 w-28 rounded-lg shimmer" />
          <div className="w-9 h-9 rounded-full shimmer" />
        </div>
      </div>
    </div>
  );
}
