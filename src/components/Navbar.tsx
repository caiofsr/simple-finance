import { SignedIn, SignedOut, UserButton } from '@clerk/tanstack-react-start';
import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { ModeToggle } from './ThemeToggle';

export function Navbar() {
	return (
		<div className="flex items-center justify-between p-4 border-b">
			<Link to="/" className="text-xl font-bold">
				Simple Finance
			</Link>
			<div className="flex items-center gap-4">
				<ModeToggle />
				<SignedIn>
					<UserButton />
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
