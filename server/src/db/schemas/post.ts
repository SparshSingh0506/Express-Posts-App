import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";
import { usersTable } from "./user";

export const postsTable = pgTable("posts", {
  id: uuid("id").primaryKey(),
  userId: uuid("user_id").references(() => usersTable.id, {onDelete: "cascade"}).notNull(),
  mediaUrl: text("media_url").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull()
});
