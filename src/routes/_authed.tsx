import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';
import { Navbar } from '@/components/Navbar';

export const Route = createFileRoute('/_authed')({
	beforeLoad: ({ context }) => {
		if (!context.userId) {
			throw redirect({ to: '/sign-in', replace: true });
		}
	},
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
}
