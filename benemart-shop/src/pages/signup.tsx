import Container from "@/components/ui/container";
import Layout from "@/components/layout/layout";
import SignUpForm from "@/components/auth/sign-up-form";
import PageHeader from "@/components/ui/page-header";

export default function SignUpPage() {
	return (
		<>
			<PageHeader pageHeader="Register" />
			<Container>
				<div className="py-16 lg:py-20">
					<SignUpForm />
				</div>
			</Container>
		</>
	);
}

SignUpPage.Layout = Layout;