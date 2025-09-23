import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/app/components/common/page-layout";
import { MemoryGrid } from "@/app/components/common/memory-grid";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <PageLayout mainClassName="max-w-7xl">
      {/* Welcome Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Welcome to Zubeen Da Community
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Share your favorite memories, concerts, and moments with fellow fans. 
          Connect through music and celebrate the legacy together.
        </p>
      </div>

      {/* Memory Grid */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Recent Memories
        </h2>
        <MemoryGrid />
      </div>
    </PageLayout>
  );
}
