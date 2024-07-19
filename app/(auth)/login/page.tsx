import LoginCredentials from "@/components/auth/login-credentials";
import LoginGithub from "@/components/auth/login-github";
import { LoginMagic } from "@/components/auth/login-magic";

export default function Login() {
  return (
    <div>
      <LoginMagic />
      <LoginCredentials />
      <LoginGithub />
    </div>
  );
}
