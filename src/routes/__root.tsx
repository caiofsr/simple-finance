/// <reference types="vite/client" />

import { ClerkProvider, useAuth } from '@clerk/tanstack-react-start';
import { getAuth } from '@clerk/tanstack-react-start/server';
import type { ConvexQueryClient } from '@convex-dev/react-query';
import type { QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createRootRouteWithContext, HeadContent, Outlet, Scripts, useRouteContext } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { createServerFn } from '@tanstack/react-start';
import { getWebRequest } from '@tanstack/react-start/server';
import { ConvexProviderWithAuth, type ConvexReactClient } from 'convex/react';
import type { ReactNode } from 'react';
import { DefaultCatchBoundary } from '@/components/DefaultCatchBoundary';
import { NotFound } from '@/components/NotFound';
import appCss from '@/styles/app.css?url';

const fetchClerkAuth = createServerFn({ method: 'GET' }).handler(async () => {
	const auth = await getAuth(getWebRequest());
	const token = await auth.getToken({ template: 'convex' });

	return {
		userId: auth.userId,
		token,
	};
});

export const Route = createRootRouteWithContext<{
	queryClient: QueryClient;
	convexClient: ConvexReactClient;
	convexQueryClient: ConvexQueryClient;
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
			{
				title: 'Simple Finance',
			},
		],
		links: [
			{ rel: 'stylesheet', href: appCss },
			{ rel: 'icon', href: '/favicon.ico' },
			{ rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
			{ rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
			{ rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
		],
	}),
	beforeLoad: async ({ context }) => {
		const auth = await fetchClerkAuth();

		const { userId, token } = auth;

		if (token) {
			context.convexQueryClient.serverHttpClient?.setAuth(token);
		}

		return {
			userId,
			token,
		};
	},
	component: RootComponent,
	notFoundComponent: NotFound,
	errorComponent: (props) => {
		return (
			<RootDocument>
				<DefaultCatchBoundary {...props} />
			</RootDocument>
		);
	},
});

function convexUseAuth() {
	const clerkAuth = useAuth();
	return {
		isLoading: !clerkAuth.isLoaded,
		isAuthenticated: clerkAuth.isSignedIn ?? false,
		fetchAccessToken: async ({ forceRefreshToken }: { forceRefreshToken: boolean }) => {
			return clerkAuth.getToken({ skipCache: forceRefreshToken });
		},
	};
}

function RootComponent() {
	const context = useRouteContext({ from: Route.id });

	return (
		<ClerkProvider>
			<ConvexProviderWithAuth client={context.convexClient} useAuth={convexUseAuth}>
				<RootDocument>
					<Outlet />
				</RootDocument>
			</ConvexProviderWithAuth>
		</ClerkProvider>
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
				<TanStackRouterDevtools position="bottom-right" />
				<ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />
				<Scripts />
			</body>
		</html>
	);
}
