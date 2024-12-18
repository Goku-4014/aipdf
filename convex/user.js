import { v } from "convex/values"
import { mutation } from "./_generated/server"

export const createUser = mutation({
    args: {
        email: v.string(),
        userName: v.string(),
        imageUrl: v.string()
    },
    handler: async (ctx, args) => {
        // Check if the user already exists
        const existingUser = await ctx.db.query('users')
            .filter((q) => q.eq(q.field('email'), args.email))
            .collect();

        if (existingUser.length === 0) {
            // Insert new user if no existing user is found
            await ctx.db.insert('users', {
                email: args.email,
                userName: args.userName,
                imageUrl: args.imageUrl
            });
            return 'Inserted new user';
        } else {
            // Return a message if the user already exists
            return 'User already exists';
        }
    }
});
