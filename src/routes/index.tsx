import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/tanstack-react-start';
import { convexQuery } from '@convex-dev/react-query';
import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { api } from 'convex/_generated/api';

export const Route = createFileRoute('/')({
	component: Home,
});

function Home() {
	const { data } = useSuspenseQuery(convexQuery(api.bank_accounts.default, {}));

	return (
		<div>
			<h1>Index Route</h1>
			<SignedIn>
				<p>You are signed in</p>
				<UserButton />
			</SignedIn>
			<SignedOut>
				<p>You are signed out</p>
				<SignInButton />
			</SignedOut>
			<h2>Bank Accounts</h2>
			<ul>
				{data.map((account) => (
					<li key={account._id}>{account.name}</li>
				))}
			</ul>
		</div>
	);
}
