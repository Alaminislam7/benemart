import Input from '@/components/ui/form/input';
import Button from '@/components/ui/button';
import TextArea from '@/components/ui/form/text-area';
import { useForm } from 'react-hook-form';

interface ContactFormValues {
	name: string;
	email: string;
	subject: string;
	message: string;
}

const ContactForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ContactFormValues>();
	function onSubmit(values: ContactFormValues) {
		console.log(values, "contact");
	}
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="w-full mx-auto flex flex-col justify-center "
			noValidate
		>
			<div className="flex flex-col space-y-5">
				<div className="flex flex-col md:flex-row space-y-5 md:space-y-0">
					<Input
						labelKey="Your Name (required)"
						placeholderKey="enter your name"
						{...register("name", { required: "Your Name" })}
						className="w-full md:w-1/2 "
						errorKey={errors.name?.message}
						variant="solid"
					/>
					<Input
						labelKey="Your Email (required)"
						type="email"
						placeholderKey="enter your email"
						{...register("email", {
							required: "email-required",
							pattern: {
								value:
									/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
								message: "email-error",
							},
						})}
						className="w-full md:w-1/2 md:ms-2.5 lg:ms-5 mt-2 md:mt-0"
						errorKey={errors.email?.message}
						variant="solid"
					/>
				</div>
				<Input
					labelKey="subject"
					{...register("subject", { required: "forms:name-subject" })}
					className="relative"
					placeholderKey="enter your subject"
					errorKey={errors.subject?.message}
					variant="solid"
				/>
				<TextArea
					labelKey="message"
					{...register("message")}
					className="relative mb-4"
					placeholderKey="enter your message"
				/>
				<div className="relative">
					<Button
						type="submit"
						className="h-12 lg:h-14 mt-1 text-sm lg:text-base w-full sm:w-auto"
					>
						{"Send Message"}
					</Button>
				</div>
			</div>
		</form>
	);
};

export default ContactForm;
