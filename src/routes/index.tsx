import { createFileRoute, redirect } from '@tanstack/react-router';
import { Navbar } from '@/components/Navbar';

export const Route = createFileRoute('/')({
	component: Home,
	beforeLoad: async ({ context }) => {
		if (context.userId) {
			throw redirect({ to: '/dashboard' });
		}
	},
});

function Home() {
	return (
		<div>
			<Navbar />
			<h1>Welcome to the Home Page</h1>
		</div>
	);
}
