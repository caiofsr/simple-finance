import { SignIn } from '@clerk/tanstack-react-start';
import { dark } from '@clerk/themes';
import { createFileRoute } from '@tanstack/react-router';
import { useTheme } from '@/hooks/use-theme';

export const Route = createFileRoute('/sign-in')({
	component: Page,
});

function Page() {
	const { theme } = useTheme();

	return (
		<div className="grid h-screen place-items-center">
			<SignIn
				appearance={{
					baseTheme: theme === 'dark' ? dark : undefined,
				}}
			/>
		</div>
	);
}
