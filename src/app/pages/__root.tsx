import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import type { QueryClient } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { Header } from "../components/common/header";
import { Footer } from "../components/common/footer";

interface RouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootLayout,
});

function RootLayout() {
  return (
    <>
      <Header />

      <main className="h-full">
        <Outlet />
      </main>

      <Footer />

      <Toaster richColors />
    </>
  );
}
