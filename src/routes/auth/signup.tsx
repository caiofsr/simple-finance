import { SignUp } from '@clerk/tanstack-react-start';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/auth/signup')({
	component: RouteComponent,
	head: () => ({
		meta: [
			{
				name: 'description',
				content: 'Cadastre-se para acessar o Finanças Simples',
			},
			{
				title: 'Finanças Simples - Cadastro',
			},
		],
	}),
});

function RouteComponent() {
	return <SignUp routing="hash" />;
}
