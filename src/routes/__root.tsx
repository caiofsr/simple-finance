/// <reference types="vite/client" />

import { ClerkProvider } from '@clerk/tanstack-react-start';
import { createRootRoute, HeadContent, Outlet, Scripts } from '@tanstack/react-router';
import type { ReactNode } from 'react';
import { NotFound } from '@/components/NotFound';
import { ThemeProvider } from '@/providers/theme-provider';
import appCss from '@/styles/app.css?url';

export const Route = createRootRoute({
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
				title: 'TanStack Start Starter',
			},
		],
		links: [{ rel: 'stylesheet', href: appCss }],
	}),
	component: RootComponent,
	notFoundComponent: () => <NotFound />,
});

function RootComponent() {
	return (
		<ClerkProvider>
			<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
				<RootDocument>
					<Outlet />
				</RootDocument>
			</ThemeProvider>
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
				<Scripts />
			</body>
		</html>
	);
}
