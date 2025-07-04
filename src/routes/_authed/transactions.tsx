import { createFileRoute } from '@tanstack/react-router';
import { DataTable } from '@/components/DataTable';
import data from './data.json';

export const Route = createFileRoute('/_authed/transactions')({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex flex-1 flex-col">
			<DataTable data={data} />
			<DataTable data={data} />
		</div>
	);
}
