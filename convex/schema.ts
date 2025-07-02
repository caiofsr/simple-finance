import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
	bank_accounts: defineTable({
		name: v.string(),
	}),
});
