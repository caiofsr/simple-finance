import { SignUp } from '@clerk/tanstack-react-start';
import { dark } from '@clerk/themes';
import { createFileRoute } from '@tanstack/react-router';
import { useTheme } from '@/hooks/use-theme';

export const Route = createFileRoute('/sign-up')({
	component: Page,
});

function Page() {
	const { theme } = useTheme();

	return (
		<div className="grid h-screen place-items-center">
			<SignUp
				appearance={{
					baseTheme: theme === 'dark' ? dark : undefined,
				}}
			/>
		</div>
	);
}
