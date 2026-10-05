/** Editorial loading state — mirrors the reading column, not a card grid. */
const PageSkeleton = () => {
  return (
    <div className="flex flex-col animate-pulse">
      <div className="h-8 w-2/3 rounded-sm bg-ash/60" />
      <div className="mt-6 flex flex-col gap-3">
        <div className="h-4 w-full rounded-sm bg-ash/40" />
        <div className="h-4 w-11/12 rounded-sm bg-ash/40" />
        <div className="h-4 w-4/5 rounded-sm bg-ash/40" />
      </div>

      <div className="mt-12 flex flex-col divide-y divide-ash">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex gap-8 py-8">
            <div className="h-3 w-[90px] shrink-0 rounded-sm bg-ash/40" />
            <div className="flex-1 flex flex-col gap-3">
              <div className="h-5 w-1/2 rounded-sm bg-ash/60" />
              <div className="h-3 w-1/3 rounded-sm bg-ash/40" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageSkeleton;
