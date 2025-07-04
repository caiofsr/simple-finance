/// <reference types="vite/client" />

import { ClerkProvider } from '@clerk/tanstack-react-start';
import { getAuth } from '@clerk/tanstack-react-start/server';
import type { ConvexQueryClient } from '@convex-dev/react-query';
import type { QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createRootRouteWithContext, HeadContent, Outlet, Scripts, useRouteContext } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { createServerFn } from '@tanstack/react-start';
import { getWebRequest } from '@tanstack/react-start/server';
import { ConvexProvider, type ConvexReactClient } from 'convex/react';
import type { ReactNode } from 'react';
import { NotFound } from '@/components/NotFound.js';
import appCss from '@/styles/app.css?url';
import { seo } from '@/utils/seo';

const CLERK_PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const CLERK_KEY = process.env.CLERK_SECRET_KEY;

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
			...seo({
				title: 'Simple Finance',
				description: 'A simple finance management tool',
				keywords: 'finance, management, simple',
			}),
		],
		links: [{ rel: 'stylesheet', href: appCss }],
	}),
	component: RootComponent,
	notFoundComponent: () => <NotFound />,
	beforeLoad: async (ctx) => {
		const auth = await fetchClerkAuth();
		const { userId, token } = auth;

		if (token) {
			ctx.context.convexQueryClient.serverHttpClient?.setAuth(token);
		}

		return {
			userId,
			token,
		};
	},
});

const fetchClerkAuth = createServerFn({ method: 'GET' }).handler(async () => {
	const auth = await getAuth(getWebRequest());
	const token = await auth.getToken({ template: 'convex' });

	return {
		userId: auth.userId,
		token,
	};
});

function RootComponent() {
	const context = useRouteContext({ from: Route.id });
	return (
		<ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY} key={CLERK_KEY}>
			<ConvexProvider client={context.convexClient}>
				<RootDocument>
					<Outlet />
				</RootDocument>
			</ConvexProvider>
		</ClerkProvider>
	);
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<html lang="pt-BR" className="dark">
			<head>
				<HeadContent />
			</head>
			<body>
				{children}
				<Scripts />
				<TanStackRouterDevtools />
				<ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-right" />
			</body>
		</html>
	);
}
