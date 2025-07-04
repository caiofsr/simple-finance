import { createFileRoute, Link, Outlet, redirect, useRouterState } from '@tanstack/react-router';
import { Navbar } from '@/components/Navbar';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const Route = createFileRoute('/_authed')({
	beforeLoad: ({ context }) => {
		if (!context.userId) {
			throw redirect({ to: '/sign-in', replace: true });
		}
	},
	component: RouteComponent,
});

function RouteComponent() {
	const { location } = useRouterState();

	return (
		<>
			<Navbar />
			<div className="p-4">
				<Tabs value={location.pathname}>
					<TabsList>
						<Link to="/dashboard">
							<TabsTrigger value="/dashboard">Overview</TabsTrigger>
						</Link>
						<Link to="/transactions">
							<TabsTrigger value="/transactions">Transactions</TabsTrigger>
						</Link>
					</TabsList>
				</Tabs>
			</div>
			<Outlet />
		</>
	);
}
