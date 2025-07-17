import { SignIn } from '@clerk/tanstack-react-start';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/auth/signin')({
	component: RouteComponent,
	head: () => ({
		meta: [
			{
				name: 'description',
				content: 'Faça login na sua conta para acessar suas finanças pessoais.',
			},
			{
				title: 'Finanças Simples - Login',
			},
		],
	}),
});

function RouteComponent() {
	return <SignIn withSignUp forceRedirectUrl="/dashboard" routing="hash" />;
}
