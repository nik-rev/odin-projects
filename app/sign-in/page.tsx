import LoginGithub from "@/components/auth/LoginGithub";
import LoginCredentials from "@/components/auth/LoginCredentials";

export default function SignIn() {
  return (
    <div>
      <LoginCredentials />
      <LoginGithub />
    </div>
  );
}
