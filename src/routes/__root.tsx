import { ClerkProvider } from '@clerk/tanstack-react-start';
import { getAuth } from '@clerk/tanstack-react-start/server';
import type { QueryClient } from '@tanstack/react-query';
import { createRootRouteWithContext, HeadContent, Outlet, Scripts } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { createServerFn } from '@tanstack/react-start';
import { getWebRequest } from '@tanstack/react-start/server';
import type { ReactNode } from 'react';
import appCss from '@/styles/app.css?url';

export const fetchClerkAuth = createServerFn({ method: 'GET' }).handler(async () => {
	const request = getWebRequest();
	if (!request) throw new Error('No request found');
	const { userId } = await getAuth(request);

	return { userId };
});

export const Route = createRootRouteWithContext<{
	queryClient: QueryClient;
	userId?: string;
}>()({
	head: () => ({
		meta: [
			{
				charSet: 'utf-8',
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
		],
		links: [
			{
				rel: 'stylesheet',
				href: appCss,
			},
		],
	}),
	component: RootComponent,
	notFoundComponent: () => <div>Not Found</div>,
	beforeLoad: async () => {
		const { userId } = await fetchClerkAuth();

		return {
			userId,
		};
	},
});

function RootComponent() {
	return (
		<RootDocument>
			<ClerkProvider afterSignOutUrl={'/'} localization={{ locale: 'pt-BR' }}>
				<Outlet />
			</ClerkProvider>
		</RootDocument>
	);
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<html lang="pt-BR">
			<head>
				<HeadContent />
			</head>
			<body>
				{children}
				<Scripts />
				<TanStackRouterDevtools />
			</body>
		</html>
	);
}
