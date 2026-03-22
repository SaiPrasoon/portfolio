export default function Loading() {
  return (
    <div className="flex flex-col gap-6 animate-pulse">
      {/* Hero skeleton */}
      <div className="rounded-2xl bg-muted/50 h-[250px] my-4" />

      {/* Section skeleton */}
      <div className="h-4 w-48 bg-muted rounded" />
      <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-32 rounded-xl bg-muted/50" />
        ))}
      </div>

      <div className="h-px bg-border/50 my-2" />

      <div className="h-4 w-36 bg-muted rounded" />
      <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-28 rounded-xl bg-muted/50" />
        ))}
      </div>
    </div>
  );
}
