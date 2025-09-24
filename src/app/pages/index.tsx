import { createFileRoute } from "@tanstack/react-router";
import { MemoryGrid } from "@/app/components/common/memory-grid";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-8">
      {/* Welcome Section */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 font-bold text-gray-900 text-3xl md:text-4xl">
          Welcome to Zubeen Da Community
        </h1>
        <p className="mx-auto max-w-2xl text-gray-600 text-lg">
          Share your favorite memories, concerts, and moments with fellow fans.
          Connect through music and celebrate the legacy together.
        </p>
      </div>

      {/* Memory Grid */}
      <div>
        <h2 className="mb-6 font-semibold text-gray-900 text-2xl">
          Recent Memories
        </h2>
        <MemoryGrid />
      </div>
    </div>
  );
}
