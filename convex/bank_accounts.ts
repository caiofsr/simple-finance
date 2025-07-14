import { query } from './_generated/server';

export default query({
	handler: async (ctx) => {
		console.log('Write and test your query function here!');
		return await ctx.db.query('bank_accounts').take(10);
	},
});
