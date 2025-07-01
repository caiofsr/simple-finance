import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/tanstack-react-start';
import { createFileRoute } from '@tanstack/react-router';
import { Navbar } from '@/components/Navbar';

export const Route = createFileRoute('/')({
	component: Home,
});

function Home() {
	return (
		<div>
			<Navbar />
			<h1>Index Route</h1>
			<SignedIn>
				<p>You are signed in</p>
				<UserButton />
				<SignOutButton />
			</SignedIn>
			<SignedOut>
				<p>You are signed out</p>
				<SignInButton />
			</SignedOut>
		</div>
	);
}
