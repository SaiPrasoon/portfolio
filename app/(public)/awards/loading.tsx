export default function Loading() {
  return (
    <div className="flex flex-col gap-4 py-2 animate-pulse">
      <div className="h-8 w-64 bg-muted rounded" />
      <div className="h-4 w-80 max-w-full bg-muted/70 rounded" />

      <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-28 rounded-xl bg-muted/50" />
        ))}
      </div>
    </div>
  );
}
