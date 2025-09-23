import { AuthButton } from "../auth/auth-button";

export function Header() {
  return (
    <div className="flex justify-between items-center shadow-sm px-4 py-2 border-b">
      <h1>LOGO</h1>

      <AuthButton />
    </div>
  );
}
