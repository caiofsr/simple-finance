import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

export const createBackAccount = mutation({
	args: { name: v.string() },
	handler: async ({ db }, { name }) => {
		const bankAccountId = await db.insert('bank_accounts', { name });
		return bankAccountId;
	},
});

export const getBankAccounts = query({
	handler: async ({ db }) => {
		const bankAccounts = await db.query('bank_accounts').collect();
		return bankAccounts;
	},
});
