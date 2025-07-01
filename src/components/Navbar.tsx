import { SignedIn, SignedOut, SignOutButton, UserButton } from '@clerk/tanstack-react-start';
import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';

export function Navbar() {
	return (
		<div className="flex items-center justify-between p-4 border-b">
			<Link to="/" className="text-xl font-bold">
				Simple Finance
			</Link>
			<div className="flex items-center gap-4">
				<SignedIn>
					<UserButton />
					<Button variant="ghost" asChild>
						<SignOutButton />
					</Button>
				</SignedIn>
				<SignedOut>
					<Link to="/sign-in">
						<Button variant="ghost">Sign In</Button>
					</Link>
				</SignedOut>
			</div>
		</div>
	);
}
