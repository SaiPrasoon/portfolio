export default function Loading() {
  return (
    <div className="flex flex-col gap-4 py-2 animate-pulse">
      <div className="h-8 w-48 bg-muted rounded" />
      <div className="h-4 w-96 max-w-full bg-muted/70 rounded" />

      <div className="flex flex-col gap-6 mt-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex gap-6">
            <div className="hidden md:flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-muted" />
              <div className="w-px flex-1 bg-muted/50 mt-2" />
            </div>
            <div className="flex-1 h-48 rounded-xl bg-muted/50" />
          </div>
        ))}
      </div>
    </div>
  );
}
