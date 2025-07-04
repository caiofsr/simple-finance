import { useEffect, useState } from 'react';
import { type Theme, ThemeProviderContext } from '@/contexts/theme-provider-context';

export type ThemeProviderProps = {
	children: React.ReactNode;
	defaultTheme?: Theme;
	storageKey?: string;
};

export const ThemeProvider = ({
	children,
	defaultTheme = 'light',
	storageKey = 'vite-ui-theme',
	...props
}: ThemeProviderProps) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme);

	useEffect(() => {
		const storedTheme = localStorage.getItem(storageKey) as Theme;
		if (storedTheme) {
			setTheme(storedTheme);
		}
	}, [storageKey]);

	useEffect(() => {
		const root = window.document.documentElement;

		root.classList.remove('light', 'dark');

		const localTheme = localStorage.getItem(storageKey);

		if (localTheme === 'system' || !localTheme) {
			const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

			root.classList.add(systemTheme);
			if (systemTheme === 'dark') {
				setTheme(systemTheme);
			} else {
				setTheme(systemTheme);
			}
			return;
		}

		root.classList.add(theme);
	}, [theme, storageKey]);

	const value = {
		theme,
		setTheme: (theme: Theme) => {
			localStorage.setItem(storageKey, theme);
			setTheme(theme);
		},
	};

	return (
		<ThemeProviderContext.Provider {...props} value={value}>
			{children}
		</ThemeProviderContext.Provider>
	);
};
