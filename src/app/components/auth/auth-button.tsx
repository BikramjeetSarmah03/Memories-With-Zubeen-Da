import {
  RiFacebookFill,
  RiGithubFill,
  RiGoogleFill,
  RiTwitterXFill,
} from "@remixicon/react";

import { Button } from "../ui/button";
import { authClient, useSession } from "@/app/lib/auth.client";
import { Loader2Icon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { PropsWithChildren } from "react";
import { toast } from "sonner";
import { useNavigate } from "@tanstack/react-router";

export function AuthButton() {
  const { data, isPending } = useSession();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const data = await authClient.signOut();

      if (data.error) throw new Error(data.error.message);

      toast.success("Logout Successfully");
      navigate({ to: "/" });
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  return (
    <div>
      {isPending ? (
        <Loader2Icon className="size-4 animate-spin" />
      ) : data?.session ? (
        <div className="flex items-center gap-4">
          <h1>{data.user.name}</h1>

          <div className="rounded-full size-10 overflow-hidden">
            {data.user.image ? (
              <img src={data.user.image ?? ""} alt={data.user.name} />
            ) : (
              <h1>{data.user.name.charAt(0)}</h1>
            )}
          </div>

          <Button variant={"outline"} onClick={handleLogout}>
            Logout
          </Button>
        </div>
      ) : (
        <AuthDialog>
          <Button variant={"outline"}>Login</Button>
        </AuthDialog>
      )}
    </div>
  );
}

function AuthDialog({ children }: PropsWithChildren) {
  const handleSocialLogin = async (type: "google" | "facebook") => {
    try {
      const data = await authClient.signIn.social({
        provider: type,
      });

      if (data.error) throw new Error(data.error.message);

      toast.success("Logged In Successfully");
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent>
        <DialogTitle>Login</DialogTitle>

        <div className="flex flex-wrap gap-2">
          <Button
            type="button"
            className="flex-1"
            variant="outline"
            aria-label="Login with Google"
            size="icon"
            onClick={() => handleSocialLogin("google")}
          >
            <RiGoogleFill
              className="text-[#DB4437] dark:text-primary"
              size={16}
              aria-hidden="true"
            />
          </Button>
          <Button
            className="flex-1"
            variant="outline"
            aria-label="Login with Facebook"
            size="icon"
          >
            <RiFacebookFill
              className="text-[#1877f2] dark:text-primary"
              size={16}
              aria-hidden="true"
            />
          </Button>
          <Button
            className="flex-1"
            variant="outline"
            aria-label="Login with X"
            size="icon"
          >
            <RiTwitterXFill
              className="text-[#14171a] dark:text-primary"
              size={16}
              aria-hidden="true"
            />
          </Button>
          <Button
            className="flex-1"
            variant="outline"
            aria-label="Login with GitHub"
            size="icon"
          >
            <RiGithubFill
              className="text-black dark:text-primary"
              size={16}
              aria-hidden="true"
            />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
