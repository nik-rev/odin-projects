import { forgotPassword } from "./actions";

export default function ForgotPassword() {
  return (
    <form action={forgotPassword}>
      <input placeholder="Email" name="email" type="text" />
      <button type="submit">Send password change</button>
    </form>
  );
}
