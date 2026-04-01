export const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="mb-4">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            <span className="text-foreground">Yori</span>{" "}
            <span className="text-primary">Dev</span>
          </h1>
        </div>

        <div className="w-40 sm:w-52 h-2 rounded-full bg-muted overflow-hidden mx-auto">
          <div className="h-full w-1/2 bg-primary animate-loader-bar rounded-full" />
        </div>

        <p className="mt-4 text-sm text-muted-foreground">
          Loading portfolio...
        </p>
      </div>
    </div>
  );
};