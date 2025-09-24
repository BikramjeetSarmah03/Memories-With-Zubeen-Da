import {
  RiFacebookFill,
  RiGithubFill,
  RiGoogleFill,
  RiTwitterXFill,
} from "@remixicon/react";

import { authClient } from "@/app/lib/auth.client";
import {
  Loader2Icon,
  LogOutIcon,
  UploadCloudIcon,
  UserIcon,
} from "lucide-react";

import { Button } from "@/app/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";

import { PropsWithChildren } from "react";
import { toast } from "sonner";
import { Link, useNavigate } from "@tanstack/react-router";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { IUser } from "@/app/lib/types";

export function AuthButton() {
  const { data, isPending } = authClient.useSession();

  return isPending ? (
    <Loader2Icon className="size-4 animate-spin" />
  ) : data?.session ? (
    <ProfileDropdown user={data.user} />
  ) : (
    <AuthDialog>
      <Button variant={"outline"} size={"sm"}>
        Login
      </Button>
    </AuthDialog>
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

function ProfileDropdown({ user }: { user: IUser }) {
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
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        <Avatar className="border-2 border-black">
          <AvatarImage src={user.image ?? ""} alt={user.name.charAt(0)} />

          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="divide-y">
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link to="/profile">
            <UserIcon />
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link to="/post">
            <UploadCloudIcon />
            Upload
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>
          <LogOutIcon className="size-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
