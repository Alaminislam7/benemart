import { useUI } from "@/contexts/ui.context";
import Modal from "./modal";
import dynamic from "next/dynamic";
const LoginForm = dynamic(() => import("@/components/auth/login-form"));
const SignUpForm = dynamic(() => import("@/components/auth/sign-up-form"));

const ManagedModal: React.FC = () => {
	const { displayModal, closeModal, modalView } = useUI();
	return (
		<Modal open={displayModal} onClose={closeModal}>
			{modalView === "LOGIN_VIEW" && <LoginForm />}
			{modalView === "SIGN_UP_VIEW" && <SignUpForm />}
		</Modal>
	);
};

export default ManagedModal;
