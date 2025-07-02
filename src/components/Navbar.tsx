import { SignedIn, SignedOut, UserButton } from '@clerk/tanstack-react-start';
import { dark } from '@clerk/themes';
import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/use-theme';
import { ModeToggle } from './ThemeToggle';

export function Navbar() {
	const { theme } = useTheme();

	return (
		<div className="flex items-center justify-between p-4 border-b">
			<Link to="/" className="text-xl font-bold">
				Simple Finance
			</Link>
			<div className="flex items-center gap-4">
				<ModeToggle />
				<SignedIn>
					<UserButton
						appearance={{
							baseTheme: theme === 'dark' ? dark : undefined,
						}}
					/>
				</SignedIn>
				<SignedOut>
					<Link to="/sign-in">
						<Button variant="ghost">Sign In</Button>
					</Link>
					<Link to="/sign-up">
						<Button variant="default">Sign Up</Button>
					</Link>
				</SignedOut>
			</div>
		</div>
	);
}
