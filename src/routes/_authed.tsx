import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authed')({
	beforeLoad: async () => {
		// const { userId } = await fetchClerkAuth();
		// if (!userId) {
		// 	return redirect({ to: '/' });
		// }
	},
});
