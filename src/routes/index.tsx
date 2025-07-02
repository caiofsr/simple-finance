import { createFileRoute } from '@tanstack/react-router';
import { Navbar } from '@/components/Navbar';

export const Route = createFileRoute('/')({
	component: Home,
});

function Home() {
	return (
		<div>
			<Navbar />
			<h1>Welcome to the Home Page</h1>
		</div>
	);
}
