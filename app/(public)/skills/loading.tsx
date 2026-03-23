export default function Loading() {
  return (
    <div className="flex flex-col gap-6 py-2 animate-pulse">
      <div className="h-8 w-32 bg-muted rounded" />
      <div className="h-4 w-80 max-w-full bg-muted/70 rounded" />

      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-3">
        {Array.from({ length: 14 }).map((_, i) => (
          <div key={i} className="h-24 rounded-xl bg-muted/50" />
        ))}
      </div>
    </div>
  );
}
