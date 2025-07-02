import { v } from 'convex/values';
import { mutation } from './_generated/server';

export const createBackAccount = mutation({
	args: { name: v.string() },
	handler: async ({ db }, { name }) => {
		const bankAccountId = await db.insert('bank_accounts', { name });
		return bankAccountId;
	},
});
