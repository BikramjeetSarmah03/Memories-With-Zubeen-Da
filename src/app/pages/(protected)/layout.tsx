import { authQueries } from "@/app/queries/auth.query";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/(protected)")({
  component: RouteComponent,
  loader: async ({ location, context }) => {
    const session = await context.queryClient.ensureQueryData(
      authQueries.userSessionOptions()
    );

    if (!session.data?.session || !session.data?.session) {
      throw redirect({
        to: "/auth/login",
        throw: true,
        replace: true,

        search: {
          redirect: location.href,
        },
      });
    }

    return {
      user: session.data.user,
      session: session.data.session,
    };
  },
});

function RouteComponent() {
  return <Outlet />;
}
