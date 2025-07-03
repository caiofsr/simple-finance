import { convexQuery } from '@convex-dev/react-query';
import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { api } from 'convex/_generated/api';

export const Route = createFileRoute('/_authed/dashboard')({
	component: RouteComponent,
});

function RouteComponent() {
	const { data } = useQuery(convexQuery(api.bankAccounts.getBankAccounts, {}));

	return (
		<div>
			<h1>Dashboard</h1>
			<ul>
				{data?.map((account) => (
					<li key={account._id}>{account.name}</li>
				))}
			</ul>
		</div>
	);
}
