import { UserButton } from '@clerk/tanstack-react-start';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authed/dashboard')({
	component: RouteComponent,
});

function RouteComponent() {
	return <UserButton />;
}
