import { json } from '@tanstack/react-start';
import { createServerFileRoute } from '@tanstack/react-start/server';
import { HttpStatus } from '@/shared/consts/http-status';

export const ServerRoute = createServerFileRoute('/api/health-check').methods({
	GET: () => {
		return json(
			{
				status: 'ok',
			},
			{
				status: HttpStatus.OK,
			},
		);
	},
});
