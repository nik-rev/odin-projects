import LoginForm from "@/components/LoginForm";
import LoginGithub from "@/components/LoginGithub";

export default function SignIn() {
  return (
    <div className="bg-green-200 p-10">
      Sign In
      <LoginForm />
      <LoginGithub />
    </div>
  );
}
