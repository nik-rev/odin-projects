import LoginCredentials from "@/components/auth/LoginCredentials";
import { LoginMagic } from "@/components/auth/LoginMagic";
import LoginGithub from "@/components/auth/LoginGithub";

export default function SignIn() {
  return (
    <div>
      <LoginMagic />
      <LoginCredentials />
      <LoginGithub />
    </div>
  );
}
