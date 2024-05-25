import { LoginForm } from "@/components/forms/LoginForm";
import ModalSign from "@/components/ModalSign";

export default function SignInModal() {
  return (
    <ModalSign>
      <LoginForm />
    </ModalSign>
  );
}
