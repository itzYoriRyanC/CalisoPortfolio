import { Skeleton } from "../ui/Skeleton";

export const HeroSkeleton = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6">
      <div className="w-full max-w-4xl mx-auto text-center">
        <Skeleton className="h-8 sm:h-10 md:h-14 w-40 sm:w-56 mx-auto mb-4" />
        <Skeleton className="h-10 sm:h-14 md:h-20 w-72 sm:w-[520px] mx-auto mb-3" />
        <Skeleton className="h-10 sm:h-14 md:h-20 w-48 sm:w-[340px] mx-auto mb-6" />

        <Skeleton className="h-4 sm:h-5 w-64 sm:w-[600px] mx-auto mb-3" />
        <Skeleton className="h-4 sm:h-5 w-52 sm:w-[420px] mx-auto mb-8" />

        <Skeleton className="h-12 w-40 mx-auto rounded-full" />
      </div>
    </section>
  );
};