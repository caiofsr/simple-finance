if (typeof window === 'undefined') {
	throw new Error('This script should only be run in the browser.');
}

(() => {
	const theme = localStorage.getItem('simplefin-ui-theme');

	if (!theme) return;

	if (theme === 'system') {
		const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		if (systemTheme === 'dark') {
			document.documentElement.classList.add('dark');
		}
		return;
	}

	if (theme === 'dark') {
		document.documentElement.classList.add('dark');
	}
})();
