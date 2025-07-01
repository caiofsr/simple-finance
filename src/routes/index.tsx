import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
	component: Home,
});

function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
			<h1 className="text-4xl font-bold mb-4">Welcome to Simple Finance</h1>
			<p className="text-lg text-gray-700 mb-8">Your personal finance management tool.</p>
		</div>
	);
}
