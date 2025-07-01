import { Link } from '@tanstack/react-router';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export function NotFound() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-background">
			<Card className="w-full max-w-md">
				<CardHeader>
					<CardTitle className="text-4xl font-bold">404</CardTitle>
					<CardDescription>Oops, it looks like you've taken a wrong turn.</CardDescription>
				</CardHeader>
				<CardContent>
					<p>The page you're looking for doesn't exist or has been moved.</p>
				</CardContent>
				<CardFooter>
					<Link
						to="/"
						className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
					>
						Go back home
					</Link>
				</CardFooter>
			</Card>
		</div>
	);
}
