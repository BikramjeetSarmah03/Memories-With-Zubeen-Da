import { createFileRoute } from "@tanstack/react-router";

import z from "zod";

export const AuthSearchParams = z.object({
  redirect: z.string().optional().catch(""),
});

export const Route = createFileRoute("/auth/login")({
  component: RouteComponent,
  validateSearch: AuthSearchParams,
});

function RouteComponent() {
  return <div>Hello "/auth/login"!</div>;
}
